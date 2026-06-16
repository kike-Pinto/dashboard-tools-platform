import Papa from 'papaparse'
import { FuelRow } from '@/dashboards/fuel-dashboard/types'

type RawRow = {
  vehicle?: string
  date?: string
  fuel_liters?: string
  distance_km?: string
  fuel_cost?: string
}

export function parseFuelCsv(file: File): Promise<FuelRow[]> {
  return new Promise((resolve, reject) => {
    Papa.parse<RawRow>(file, {
      header: true,
      skipEmptyLines: true,

      complete: (results) => {
        const rows = results.data
          .map((row) => ({
            vehicle: row.vehicle?.trim() || '',
            date: row.date?.trim() || '',
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

        resolve(rows)
      },

      error: reject,
    })
  })
}
