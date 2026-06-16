export const fuelDashboardConfig = {
  badge: 'Fuel Consumption Dashboard',
  title: 'Generate a fuel consumption dashboard from Excel or CSV',
  description:
    'Upload fleet fuel data and visualize fuel usage, distance, efficiency, fuel cost and consumption KPIs.',
  uploadTitle: 'Upload fuel data',
  uploadDescription:
    'Upload a CSV or Excel file with vehicle, fuel, distance and cost data.',
  sampleFile: '/samples/fuel-dashboard-sample.csv',
  requiredColumns: [
    'vehicle',
    'date',
    'fuel_liters',
    'distance_km',
    'fuel_cost',
  ],
}
