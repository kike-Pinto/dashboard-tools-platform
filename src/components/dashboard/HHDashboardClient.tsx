'use client'

import jsPDF from 'jspdf'
import { toPng } from 'html-to-image'
import { useState, useRef } from 'react'
import { hhMockData } from '@/dashboards/hh-dashboard/mockData'
import { HHRow } from '@/dashboards/hh-dashboard/types'
import { calculateHHKPIs } from '@/dashboards/hh-dashboard/calculate'
import { parseHHCsv } from '@/lib/dashboard/parseHHCsv'
import { ChartCard } from './ChartCard'
import { KPICard } from './KPICard'
import { CostByWorkerChart, HoursByActivityChart } from './HHCharts'
import { parseHHExcel } from '@/lib/dashboard/parseHHExcel'
import {
  formatCurrency,
  formatNumber,
  formatPercent,
} from '@/lib/dashboard/format'
import { UploadZone } from './UploadZone'
import { DashboardExportActions } from './DashboardExportActions'
import { DataPreviewTable } from './DataPreviewTable'

type HHDashboardClientProps = {
  requiredColumns: string[]
  sampleFile: string
}

export function HHDashboardClient({
  requiredColumns,
  sampleFile,
}: HHDashboardClientProps) {
  const [data, setData] = useState<HHRow[]>(hhMockData)
  const [fileName, setFileName] = useState('Sample data')
  const dashboardRef = useRef<HTMLDivElement>(null)
  const [isExporting, setIsExporting] = useState(false)

  const kpi = calculateHHKPIs(data)

  async function handleFileUpload(file: File) {
    const extension = file.name.split('.').pop()?.toLowerCase()

    const parsedData =
      extension === 'xlsx' || extension === 'xls'
        ? await parseHHExcel(file)
        : await parseHHCsv(file)

    if (parsedData.length === 0) {
      alert('No valid rows found. Use columns: worker, activity, hours, cost')
      return
    }

    setData(parsedData)
    setFileName(file.name)
  }

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
    link.download = 'hh-dashboard.png'

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
    pdf.save('hh-dashboard.pdf')
  }

  return (
    <>
      <UploadZone
        fileName={fileName}
        requiredColumns={requiredColumns}
        sampleFile={sampleFile}
        onFileUpload={handleFileUpload}
      />

      <div ref={dashboardRef}>
        <section className='mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          <KPICard
            label='Total HH'
            value={formatNumber(kpi.totalHH)}
            helper='Total reported hours'
          />
          <KPICard
            label='Total Cost'
            value={formatCurrency(kpi.totalCost)}
            helper='Estimated labor cost'
          />
          <KPICard
            label='Productivity'
            value={formatPercent(kpi.productivity)}
            helper='Based on completed work'
          />
          <KPICard
            label='Avg HH / Worker'
            value={formatNumber(Number(kpi.avgHH.toFixed(1)))}
            helper='Average per worker'
          />
        </section>

        <section className='mt-8 grid gap-6 xl:grid-cols-2'>
          <ChartCard
            title='Hours by activity'
            description='Compare total man-hours across activities.'
          >
            <HoursByActivityChart data={data} />
          </ChartCard>

          <ChartCard
            title='Cost by worker'
            description='Identify labor cost distribution by worker.'
          >
            <CostByWorkerChart data={data} />
          </ChartCard>
        </section>

        <section className='mt-8 rounded-3xl border border-white/10 bg-white/4 p-6'>
          <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
            <div>
              <h2 className='text-xl font-semibold'>Data preview</h2>
              <p className='mt-2 text-sm text-slate-400'>
                Showing {data.length > 10 ? 10 : data.length} of {data.length}{' '}
                rows.
              </p>
            </div>

            <DashboardExportActions
              isExporting={isExporting}
              onExportPNG={handleExportPNG}
              onExportPDF={handleExportPDF}
            />
          </div>

          <DataPreviewTable data={data} />
        </section>
      </div>
    </>
  )
}
