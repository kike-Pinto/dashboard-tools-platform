export const projectDashboardConfig = {
  badge: 'Project KPI Dashboard',
  title: 'Generate a project KPI dashboard from Excel or CSV',
  description:
    'Upload project data and visualize progress, budget, cost, task status and project performance KPIs.',
  uploadTitle: 'Upload project data',
  uploadDescription:
    'Upload a CSV or Excel file with project progress, budget and task data.',
  sampleFile: '/samples/project-dashboard-sample.csv',
  requiredColumns: [
    'project',
    'task',
    'planned_progress',
    'actual_progress',
    'budget',
    'cost',
    'status',
  ],
}
