'use client'

import { projectMockData } from '@/dashboards/project-dashboard/mockData'
import { calculateProjectKPIs } from '@/dashboards/project-dashboard/calculate'
import {
  formatCurrency,
  formatNumber,
  formatPercent,
} from '@/lib/dashboard/format'
import { KPICard } from './KPICard'
import { UploadZone } from './UploadZone'

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
  const data = projectMockData
  const kpi = calculateProjectKPIs(data)

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
    </>
  )
}
