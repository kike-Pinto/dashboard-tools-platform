import * as XLSX from 'xlsx'
import { ProjectRow } from '@/dashboards/project-dashboard/types'

type RawRow = {
  project?: string
  task?: string
  planned_progress?: number | string
  actual_progress?: number | string
  budget?: number | string
  cost?: number | string
  status?: string
}

export async function parseProjectExcel(file: File): Promise<ProjectRow[]> {
  const buffer = await file.arrayBuffer()

  const workbook = XLSX.read(buffer, {
    type: 'array',
  })

  const sheet = workbook.Sheets[workbook.SheetNames[0]]

  const rawRows = XLSX.utils.sheet_to_json<RawRow>(sheet)

  return rawRows
    .map((row) => ({
      project: String(row.project || '').trim(),
      task: String(row.task || '').trim(),
      planned_progress: Number(row.planned_progress),
      actual_progress: Number(row.actual_progress),
      budget: Number(row.budget),
      cost: Number(row.cost),
      status: String(row.status || '').trim(),
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
}
