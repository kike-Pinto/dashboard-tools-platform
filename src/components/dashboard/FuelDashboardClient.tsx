'use client'

import { fuelMockData } from '@/dashboards/fuel-dashboard/mockData'
import { calculateFuelKPIs } from '@/dashboards/fuel-dashboard/calculate'
import { formatCurrency, formatNumber } from '@/lib/dashboard/format'
import { KPICard } from './KPICard'
import { UploadZone } from './UploadZone'

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
  const data = fuelMockData
  const kpi = calculateFuelKPIs(data)

  return (
    <>
      <UploadZone
        fileName='Sample data'
        requiredColumns={requiredColumns}
        sampleFile={sampleFile}
        uploadTitle={uploadTitle}
        uploadDescription={uploadDescription}
        onFileUpload={() => alert('Upload will be connected in the next step.')}
      />

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
    </>
  )
}
