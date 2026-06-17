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

const COLORS = [
  '#22d3ee',
  '#a78bfa',
  '#818cf8',
  '#f472b6',
  '#64748b',
  '#38bdf8',
]

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

  const sorted = Object.entries(grouped)
    .map(([worker, cost]) => ({
      worker,
      cost,
    }))
    .sort((a, b) => b.cost - a.cost)

  const topWorkers = sorted.slice(0, 5)
  const otherWorkers = sorted.slice(5)

  const othersCost = otherWorkers.reduce((acc, item) => acc + item.cost, 0)

  if (othersCost > 0) {
    topWorkers.push({
      worker: 'Others',
      cost: othersCost,
    })
  }

  return topWorkers
}

export function HoursByActivityChart({ data }: HHChartProps) {
  const chartData = groupHoursByActivity(data)

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        data={chartData}
        margin={{ top: 10, right: 8, left: -20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray='3 3' stroke='#1e293b' />
        <XAxis
          dataKey='activity'
          stroke='#94a3b8'
          fontSize={10}
          angle={-20}
          textAnchor='end'
          height={65}
          interval={0}
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
        <Bar dataKey='hours' radius={[8, 8, 0, 0]} fill='#22d3ee' />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function CostByWorkerChart({ data }: HHChartProps) {
  const chartData = groupCostByWorker(data)

  return (
    <div className='flex h-full flex-col gap-3 md:grid md:grid-cols-[1fr_0.8fr] md:gap-4'>
      <div className='h-52 min-h-0 md:h-full'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={chartData}
              dataKey='cost'
              nameKey='worker'
              cx='50%'
              cy='50%'
              outerRadius='80%'
              innerRadius='52%'
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
      </div>

      <div className='grid grid-cols-2 gap-2 overflow-hidden md:flex md:max-h-full md:flex-col md:justify-center'>
        {chartData.map((item, index) => (
          <div
            key={item.worker}
            className='flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-slate-950/50 px-3 py-1.5'
          >
            <div className='flex min-w-0 items-center gap-2'>
              <span
                className='h-3 w-3 shrink-0 rounded-full'
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className='truncate text-xs text-slate-300'>
                {item.worker}
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
