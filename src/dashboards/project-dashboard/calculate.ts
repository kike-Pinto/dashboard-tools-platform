import { ProjectRow } from './types'

export function calculateProjectKPIs(data: ProjectRow[]) {
  const totalBudget = data.reduce((acc, row) => acc + row.budget, 0)

  const totalCost = data.reduce((acc, row) => acc + row.cost, 0)

  const avgPlannedProgress =
    data.length > 0
      ? data.reduce((acc, row) => acc + row.planned_progress, 0) / data.length
      : 0

  const avgActualProgress =
    data.length > 0
      ? data.reduce((acc, row) => acc + row.actual_progress, 0) / data.length
      : 0

  const completedTasks = data.filter(
    (row) => row.status.toLowerCase() === 'completed',
  ).length

  return {
    totalBudget,
    totalCost,
    avgPlannedProgress,
    avgActualProgress,
    completedTasks,
    totalTasks: data.length,
  }
}
