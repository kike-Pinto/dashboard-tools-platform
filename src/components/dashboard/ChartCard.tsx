type ChartCardProps = {
  title: string
  description: string
}

export function ChartCard({ title, description }: ChartCardProps) {
  return (
    <div className='rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-slate-950/20'>
      <div>
        <h3 className='text-lg font-semibold text-white'>{title}</h3>
        <p className='mt-2 text-sm text-slate-400'>{description}</p>
      </div>

      <div className='mt-6 flex h-64 items-center justify-center rounded-2xl border border-dashed border-white/10 bg-slate-900/70'>
        <p className='text-sm text-slate-500'>Chart preview</p>
      </div>
    </div>
  )
}
