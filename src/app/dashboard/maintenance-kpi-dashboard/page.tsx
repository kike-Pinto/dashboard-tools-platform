import type { Metadata } from 'next'
import { DashboardShell } from '@/components/dashboard/DashboardShell'
import { maintenanceDashboardConfig } from '@/dashboards/maintenance-dashboard/config'

export const metadata: Metadata = {
  title: 'Maintenance KPI Dashboard - Excel and CSV Dashboard',
  description:
    'Generate a maintenance KPI dashboard from Excel or CSV. Upload equipment, downtime, repair time and cost data to visualize maintenance KPIs.',
  openGraph: {
    title: 'Maintenance KPI Dashboard - Excel and CSV Dashboard',
    description:
      'Upload maintenance data and visualize downtime, repair hours, maintenance cost and equipment KPIs.',
    type: 'website',
    images: [
      {
        url: '/og/dashboard-tools-og.png',
        width: 1200,
        height: 630,
        alt: 'Maintenance KPI Dashboard preview',
      },
    ],
  },
}

export default function MaintenanceKPIDashboardPage() {
  return (
    <DashboardShell
      badge={maintenanceDashboardConfig.badge}
      title={maintenanceDashboardConfig.title}
      description={maintenanceDashboardConfig.description}
      uploadTitle={maintenanceDashboardConfig.uploadTitle}
      uploadDescription={maintenanceDashboardConfig.uploadDescription}
      requiredColumns={maintenanceDashboardConfig.requiredColumns}
      sampleFile={maintenanceDashboardConfig.sampleFile}
      dashboardType='maintenance'
    />
  )
}
