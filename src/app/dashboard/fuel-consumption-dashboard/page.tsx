import type { Metadata } from 'next'
import { DashboardShell } from '@/components/dashboard/DashboardShell'
import { fuelDashboardConfig } from '@/dashboards/fuel-dashboard/config'

export const metadata: Metadata = {
  title: 'Fuel Consumption Dashboard - Excel and CSV Dashboard',
  description:
    'Generate a fuel consumption dashboard from Excel or CSV. Upload vehicle, fuel, distance and cost data to visualize fleet fuel KPIs.',
  openGraph: {
    title: 'Fuel Consumption Dashboard - Excel and CSV Dashboard',
    description:
      'Upload fleet fuel data and visualize fuel usage, distance, efficiency, fuel cost and consumption KPIs.',
    type: 'website',
    images: [
      {
        url: '/og/dashboard-tools-og.png',
        width: 1200,
        height: 630,
        alt: 'Fuel Consumption Dashboard preview',
      },
    ],
  },
}

export default function FuelConsumptionDashboardPage() {
  return (
    <DashboardShell
      badge={fuelDashboardConfig.badge}
      title={fuelDashboardConfig.title}
      description={fuelDashboardConfig.description}
      uploadTitle={fuelDashboardConfig.uploadTitle}
      uploadDescription={fuelDashboardConfig.uploadDescription}
      requiredColumns={fuelDashboardConfig.requiredColumns}
      sampleFile={fuelDashboardConfig.sampleFile}
      dashboardType='fuel'
    />
  )
}
