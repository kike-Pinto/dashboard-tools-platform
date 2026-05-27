import * as XLSX from 'xlsx'
import { HHRow } from '@/dashboards/hh-dashboard/types'

type RawRow = {
  worker?: string
  activity?: string
  hours?: number | string
  cost?: number | string
}

export async function parseHHExcel(file: File): Promise<HHRow[]> {
  const buffer = await file.arrayBuffer()
  const workbook = XLSX.read(buffer, { type: 'array' })
  const firstSheetName = workbook.SheetNames[0]
  const worksheet = workbook.Sheets[firstSheetName]

  const rawRows = XLSX.utils.sheet_to_json<RawRow>(worksheet)

  return rawRows
    .map((row) => ({
      worker: String(row.worker || '').trim(),
      activity: String(row.activity || '').trim(),
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
}
