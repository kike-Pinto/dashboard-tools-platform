'use client'

import jsPDF from 'jspdf'
import { useRef, useState } from 'react'
import { toPng } from 'html-to-image'
import { maintenanceMockData } from '@/dashboards/maintenance-dashboard/mockData'
import { MaintenanceRow } from '@/dashboards/maintenance-dashboard/types'
import { calculateMaintenanceKPIs } from '@/dashboards/maintenance-dashboard/calculate'
import { formatCurrency, formatNumber } from '@/lib/dashboard/format'
import { ChartCard } from './ChartCard'
import { DashboardExportActions } from './DashboardExportActions'
import { KPICard } from './KPICard'
import { UploadZone } from './UploadZone'
import {
  CostByFailureTypeChart,
  DowntimeByEquipmentChart,
} from './MaintenanceCharts'
import { parseMaintenanceCsv } from '@/lib/dashboard/parseMaintenanceCsv'
import { parseMaintenanceExcel } from '@/lib/dashboard/parseMaintenanceExcel'

type MaintenanceDashboardClientProps = {
  requiredColumns: string[]
  sampleFile: string
  uploadTitle: string
  uploadDescription: string
}

export function MaintenanceDashboardClient({
  requiredColumns,
  sampleFile,
  uploadTitle,
  uploadDescription,
}: MaintenanceDashboardClientProps) {
  const [data, setData] = useState<MaintenanceRow[]>(maintenanceMockData)
  const [fileName, setFileName] = useState('Sample data')
  const [isExporting, setIsExporting] = useState(false)
  const dashboardRef = useRef<HTMLDivElement>(null)

  const kpi = calculateMaintenanceKPIs(data)

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
    link.download = 'maintenance-dashboard.png'
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
    pdf.save('maintenance-dashboard.pdf')
  }

  async function handleFileUpload(file: File) {
    const extension = file.name.split('.').pop()?.toLowerCase()

    const parsedData =
      extension === 'xlsx' || extension === 'xls'
        ? await parseMaintenanceExcel(file)
        : await parseMaintenanceCsv(file)

    if (parsedData.length === 0) {
      alert(
        'No valid rows found. Use columns: equipment, failure_type, downtime_hours, repair_hours, maintenance_cost',
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
            label='Total Downtime'
            value={formatNumber(kpi.totalDowntime)}
            helper='Total downtime hours'
          />

          <KPICard
            label='Repair Hours'
            value={formatNumber(kpi.totalRepairHours)}
            helper='Total repair hours'
          />

          <KPICard
            label='Maintenance Cost'
            value={formatCurrency(kpi.totalMaintenanceCost)}
            helper='Total maintenance cost'
          />

          <KPICard
            label='Total Events'
            value={formatNumber(kpi.totalEvents)}
            helper='Maintenance records'
          />
        </section>

        <section className='mt-8 grid gap-6 xl:grid-cols-2'>
          <ChartCard
            title='Downtime by equipment'
            description='Compare total downtime hours by equipment.'
          >
            <DowntimeByEquipmentChart data={data} />
          </ChartCard>

          <ChartCard
            title='Cost by failure type'
            description='Top 5 failure types by maintenance cost, grouped with Others.'
          >
            <CostByFailureTypeChart data={data} />
          </ChartCard>
        </section>

        <section className='mt-8 rounded-3xl border border-white/10 bg-white/4 p-6'>
          <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
            <div>
              <h2 className='text-xl font-semibold'>Data preview</h2>
              <p className='mt-2 text-sm text-slate-400'>
                Showing {data.length > 10 ? 10 : data.length} of {data.length}{' '}
                maintenance records.
              </p>
            </div>

            <DashboardExportActions
              isExporting={isExporting}
              onExportPNG={handleExportPNG}
              onExportPDF={handleExportPDF}
            />
          </div>

          <div className='mt-6 overflow-hidden rounded-2xl border border-white/10'>
            <table className='w-full text-left text-sm'>
              <thead className='bg-slate-900 text-slate-300'>
                <tr>
                  <th className='px-4 py-3'>Equipment</th>
                  <th className='px-4 py-3'>Failure Type</th>
                  <th className='px-4 py-3'>Downtime</th>
                  <th className='px-4 py-3'>Repair Hours</th>
                  <th className='px-4 py-3'>Cost</th>
                </tr>
              </thead>

              <tbody className='divide-y divide-white/10 bg-slate-950/40 text-slate-400'>
                {data.slice(0, 10).map((row) => (
                  <tr
                    key={`${row.equipment}-${row.failure_type}-${row.downtime_hours}`}
                  >
                    <td className='px-4 py-3'>{row.equipment}</td>
                    <td className='px-4 py-3'>{row.failure_type}</td>
                    <td className='px-4 py-3'>{row.downtime_hours}</td>
                    <td className='px-4 py-3'>{row.repair_hours}</td>
                    <td className='px-4 py-3'>
                      {formatCurrency(row.maintenance_cost)}
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
