'use client'

import jsPDF from 'jspdf'
import { useRef, useState } from 'react'
import { toPng } from 'html-to-image'
import { workforceMockData } from '@/dashboards/workforce-dashboard/mockData'
import { WorkforceRow } from '@/dashboards/workforce-dashboard/types'
import { calculateWorkforceKPIs } from '@/dashboards/workforce-dashboard/calculate'
import { formatCurrency, formatNumber } from '@/lib/dashboard/format'
import {
  HoursByActivityWorkforceChart,
  OutputByWorkerChart,
} from './WorkforceCharts'
import { ChartCard } from './ChartCard'
import { DashboardExportActions } from './DashboardExportActions'
import { KPICard } from './KPICard'
import { UploadZone } from './UploadZone'

type WorkforceDashboardClientProps = {
  requiredColumns: string[]
  sampleFile: string
  uploadTitle: string
  uploadDescription: string
}

export function WorkforceDashboardClient({
  requiredColumns,
  sampleFile,
  uploadTitle,
  uploadDescription,
}: WorkforceDashboardClientProps) {
  const [data] = useState<WorkforceRow[]>(workforceMockData)
  const [fileName] = useState('Sample data')
  const [isExporting, setIsExporting] = useState(false)
  const dashboardRef = useRef<HTMLDivElement>(null)

  const kpi = calculateWorkforceKPIs(data)

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
    link.download = 'workforce-dashboard.png'
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
    pdf.save('workforce-dashboard.pdf')
  }

  function handleFileUpload() {
    alert('CSV and Excel upload will be connected in the next step.')
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
            label='Total Hours'
            value={formatNumber(kpi.totalHours)}
            helper='Total labor hours'
          />

          <KPICard
            label='Total Output'
            value={formatNumber(kpi.totalOutput)}
            helper='Total completed output'
          />

          <KPICard
            label='Labor Cost'
            value={formatCurrency(kpi.totalLaborCost)}
            helper='Total labor cost'
          />

          <KPICard
            label='Productivity'
            value={`${kpi.productivity.toFixed(2)} / hour`}
            helper='Output per labor hour'
          />
        </section>

        <section className='mt-8 grid gap-6 xl:grid-cols-2'>
          <ChartCard
            title='Output by worker'
            description='Compare total output by worker.'
          >
            <OutputByWorkerChart data={data} />
          </ChartCard>

          <ChartCard
            title='Hours by activity'
            description='Labor hours distribution by activity.'
          >
            <HoursByActivityWorkforceChart data={data} />
          </ChartCard>
        </section>

        <section className='mt-8 rounded-3xl border border-white/10 bg-white/4 p-6'>
          <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
            <div>
              <h2 className='text-xl font-semibold'>Data preview</h2>
              <p className='mt-2 text-sm text-slate-400'>
                Showing {data.length > 10 ? 10 : data.length} of {data.length}{' '}
                workforce records.
              </p>
            </div>

            <DashboardExportActions
              isExporting={isExporting}
              onExportPNG={handleExportPNG}
              onExportPDF={handleExportPDF}
            />
          </div>

          <div className='mt-6 overflow-x-auto rounded-2xl border border-white/10'>
              <table className='min-w-180 w-full text-left text-sm'>
              <thead className='bg-slate-900 text-slate-300'>
                <tr>
                  <th className='px-4 py-3'>Worker</th>
                  <th className='px-4 py-3'>Activity</th>
                  <th className='px-4 py-3'>Hours</th>
                  <th className='px-4 py-3'>Output</th>
                  <th className='px-4 py-3'>Labor Cost</th>
                </tr>
              </thead>

              <tbody className='divide-y divide-white/10 bg-slate-950/40 text-slate-400'>
                {data.slice(0, 10).map((row) => (
                  <tr key={`${row.worker}-${row.activity}-${row.hours}`}>
                    <td className='px-4 py-3'>{row.worker}</td>
                    <td className='px-4 py-3'>{row.activity}</td>
                    <td className='px-4 py-3'>{formatNumber(row.hours)}</td>
                    <td className='px-4 py-3'>{formatNumber(row.output)}</td>
                    <td className='px-4 py-3'>
                      {formatCurrency(row.labor_cost)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {data.length > 10 && (
              <div className='border-t border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-400'>
                Only the first 10 rows are shown to keep the dashboard export
                clean.
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}
