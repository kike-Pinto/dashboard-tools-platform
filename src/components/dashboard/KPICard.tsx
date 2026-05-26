type KPICardProps = {
  label: string
  value: string
  helper: string
}

export function KPICard({ label, value, helper }: KPICardProps) {
  return (
    <div className='rounded-2xl border border-white/10 bg-white/4 p-5 shadow-lg shadow-slate-950/20'>
      <p className='text-sm text-slate-400'>{label}</p>
      <p className='mt-3 text-3xl font-bold tracking-tight text-white'>
        {value}
      </p>
      <p className='mt-2 text-sm text-slate-500'>{helper}</p>
    </div>
  )
}
