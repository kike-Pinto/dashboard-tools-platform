import { MaintenanceRow } from './types'

export const maintenanceMockData: MaintenanceRow[] = [
  {
    equipment: 'Pump A',
    failure_type: 'Mechanical',
    downtime_hours: 6,
    repair_hours: 3,
    maintenance_cost: 1200,
  },
  {
    equipment: 'Conveyor B',
    failure_type: 'Electrical',
    downtime_hours: 4,
    repair_hours: 2,
    maintenance_cost: 850,
  },
  {
    equipment: 'Compressor C',
    failure_type: 'Mechanical',
    downtime_hours: 8,
    repair_hours: 5,
    maintenance_cost: 2100,
  },
  {
    equipment: 'Pump A',
    failure_type: 'Leak',
    downtime_hours: 3,
    repair_hours: 1.5,
    maintenance_cost: 600,
  },
  {
    equipment: 'Generator D',
    failure_type: 'Electrical',
    downtime_hours: 5,
    repair_hours: 2.5,
    maintenance_cost: 1500,
  },
]
