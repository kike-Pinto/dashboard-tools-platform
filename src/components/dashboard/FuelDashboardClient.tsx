'use client'

import jsPDF from 'jspdf'
import { useRef, useState } from 'react'
import { toPng } from 'html-to-image'
import { fuelMockData } from '@/dashboards/fuel-dashboard/mockData'
import { FuelRow } from '@/dashboards/fuel-dashboard/types'
import { calculateFuelKPIs } from '@/dashboards/fuel-dashboard/calculate'
import { formatCurrency, formatNumber } from '@/lib/dashboard/format'
import { CostByVehicleChart, FuelByVehicleChart } from './FuelCharts'
import { ChartCard } from './ChartCard'
import { DashboardExportActions } from './DashboardExportActions'
import { KPICard } from './KPICard'
import { UploadZone } from './UploadZone'
import { parseFuelCsv } from '@/lib/dashboard/parseFuelCsv'
import { parseFuelExcel } from '@/lib/dashboard/parseFuelExcel'

type FuelDashboardClientProps = {
  requiredColumns: string[]
  sampleFile: string
  uploadTitle: string
  uploadDescription: string
}

export function FuelDashboardClient({
  requiredColumns,
  sampleFile,
  uploadTitle,
  uploadDescription,
}: FuelDashboardClientProps) {
  const [data, setData] = useState<FuelRow[]>(fuelMockData)
  const [fileName, setFileName] = useState('Sample data')
  const [isExporting, setIsExporting] = useState(false)
  const dashboardRef = useRef<HTMLDivElement>(null)

  const kpi = calculateFuelKPIs(data)

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
    link.download = 'fuel-dashboard.png'
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
    pdf.save('fuel-dashboard.pdf')
  }

  async function handleFileUpload(file: File) {
    const extension = file.name.split('.').pop()?.toLowerCase()

    const parsedData =
      extension === 'xlsx' || extension === 'xls'
        ? await parseFuelExcel(file)
        : await parseFuelCsv(file)

    if (parsedData.length === 0) {
      alert(
        'No valid rows found. Use columns: vehicle, date, fuel_liters, distance_km, fuel_cost',
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
            label='Total Fuel'
            value={`${formatNumber(kpi.totalFuel)} L`}
            helper='Total fuel consumed'
          />

          <KPICard
            label='Total Distance'
            value={`${formatNumber(kpi.totalDistance)} km`}
            helper='Total distance traveled'
          />

          <KPICard
            label='Fuel Cost'
            value={formatCurrency(kpi.totalCost)}
            helper='Total fuel cost'
          />

          <KPICard
            label='Avg Consumption'
            value={`${kpi.avgConsumption.toFixed(1)} L/100km`}
            helper='Average fuel consumption'
          />
        </section>

        <section className='mt-8 grid gap-6 xl:grid-cols-2'>
          <ChartCard
            title='Fuel by vehicle'
            description='Compare total fuel consumed by vehicle.'
          >
            <FuelByVehicleChart data={data} />
          </ChartCard>

          <ChartCard
            title='Cost by vehicle'
            description='Top 5 vehicles by fuel cost, grouped with Others.'
          >
            <CostByVehicleChart data={data} />
          </ChartCard>
        </section>

        <section className='mt-8 rounded-3xl border border-white/10 bg-white/4 p-6'>
          <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
            <div>
              <h2 className='text-xl font-semibold'>Data preview</h2>
              <p className='mt-2 text-sm text-slate-400'>
                Showing {data.length > 10 ? 10 : data.length} of {data.length}{' '}
                fuel records.
              </p>
            </div>

            <DashboardExportActions
              isExporting={isExporting}
              onExportPNG={handleExportPNG}
              onExportPDF={handleExportPDF}
            />
          </div>

          <div className='mt-6 overflow-x-auto rounded-2xl border border-white/10'>
            <table className='min-w-190 w-full text-left text-sm'>
              <thead className='bg-slate-900 text-slate-300'>
                <tr>
                  <th className='px-4 py-3'>Vehicle</th>
                  <th className='px-4 py-3'>Date</th>
                  <th className='px-4 py-3'>Fuel Liters</th>
                  <th className='px-4 py-3'>Distance Km</th>
                  <th className='px-4 py-3'>Fuel Cost</th>
                </tr>
              </thead>

              <tbody className='divide-y divide-white/10 bg-slate-950/40 text-slate-400'>
                {data.slice(0, 10).map((row) => (
                  <tr key={`${row.vehicle}-${row.date}-${row.fuel_liters}`}>
                    <td className='px-4 py-3'>{row.vehicle}</td>
                    <td className='px-4 py-3'>{row.date}</td>
                    <td className='px-4 py-3'>
                      {formatNumber(row.fuel_liters)} L
                    </td>
                    <td className='px-4 py-3'>
                      {formatNumber(row.distance_km)} km
                    </td>
                    <td className='px-4 py-3'>
                      {formatCurrency(row.fuel_cost)}
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
