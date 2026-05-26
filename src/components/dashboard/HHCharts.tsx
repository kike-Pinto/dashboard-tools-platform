'use client'

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

const hoursByActivity = [
  { activity: 'Pump Install', hours: 24 },
  { activity: 'Cable Install', hours: 21 },
  { activity: 'Inspection', hours: 14 },
  { activity: 'Testing', hours: 10 },
]

const costByWorker = [
  { worker: 'Carlos', cost: 1200 },
  { worker: 'Maria', cost: 960 },
  { worker: 'Juan', cost: 1450 },
  { worker: 'Pedro', cost: 880 },
]

const COLORS = ['#22d3ee', '#38bdf8', '#818cf8', '#a78bfa']

export function HoursByActivityChart() {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart data={hoursByActivity}>
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

export function CostByWorkerChart() {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart>
        <Pie
          data={costByWorker}
          dataKey='cost'
          nameKey='worker'
          cx='50%'
          cy='50%'
          outerRadius={90}
          innerRadius={55}
          paddingAngle={4}
        >
          {costByWorker.map((entry, index) => (
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
