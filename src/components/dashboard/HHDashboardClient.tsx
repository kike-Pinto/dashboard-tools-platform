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
import { Clock3, DollarSign, TrendingUp, Users } from 'lucide-react'

type HHDashboardClientProps = {
  requiredColumns: string[]
  sampleFile: string
  uploadTitle: string
  uploadDescription: string
}

export function HHDashboardClient({
  requiredColumns,
  sampleFile,
  uploadTitle,
  uploadDescription,
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
        uploadTitle={uploadTitle}
        uploadDescription={uploadDescription}
      />

      <div ref={dashboardRef}>
        <section className='mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          <KPICard
            label='Total HH'
            value={formatNumber(kpi.totalHH)}
            helper='Total reported hours'
            icon={<Clock3 className='h-6 w-6' />}
            iconClassName='border-cyan-400/25 bg-cyan-400/10 text-cyan-300'
            // trend='+12.4% vs prev. period'
          />
          <KPICard
            label='Total Cost'
            value={formatCurrency(kpi.totalCost)}
            helper='Estimated labor cost'
            icon={<DollarSign className='h-6 w-6' />}
            iconClassName='border-sky-400/25 bg-sky-400/10 text-sky-300'
            // trend='+8.7% vs prev. period'
          />
          <KPICard
            label='Productivity'
            value={formatPercent(kpi.productivity)}
            helper='Based on completed work'
            icon={<TrendingUp className='h-6 w-6' />}
            iconClassName='border-violet-400/25 bg-violet-400/10 text-violet-300'
            // trend='+9.2% vs prev. period'
          />
          <KPICard
            label='Avg HH / Worker'
            value={formatNumber(Number(kpi.avgHH.toFixed(1)))}
            helper='Average per worker'
            icon={<Users className='h-6 w-6' />}
            iconClassName='border-orange-400/25 bg-orange-400/10 text-orange-300'
            // trend='-3.1% vs prev. period'
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
