export const maintenanceDashboardConfig = {
  badge: 'Maintenance KPI Dashboard',
  title: 'Generate a maintenance KPI dashboard from Excel or CSV',
  description:
    'Upload maintenance data and visualize downtime, repair time, equipment issues and operational maintenance KPIs.',
  uploadTitle: 'Upload maintenance data',
  uploadDescription:
    'Upload a CSV or Excel file with equipment, downtime and maintenance repair data.',
  sampleFile: '/samples/maintenance-dashboard-sample.csv',
  requiredColumns: [
    'equipment',
    'failure_type',
    'downtime_hours',
    'repair_hours',
    'maintenance_cost',
  ],
}
