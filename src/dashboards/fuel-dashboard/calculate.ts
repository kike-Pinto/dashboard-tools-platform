import { FuelRow } from './types'

export function calculateFuelKPIs(data: FuelRow[]) {
  const totalFuel = data.reduce((acc, row) => acc + row.fuel_liters, 0)

  const totalDistance = data.reduce((acc, row) => acc + row.distance_km, 0)

  const totalCost = data.reduce((acc, row) => acc + row.fuel_cost, 0)

  const avgConsumption =
    totalDistance > 0 ? (totalFuel / totalDistance) * 100 : 0

  const avgCostPerKm = totalDistance > 0 ? totalCost / totalDistance : 0

  return {
    totalFuel,
    totalDistance,
    totalCost,
    avgConsumption,
    avgCostPerKm,
    totalRecords: data.length,
  }
}
