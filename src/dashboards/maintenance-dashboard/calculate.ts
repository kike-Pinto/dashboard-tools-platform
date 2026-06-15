import { MaintenanceRow } from './types'

export function calculateMaintenanceKPIs(data: MaintenanceRow[]) {
  const totalDowntime = data.reduce((acc, row) => acc + row.downtime_hours, 0)

  const totalRepairHours = data.reduce((acc, row) => acc + row.repair_hours, 0)

  const totalMaintenanceCost = data.reduce(
    (acc, row) => acc + row.maintenance_cost,
    0,
  )

  const avgRepairTime = data.length > 0 ? totalRepairHours / data.length : 0

  const avgDowntime = data.length > 0 ? totalDowntime / data.length : 0

  return {
    totalDowntime,
    totalRepairHours,
    totalMaintenanceCost,
    avgRepairTime,
    avgDowntime,
    totalEvents: data.length,
  }
}
