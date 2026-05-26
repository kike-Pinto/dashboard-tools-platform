import { HHRow } from './types'

export function calculateHHKPIs(data: HHRow[]) {
  const totalHH = data.reduce((acc, row) => acc + row.hours, 0)

  const totalCost = data.reduce((acc, row) => acc + row.cost, 0)

  const avgHH = totalHH / data.length

  const productivity = Math.round((totalHH / (data.length * 12)) * 100)

  return {
    totalHH,
    totalCost,
    avgHH,
    productivity,
  }
}
