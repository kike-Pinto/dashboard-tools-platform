import Papa from 'papaparse'
import { HHRow } from '@/dashboards/hh-dashboard/types'

type RawRow = {
  worker?: string
  activity?: string
  hours?: string
  cost?: string
}

export function parseHHCsv(file: File): Promise<HHRow[]> {
  return new Promise((resolve, reject) => {
    Papa.parse<RawRow>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const rows: HHRow[] = results.data
          .map((row) => ({
            worker: row.worker?.trim() || '',
            activity: row.activity?.trim() || '',
            hours: Number(row.hours),
            cost: Number(row.cost),
          }))
          .filter(
            (row) =>
              row.worker &&
              row.activity &&
              !Number.isNaN(row.hours) &&
              !Number.isNaN(row.cost),
          )

        resolve(rows)
      },
      error: (error) => {
        reject(error)
      },
    })
  })
}
