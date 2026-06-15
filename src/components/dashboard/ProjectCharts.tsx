'use client'

import { ProjectRow } from '@/dashboards/project-dashboard/types'
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

type ProjectChartProps = {
  data: ProjectRow[]
}

const COLORS = [
  '#22d3ee',
  '#f97316',
  '#a78bfa',
  '#22c55e',
  '#f43f5e',
  '#64748b',
]

function groupTasksByStatus(data: ProjectRow[]) {
  const grouped = data.reduce<Record<string, number>>((acc, row) => {
    acc[row.status] = (acc[row.status] || 0) + 1
    return acc
  }, {})

  return Object.entries(grouped).map(([status, count]) => ({
    status,
    count,
  }))
}

export function PlannedVsActualChart({ data }: ProjectChartProps) {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        data={data}
        margin={{ top: 10, right: 8, left: -20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray='3 3' stroke='#1e293b' />

        <XAxis
          dataKey='task'
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
          labelStyle={{ color: '#e2e8f0' }}
        />

        <Bar
          dataKey='planned_progress'
          name='Planned'
          radius={[8, 8, 0, 0]}
          fill='#22d3ee'
        />

        <Bar
          dataKey='actual_progress'
          name='Actual'
          radius={[8, 8, 0, 0]}
          fill='#a78bfa'
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function BudgetVsCostChart({ data }: ProjectChartProps) {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        data={data}
        margin={{ top: 10, right: 8, left: -20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray='3 3' stroke='#1e293b' />

        <XAxis
          dataKey='task'
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
          labelStyle={{ color: '#e2e8f0' }}
        />

        <Bar
          dataKey='budget'
          name='Budget'
          radius={[8, 8, 0, 0]}
          fill='#22d3ee'
        />

        <Bar dataKey='cost' name='Cost' radius={[8, 8, 0, 0]} fill='#f97316' />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function TasksByStatusChart({ data }: ProjectChartProps) {
  const chartData = groupTasksByStatus(data)

  return (
    <div className='flex h-full flex-col gap-3 md:grid md:grid-cols-[1fr_0.8fr] md:gap-4'>
      <div className='h-52 min-h-0 md:h-full'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={chartData}
              dataKey='count'
              nameKey='status'
              cx='50%'
              cy='50%'
              outerRadius='80%'
              innerRadius='52%'
              paddingAngle={4}
            >
              {chartData.map((entry, index) => (
                <Cell key={entry.status} fill={COLORS[index % COLORS.length]} />
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
            key={item.status}
            className='flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-slate-950/50 px-3 py-1.5'
          >
            <div className='flex min-w-0 items-center gap-2'>
              <span
                className='h-3 w-3 shrink-0 rounded-full'
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className='truncate text-xs text-slate-300'>
                {item.status}
              </span>
            </div>

            <span className='text-xs font-semibold text-white'>
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
