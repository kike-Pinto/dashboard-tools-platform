import type { Metadata } from 'next'
import { DashboardShell } from '@/components/dashboard/DashboardShell'
import { workforceDashboardConfig } from '@/dashboards/workforce-dashboard/config'

export const metadata: Metadata = {
  title: 'Workforce Productivity Dashboard - Excel and CSV Dashboard',
  description:
    'Generate a workforce productivity dashboard from Excel or CSV. Upload worker, activity, hours, output and labor cost data to visualize productivity KPIs.',
  openGraph: {
    title: 'Workforce Productivity Dashboard - Excel and CSV Dashboard',
    description:
      'Upload workforce data and visualize labor hours, output, productivity, cost and team performance KPIs.',
    type: 'website',
    images: [
      {
        url: '/og/dashboard-tools-og.png',
        width: 1200,
        height: 630,
        alt: 'Workforce Productivity Dashboard preview',
      },
    ],
  },
}

export default function WorkforceProductivityDashboardPage() {
  return (
    <DashboardShell
      badge={workforceDashboardConfig.badge}
      title={workforceDashboardConfig.title}
      description={workforceDashboardConfig.description}
      uploadTitle={workforceDashboardConfig.uploadTitle}
      uploadDescription={workforceDashboardConfig.uploadDescription}
      requiredColumns={workforceDashboardConfig.requiredColumns}
      sampleFile={workforceDashboardConfig.sampleFile}
      dashboardType='workforce'
    />
  )
}
