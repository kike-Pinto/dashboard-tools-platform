import type { ReactNode } from 'react'

type ChartCardProps = {
  title: string
  description: string
  children: ReactNode
}

export function ChartCard({ title, description, children }: ChartCardProps) {
  return (
    <div className='rounded-3xl border border-white/10 bg-white/4 p-6 shadow-xl shadow-slate-950/20'>
      <div>
        <h3 className='text-lg font-semibold text-white'>{title}</h3>
        <p className='mt-2 text-sm text-slate-400'>{description}</p>
      </div>

      <div className='mt-6 h-72 rounded-2xl border border-white/10 bg-slate-900/70 p-4'>
        {children}
      </div>
    </div>
  )
}
