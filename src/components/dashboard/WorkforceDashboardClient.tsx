'use client'

import { workforceMockData } from '@/dashboards/workforce-dashboard/mockData'
import { calculateWorkforceKPIs } from '@/dashboards/workforce-dashboard/calculate'
import { formatCurrency, formatNumber } from '@/lib/dashboard/format'
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
  const data = workforceMockData
  const kpi = calculateWorkforceKPIs(data)

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
    </>
  )
}
