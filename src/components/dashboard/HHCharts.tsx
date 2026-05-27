'use client'

import { HHRow } from '@/dashboards/hh-dashboard/types'
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

type HHChartProps = {
  data: HHRow[]
}

const COLORS = ['#22d3ee', '#38bdf8', '#818cf8', '#a78bfa', '#f472b6']

function groupHoursByActivity(data: HHRow[]) {
  const grouped = data.reduce<Record<string, number>>((acc, row) => {
    acc[row.activity] = (acc[row.activity] || 0) + row.hours
    return acc
  }, {})

  return Object.entries(grouped).map(([activity, hours]) => ({
    activity,
    hours,
  }))
}

function groupCostByWorker(data: HHRow[]) {
  const grouped = data.reduce<Record<string, number>>((acc, row) => {
    acc[row.worker] = (acc[row.worker] || 0) + row.cost
    return acc
  }, {})

  return Object.entries(grouped).map(([worker, cost]) => ({
    worker,
    cost,
  }))
}

export function HoursByActivityChart({ data }: HHChartProps) {
  const chartData = groupHoursByActivity(data)

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray='3 3' stroke='#1e293b' />
        <XAxis dataKey='activity' stroke='#94a3b8' fontSize={12} />
        <YAxis stroke='#94a3b8' fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: '#020617',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '12px',
            color: '#fff',
          }}
        />
        <Bar dataKey='hours' radius={[8, 8, 0, 0]} fill='#22d3ee' />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function CostByWorkerChart({ data }: HHChartProps) {
  const chartData = groupCostByWorker(data)

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart>
        <Pie
          data={chartData}
          dataKey='cost'
          nameKey='worker'
          cx='50%'
          cy='50%'
          outerRadius={90}
          innerRadius={55}
          paddingAngle={4}
        >
          {chartData.map((entry, index) => (
            <Cell key={entry.worker} fill={COLORS[index % COLORS.length]} />
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
  )
}
