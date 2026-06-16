import { WorkforceRow } from './types'

export function calculateWorkforceKPIs(data: WorkforceRow[]) {
  const totalHours = data.reduce((acc, row) => acc + row.hours, 0)

  const totalOutput = data.reduce((acc, row) => acc + row.output, 0)

  const totalLaborCost = data.reduce((acc, row) => acc + row.labor_cost, 0)

  const productivity = totalHours > 0 ? totalOutput / totalHours : 0

  const costPerOutput = totalOutput > 0 ? totalLaborCost / totalOutput : 0

  return {
    totalHours,
    totalOutput,
    totalLaborCost,
    productivity,
    costPerOutput,
    totalRecords: data.length,
  }
}
