'use client'

import jsPDF from 'jspdf'
import { useRef, useState } from 'react'
import { toPng } from 'html-to-image'
import { projectMockData } from '@/dashboards/project-dashboard/mockData'
import { ProjectRow } from '@/dashboards/project-dashboard/types'
import { calculateProjectKPIs } from '@/dashboards/project-dashboard/calculate'
import {
  formatCurrency,
  formatNumber,
  formatPercent,
} from '@/lib/dashboard/format'
import {
  BudgetVsCostChart,
  PlannedVsActualChart,
  TasksByStatusChart,
} from './ProjectCharts'
import { ChartCard } from './ChartCard'
import { DashboardExportActions } from './DashboardExportActions'
import { KPICard } from './KPICard'
import { UploadZone } from './UploadZone'
import { parseProjectCsv } from '@/lib/dashboard/parseProjectCsv'
import { parseProjectExcel } from '@/lib/dashboard/parseProjectExcel'

type ProjectDashboardClientProps = {
  requiredColumns: string[]
  sampleFile: string
  uploadTitle: string
  uploadDescription: string
}

export function ProjectDashboardClient({
  requiredColumns,
  sampleFile,
  uploadTitle,
  uploadDescription,
}: ProjectDashboardClientProps) {
  const [data, setData] = useState<ProjectRow[]>(projectMockData)
  const [fileName, setFileName] = useState('Sample data')

  const [isExporting, setIsExporting] = useState(false)
  const dashboardRef = useRef<HTMLDivElement>(null)

  const kpi = calculateProjectKPIs(data)

  async function handleExportPNG() {
    if (!dashboardRef.current) return

    setIsExporting(true)
    await new Promise((r) => setTimeout(r, 100))

    const image = await toPng(dashboardRef.current, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: '#020617',
    })

    setIsExporting(false)

    const link = document.createElement('a')
    link.href = image
    link.download = 'project-dashboard.png'
    link.click()
  }

  async function handleExportPDF() {
    if (!dashboardRef.current) return

    setIsExporting(true)
    await new Promise((r) => setTimeout(r, 100))

    const image = await toPng(dashboardRef.current, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: '#020617',
    })

    setIsExporting(false)

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: 'a4',
    })

    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()

    const margin = 24
    const imgProps = pdf.getImageProperties(image)
    const imgWidth = pageWidth - margin * 2
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width

    const finalHeight = Math.min(imgHeight, pageHeight - margin * 2)
    const finalWidth =
      finalHeight === imgHeight
        ? imgWidth
        : (imgProps.width * finalHeight) / imgProps.height

    const x = (pageWidth - finalWidth) / 2
    const y = margin

    pdf.addImage(image, 'PNG', x, y, finalWidth, finalHeight)
    pdf.save('project-dashboard.pdf')
  }

  async function handleFileUpload(file: File) {
    const extension = file.name.split('.').pop()?.toLowerCase()

    const parsedData =
      extension === 'xlsx' || extension === 'xls'
        ? await parseProjectExcel(file)
        : await parseProjectCsv(file)

    if (parsedData.length === 0) {
      alert(
        'No valid rows found. Use columns: project, task, planned_progress, actual_progress, budget, cost, status',
      )
      return
    }

    setData(parsedData)
    setFileName(file.name)
  }

  return (
    <>
      <UploadZone
        fileName={fileName}
        requiredColumns={requiredColumns}
        sampleFile={sampleFile}
        uploadTitle={uploadTitle}
        uploadDescription={uploadDescription}
        onFileUpload={handleFileUpload}
      />

      <div ref={dashboardRef}>
        <section className='mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          <KPICard
            label='Total Budget'
            value={formatCurrency(kpi.totalBudget)}
            helper='Planned project budget'
          />

          <KPICard
            label='Total Cost'
            value={formatCurrency(kpi.totalCost)}
            helper='Actual project cost'
          />

          <KPICard
            label='Actual Progress'
            value={formatPercent(Math.round(kpi.avgActualProgress))}
            helper='Average actual progress'
          />

          <KPICard
            label='Completed Tasks'
            value={`${formatNumber(kpi.completedTasks)} / ${formatNumber(
              kpi.totalTasks,
            )}`}
            helper='Completed project tasks'
          />
        </section>

        <section className='mt-8 grid gap-6 xl:grid-cols-2'>
          <ChartCard
            title='Planned vs actual progress'
            description='Compare planned and actual progress by task.'
          >
            <PlannedVsActualChart data={data} />
          </ChartCard>

          <ChartCard
            title='Budget vs cost'
            description='Compare planned budget and actual cost by task.'
          >
            <BudgetVsCostChart data={data} />
          </ChartCard>
        </section>

        <section className='mt-8 max-w-3xl'>
          <ChartCard
            title='Tasks by status'
            description='Task distribution by current project status.'
          >
            <TasksByStatusChart data={data} />
          </ChartCard>
        </section>

        <section className='mt-8 rounded-3xl border border-white/10 bg-white/4 p-6'>
          <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
            <div>
              <h2 className='text-xl font-semibold'>Data preview</h2>
              <p className='mt-2 text-sm text-slate-400'>
                Showing {data.length > 10 ? 10 : data.length} of {data.length}{' '}
                project tasks.
              </p>
            </div>

            <DashboardExportActions
              isExporting={isExporting}
              onExportPNG={handleExportPNG}
              onExportPDF={handleExportPDF}
            />
          </div>

          <div className='mt-6 overflow-x-auto rounded-2xl border border-white/10'>
            <table className='min-w-205 w-full text-left text-sm'>
              <thead className='bg-slate-900 text-slate-300'>
                <tr>
                  <th className='px-4 py-3'>Project</th>
                  <th className='px-4 py-3'>Task</th>
                  <th className='px-4 py-3'>Planned</th>
                  <th className='px-4 py-3'>Actual</th>
                  <th className='px-4 py-3'>Budget</th>
                  <th className='px-4 py-3'>Cost</th>
                  <th className='px-4 py-3'>Status</th>
                </tr>
              </thead>

              <tbody className='divide-y divide-white/10 bg-slate-950/40 text-slate-400'>
                {data.slice(0, 10).map((row) => (
                  <tr key={`${row.project}-${row.task}`}>
                    <td className='px-4 py-3'>{row.project}</td>
                    <td className='px-4 py-3'>{row.task}</td>
                    <td className='px-4 py-3'>
                      {formatPercent(row.planned_progress)}
                    </td>
                    <td className='px-4 py-3'>
                      {formatPercent(row.actual_progress)}
                    </td>
                    <td className='px-4 py-3'>{formatCurrency(row.budget)}</td>
                    <td className='px-4 py-3'>{formatCurrency(row.cost)}</td>
                    <td className='px-4 py-3'>{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}
