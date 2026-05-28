import { DashboardShell } from '@/components/dashboard/DashboardShell'
import { hhDashboardConfig } from '@/dashboards/hh-dashboard/config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HH Dashboard Generator - Excel and CSV KPI Dashboard',
  description:
    'Generate an HH dashboard from Excel or CSV. Upload workforce hours, activities and cost data to visualize KPIs, charts and reports.',
  openGraph: {
    title: 'HH Dashboard Generator - Excel and CSV KPI Dashboard',
    description:
      'Upload workforce data and instantly visualize hours, labor cost, productivity and operational KPIs.',
    type: 'website',
  },
}

export default function HHDashboardPage() {
  return (
    <DashboardShell
      badge={hhDashboardConfig.badge}
      title={hhDashboardConfig.title}
      description={hhDashboardConfig.description}
      uploadTitle={hhDashboardConfig.uploadTitle}
      uploadDescription={hhDashboardConfig.uploadDescription}
      requiredColumns={hhDashboardConfig.requiredColumns}
      sampleFile={hhDashboardConfig.sampleFile}
    />
  )
}
