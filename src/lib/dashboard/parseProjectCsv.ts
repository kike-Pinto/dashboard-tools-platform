import Papa from 'papaparse'
import { ProjectRow } from '@/dashboards/project-dashboard/types'

type RawRow = {
  project?: string
  task?: string
  planned_progress?: string
  actual_progress?: string
  budget?: string
  cost?: string
  status?: string
}

export function parseProjectCsv(file: File): Promise<ProjectRow[]> {
  return new Promise((resolve, reject) => {
    Papa.parse<RawRow>(file, {
      header: true,
      skipEmptyLines: true,

      complete: (results) => {
        const rows = results.data
          .map((row) => ({
            project: row.project?.trim() || '',
            task: row.task?.trim() || '',
            planned_progress: Number(row.planned_progress),
            actual_progress: Number(row.actual_progress),
            budget: Number(row.budget),
            cost: Number(row.cost),
            status: row.status?.trim() || '',
          }))
          .filter(
            (row) =>
              row.project &&
              row.task &&
              row.status &&
              !Number.isNaN(row.planned_progress) &&
              !Number.isNaN(row.actual_progress) &&
              !Number.isNaN(row.budget) &&
              !Number.isNaN(row.cost),
          )

        resolve(rows)
      },

      error: reject,
    })
  })
}
