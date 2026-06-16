import * as XLSX from 'xlsx'
import { WorkforceRow } from '@/dashboards/workforce-dashboard/types'

type RawRow = {
  worker?: string
  activity?: string
  hours?: number | string
  output?: number | string
  labor_cost?: number | string
}

export async function parseWorkforceExcel(file: File): Promise<WorkforceRow[]> {
  const buffer = await file.arrayBuffer()

  const workbook = XLSX.read(buffer, {
    type: 'array',
  })

  const sheet = workbook.Sheets[workbook.SheetNames[0]]

  const rawRows = XLSX.utils.sheet_to_json<RawRow>(sheet)

  return rawRows
    .map((row) => ({
      worker: String(row.worker || '').trim(),
      activity: String(row.activity || '').trim(),
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
}
