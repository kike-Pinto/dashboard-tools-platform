import { DashboardShell } from '../../../components/dashboard/DashboardShell'

export default function HHDashboardPage() {
  return (
    <DashboardShell
      badge='HH Dashboard Generator'
      title='Generate an HH dashboard from Excel or CSV'
      description='Upload workforce data and instantly visualize hours, costs, productivity and operational KPIs.'
    />
  )
}
