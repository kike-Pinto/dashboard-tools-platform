import Papa from 'papaparse'
import { MaintenanceRow } from '@/dashboards/maintenance-dashboard/types'

type RawRow = {
  equipment?: string
  failure_type?: string
  downtime_hours?: string
  repair_hours?: string
  maintenance_cost?: string
}

export function parseMaintenanceCsv(file: File): Promise<MaintenanceRow[]> {
  return new Promise((resolve, reject) => {
    Papa.parse<RawRow>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const rows: MaintenanceRow[] = results.data
          .map((row) => ({
            equipment: row.equipment?.trim() || '',
            failure_type: row.failure_type?.trim() || '',
            downtime_hours: Number(row.downtime_hours),
            repair_hours: Number(row.repair_hours),
            maintenance_cost: Number(row.maintenance_cost),
          }))
          .filter(
            (row) =>
              row.equipment &&
              row.failure_type &&
              !Number.isNaN(row.downtime_hours) &&
              !Number.isNaN(row.repair_hours) &&
              !Number.isNaN(row.maintenance_cost),
          )

        resolve(rows)
      },
      error: reject,
    })
  })
}
