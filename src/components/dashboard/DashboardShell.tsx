import Link from 'next/link'
import { ChartCard } from './ChartCard'
import { KPICard } from './KPICard'
import { CostByWorkerChart, HoursByActivityChart } from './HHCharts'

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

        <div className='mt-10 rounded-3xl border border-white/10 bg-white/4 p-8 shadow-2xl shadow-cyan-950/30 backdrop-blur md:p-12'>
          <p className='mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200'>
            {badge}
          </p>

          <h1 className='max-w-4xl text-4xl font-bold tracking-tight md:text-6xl'>
            {title}
          </h1>

          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-300'>
            {description}
          </p>

          <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
            <button className='rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300'>
              Upload file
            </button>

            <button className='rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10'>
              Download sample
            </button>
          </div>
        </div>

        <section className='mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          <KPICard
            label='Total HH'
            value='1,248'
            helper='Total reported hours'
          />
          <KPICard
            label='Total Cost'
            value='$18,420'
            helper='Estimated labor cost'
          />
          <KPICard
            label='Productivity'
            value='82%'
            helper='Based on completed work'
          />
          <KPICard
            label='Avg HH / Worker'
            value='41.6'
            helper='Average per worker'
          />
        </section>

        <section className='mt-8 grid gap-6 xl:grid-cols-2'>
          <ChartCard
            title='Hours by activity'
            description='Compare total man-hours across activities.'
          >
            <HoursByActivityChart />
          </ChartCard>

          <ChartCard
            title='Cost by worker'
            description='Identify labor cost distribution by worker.'
          >
            <CostByWorkerChart />
          </ChartCard>
        </section>

        <section className='mt-8 rounded-3xl border border-white/10 bg-white/4 p-6'>
          <div className='flex flex-col gap-2 md:flex-row md:items-end md:justify-between'>
            <div>
              <h2 className='text-xl font-semibold'>Data preview</h2>
              <p className='mt-2 text-sm text-slate-400'>
                Uploaded rows will appear here after parsing the file.
              </p>
            </div>

            <button className='rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10'>
              Export PDF
            </button>
          </div>

          <div className='mt-6 overflow-hidden rounded-2xl border border-white/10'>
            <table className='w-full text-left text-sm'>
              <thead className='bg-slate-900 text-slate-300'>
                <tr>
                  <th className='px-4 py-3'>Worker</th>
                  <th className='px-4 py-3'>Activity</th>
                  <th className='px-4 py-3'>Hours</th>
                  <th className='px-4 py-3'>Cost</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-white/10 bg-slate-950/40 text-slate-400'>
                <tr>
                  <td className='px-4 py-3'>Carlos</td>
                  <td className='px-4 py-3'>Pump Install</td>
                  <td className='px-4 py-3'>10</td>
                  <td className='px-4 py-3'>$1200</td>
                </tr>
                <tr>
                  <td className='px-4 py-3'>Maria</td>
                  <td className='px-4 py-3'>Cable Install</td>
                  <td className='px-4 py-3'>8</td>
                  <td className='px-4 py-3'>$960</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  )
}
