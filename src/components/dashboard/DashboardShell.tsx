import Link from 'next/link'

type DashboardShellProps = {
  badge: string
  title: string
  description: string
}

export function DashboardShell({
  badge,
  title,
  description,
}: DashboardShellProps) {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='mx-auto max-w-7xl px-6 py-10'>
        <Link
          href='/'
          className='inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white'
        >
          ← Back to home
        </Link>

        <div className='mt-12 rounded-3xl border border-white/10 bg-white/4 p-8 shadow-2xl shadow-cyan-950/30 backdrop-blur md:p-12'>
          <p className='mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200'>
            {badge}
          </p>

          <h1 className='max-w-4xl text-4xl font-bold tracking-tight md:text-6xl'>
            {title}
          </h1>

          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-300'>
            {description}
          </p>

          <div className='mt-10 grid gap-4 md:grid-cols-3'>
            <div className='rounded-2xl border border-white/10 bg-slate-900/70 p-5'>
              <p className='text-sm text-slate-400'>Step 1</p>
              <h3 className='mt-2 font-semibold'>Upload file</h3>
              <p className='mt-2 text-sm text-slate-400'>
                Use CSV or Excel files with hours, workers, activities and
                costs.
              </p>
            </div>

            <div className='rounded-2xl border border-white/10 bg-slate-900/70 p-5'>
              <p className='text-sm text-slate-400'>Step 2</p>
              <h3 className='mt-2 font-semibold'>Calculate KPIs</h3>
              <p className='mt-2 text-sm text-slate-400'>
                Automatically calculate HH totals, costs and productivity
                metrics.
              </p>
            </div>

            <div className='rounded-2xl border border-white/10 bg-slate-900/70 p-5'>
              <p className='text-sm text-slate-400'>Step 3</p>
              <h3 className='mt-2 font-semibold'>Export dashboard</h3>
              <p className='mt-2 text-sm text-slate-400'>
                Export a clean visual summary for reporting or portfolio use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
