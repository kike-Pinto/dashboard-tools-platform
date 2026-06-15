import type { Metadata } from 'next'
import { DashboardShell } from '@/components/dashboard/DashboardShell'
import { projectDashboardConfig } from '@/dashboards/project-dashboard/config'

export const metadata: Metadata = {
  title: 'Project KPI Dashboard - Excel and CSV Dashboard',
  description:
    'Generate a project KPI dashboard from Excel or CSV. Upload project progress, task, budget and cost data to visualize project performance KPIs.',
  openGraph: {
    title: 'Project KPI Dashboard - Excel and CSV Dashboard',
    description:
      'Upload project data and visualize progress, budget, cost, task status and project performance KPIs.',
    type: 'website',
    images: [
      {
        url: '/og/dashboard-tools-og.png',
        width: 1200,
        height: 630,
        alt: 'Project KPI Dashboard preview',
      },
    ],
  },
}

export default function ProjectKPIDashboardPage() {
  return (
    <DashboardShell
      badge={projectDashboardConfig.badge}
      title={projectDashboardConfig.title}
      description={projectDashboardConfig.description}
      uploadTitle={projectDashboardConfig.uploadTitle}
      uploadDescription={projectDashboardConfig.uploadDescription}
      requiredColumns={projectDashboardConfig.requiredColumns}
      sampleFile={projectDashboardConfig.sampleFile}
      dashboardType='project'
    />
  )
}
