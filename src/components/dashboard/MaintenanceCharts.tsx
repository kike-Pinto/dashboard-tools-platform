'use client'

import { MaintenanceRow } from '@/dashboards/maintenance-dashboard/types'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

type MaintenanceChartProps = {
  data: MaintenanceRow[]
}

const COLORS = [
  '#22d3ee', // cyan
  '#f97316', // orange
  '#a78bfa', // purple
  '#22c55e', // green
  '#f43f5e', // rose
  '#64748b', // slate
]

function groupDowntimeByEquipment(data: MaintenanceRow[]) {
  const grouped = data.reduce<Record<string, number>>((acc, row) => {
    acc[row.equipment] = (acc[row.equipment] || 0) + row.downtime_hours
    return acc
  }, {})

  return Object.entries(grouped)
    .map(([equipment, downtime]) => ({
      equipment,
      downtime,
    }))
    .sort((a, b) => b.downtime - a.downtime)
}

function groupCostByFailureType(data: MaintenanceRow[]) {
  const grouped = data.reduce<Record<string, number>>((acc, row) => {
    acc[row.failure_type] = (acc[row.failure_type] || 0) + row.maintenance_cost
    return acc
  }, {})

  const sorted = Object.entries(grouped)
    .map(([failureType, cost]) => ({
      failureType,
      cost,
    }))
    .sort((a, b) => b.cost - a.cost)

  const topFailureTypes = sorted.slice(0, 5)
  const otherFailureTypes = sorted.slice(5)

  const othersCost = otherFailureTypes.reduce((acc, item) => acc + item.cost, 0)

  if (othersCost > 0) {
    topFailureTypes.push({
      failureType: 'Others',
      cost: othersCost,
    })
  }

  return topFailureTypes
}

export function DowntimeByEquipmentChart({ data }: MaintenanceChartProps) {
  const chartData = groupDowntimeByEquipment(data)

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart data={chartData} margin={{ bottom: 10 }}>
        <CartesianGrid strokeDasharray='3 3' stroke='#1e293b' />

        <XAxis
          dataKey='equipment'
          stroke='#94a3b8'
          fontSize={11}
          angle={-15}
          textAnchor='end'
          height={55}
        />

        <YAxis stroke='#94a3b8' fontSize={12} />

        <Tooltip
          cursor={{ fill: 'rgba(34, 211, 238, 0.08)' }}
          contentStyle={{
            backgroundColor: '#020617',
            border: '1px solid rgba(34, 211, 238, 0.25)',
            borderRadius: '12px',
            color: '#fff',
          }}
          labelStyle={{
            color: '#e2e8f0',
          }}
        />

        <Bar dataKey='downtime' radius={[8, 8, 0, 0]} fill='#22d3ee' />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function CostByFailureTypeChart({ data }: MaintenanceChartProps) {
  const chartData = groupCostByFailureType(data)

  return (
    <div className='grid h-full gap-4 md:grid-cols-[1fr_0.8fr]'>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie
            data={chartData}
            dataKey='cost'
            nameKey='failureType'
            cx='50%'
            cy='50%'
            outerRadius={90}
            innerRadius={55}
            paddingAngle={4}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={entry.failureType}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: '#020617',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '12px',
              color: '#fff',
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className='flex max-h-full flex-col justify-center gap-2 overflow-hidden'>
        {chartData.map((item, index) => (
          <div
            key={item.failureType}
            className='flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-slate-950/50 px-3 py-1.5'
          >
            <div className='flex min-w-0 items-center gap-2'>
              <span
                className='h-3 w-3 shrink-0 rounded-full'
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className='truncate text-xs text-slate-300'>
                {item.failureType}
              </span>
            </div>

            <span className='text-xs font-semibold text-white'>
              ${item.cost.toLocaleString('en-US')}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
