import { DashboardShell } from '@/components/dashboard/DashboardShell'
import { hhDashboardConfig } from '@/dashboards/hh-dashboard/config'

export default function HHDashboardPage() {
  return (
    <DashboardShell
      badge={hhDashboardConfig.badge}
      title={hhDashboardConfig.title}
      description={hhDashboardConfig.description}
      requiredColumns={hhDashboardConfig.requiredColumns}
      sampleFile={hhDashboardConfig.sampleFile}
    />
  )
}
