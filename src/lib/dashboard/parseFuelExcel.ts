import * as XLSX from 'xlsx'
import { FuelRow } from '@/dashboards/fuel-dashboard/types'

type RawRow = {
  vehicle?: string
  date?: string
  fuel_liters?: number | string
  distance_km?: number | string
  fuel_cost?: number | string
}

export async function parseFuelExcel(file: File): Promise<FuelRow[]> {
  const buffer = await file.arrayBuffer()

  const workbook = XLSX.read(buffer, {
    type: 'array',
  })

  const sheet = workbook.Sheets[workbook.SheetNames[0]]

  const rawRows = XLSX.utils.sheet_to_json<RawRow>(sheet)

  return rawRows
    .map((row) => ({
      vehicle: String(row.vehicle || '').trim(),
      date: String(row.date || '').trim(),
      fuel_liters: Number(row.fuel_liters),
      distance_km: Number(row.distance_km),
      fuel_cost: Number(row.fuel_cost),
    }))
    .filter(
      (row) =>
        row.vehicle &&
        row.date &&
        !Number.isNaN(row.fuel_liters) &&
        !Number.isNaN(row.distance_km) &&
        !Number.isNaN(row.fuel_cost),
    )
}
