import type { ReactNode } from 'react'

type KPICardProps = {
  label: string
  value: string
  helper?: string
  icon?: ReactNode
  iconClassName?: string
  trend?: string
}

export function KPICard({
  label,
  value,
  helper,
  icon,
  iconClassName = 'border-cyan-400/20 bg-cyan-400/10 text-cyan-300',
  trend,
}: KPICardProps) {
  return (
    <div className='w-full rounded-2xl border border-white/10 bg-white/4 p-5 shadow-lg shadow-slate-950/20'>
      <div className='flex items-start justify-between sm:gap-4 gap-8 sm:justify-start'>
        {icon && (
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${iconClassName}`}
          >
            {icon}
          </div>
        )}

        <div className='min-w-0 flex-1'>
          <p className='text-sm text-slate-400'>{label}</p>

          <p className='mt-2 text-3xl font-bold tracking-tight text-white'>
            {value}
          </p>

          {trend ? (
            <p className='mt-2 text-sm font-semibold text-emerald-400'>
              {trend}
            </p>
          ) : (
            helper && <p className='mt-2 text-sm text-emerald-400'>{helper}</p>
          )}
        </div>
      </div>
    </div>
  )
}
