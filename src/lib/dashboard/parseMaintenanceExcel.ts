import * as XLSX from 'xlsx'
import { MaintenanceRow } from '@/dashboards/maintenance-dashboard/types'

type RawRow = {
  equipment?: string
  failure_type?: string
  downtime_hours?: number | string
  repair_hours?: number | string
  maintenance_cost?: number | string
}

export async function parseMaintenanceExcel(
  file: File,
): Promise<MaintenanceRow[]> {
  const buffer = await file.arrayBuffer()
  const workbook = XLSX.read(buffer, { type: 'array' })
  const firstSheetName = workbook.SheetNames[0]
  const worksheet = workbook.Sheets[firstSheetName]

  const rawRows = XLSX.utils.sheet_to_json<RawRow>(worksheet)

  return rawRows
    .map((row) => ({
      equipment: String(row.equipment || '').trim(),
      failure_type: String(row.failure_type || '').trim(),
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
}
