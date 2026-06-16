import Papa from 'papaparse'
import { WorkforceRow } from '@/dashboards/workforce-dashboard/types'

type RawRow = {
  worker?: string
  activity?: string
  hours?: string
  output?: string
  labor_cost?: string
}

export function parseWorkforceCsv(file: File): Promise<WorkforceRow[]> {
  return new Promise((resolve, reject) => {
    Papa.parse<RawRow>(file, {
      header: true,
      skipEmptyLines: true,

      complete: (results) => {
        const rows = results.data
          .map((row) => ({
            worker: row.worker?.trim() || '',
            activity: row.activity?.trim() || '',
            hours: Number(row.hours),
            output: Number(row.output),
            labor_cost: Number(row.labor_cost),
          }))
          .filter(
            (row) =>
              row.worker &&
              row.activity &&
              !Number.isNaN(row.hours) &&
              !Number.isNaN(row.output) &&
              !Number.isNaN(row.labor_cost),
          )

        resolve(rows)
      },

      error: reject,
    })
  })
}
