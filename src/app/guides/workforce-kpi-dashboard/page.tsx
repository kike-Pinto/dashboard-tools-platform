import type { Metadata } from 'next'
import Link from 'next/link'
import { RelatedGuides } from '@/components/guides/RelatedGuides'

export const metadata: Metadata = {
  title: 'Workforce KPI Dashboard - Track Labor Performance',
  description:
    'Learn what a workforce KPI dashboard is and how to track labor hours, productivity, labor cost and activity performance from Excel or CSV data.',
}

export default function WorkforceKPIDashboardPage() {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <article className='mx-auto max-w-3xl px-6 py-16'>
        <Link
          href='/guides'
          className='text-sm text-cyan-300 hover:text-cyan-200'
        >
          ← Back to guides
        </Link>

        <p className='mt-10 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300'>
          Guide
        </p>

        <h1 className='mt-4 text-4xl font-bold tracking-tight md:text-6xl'>
          Workforce KPI Dashboard
        </h1>

        <p className='mt-6 text-lg leading-8 text-slate-300'>
          A workforce KPI dashboard helps teams understand labor performance,
          total hours, output, labor cost and productivity trends from
          operational data.
        </p>

        <section className='mt-10 space-y-5 text-slate-300'>
          <h2 className='text-2xl font-semibold text-white'>
            What does a workforce KPI dashboard show?
          </h2>

          <p>
            It converts workforce data into clear visual metrics so managers can
            quickly identify where time, labor cost and output are being used.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Common workforce KPIs
          </h2>

          <ul className='list-disc space-y-3 pl-6'>
            <li>Total labor hours</li>
            <li>Total output</li>
            <li>Average hours per worker</li>
            <li>Labor cost by worker</li>
            <li>Output per labor hour</li>
            <li>Hours by activity</li>
          </ul>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Example workforce dashboard data
          </h2>

          <div className='overflow-x-auto rounded-2xl border border-white/10'>
            <table className='min-w-160 w-full text-left text-sm'>
              <thead className='bg-slate-900 text-slate-300'>
                <tr>
                  <th className='px-4 py-3'>Worker</th>
                  <th className='px-4 py-3'>Activity</th>
                  <th className='px-4 py-3'>Hours</th>
                  <th className='px-4 py-3'>Output</th>
                  <th className='px-4 py-3'>Labor Cost</th>
                </tr>
              </thead>

              <tbody className='divide-y divide-white/10 bg-slate-950/40'>
                <tr>
                  <td className='px-4 py-3'>Carlos</td>
                  <td className='px-4 py-3'>Assembly</td>
                  <td className='px-4 py-3'>8</td>
                  <td className='px-4 py-3'>24</td>
                  <td className='px-4 py-3'>$960</td>
                </tr>

                <tr>
                  <td className='px-4 py-3'>Maria</td>
                  <td className='px-4 py-3'>Inspection</td>
                  <td className='px-4 py-3'>7</td>
                  <td className='px-4 py-3'>18</td>
                  <td className='px-4 py-3'>$840</td>
                </tr>

                <tr>
                  <td className='px-4 py-3'>Juan</td>
                  <td className='px-4 py-3'>Assembly</td>
                  <td className='px-4 py-3'>9</td>
                  <td className='px-4 py-3'>27</td>
                  <td className='px-4 py-3'>$1,080</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Why workforce KPIs matter
          </h2>

          <p>
            Workforce KPIs help compare activities, detect inefficient labor
            distribution, identify high-performing workers and improve
            operational planning.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Workforce productivity formula
          </h2>

          <div className='rounded-2xl border border-white/10 bg-white/4 p-6 text-xl font-semibold text-cyan-200'>
            Productivity = Total Output ÷ Total Labor Hours
          </div>

          <p>
            This formula helps compare how much output is produced for each
            labor hour worked.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Build a dashboard from Excel or CSV
          </h2>

          <p>
            Instead of manually creating charts, you can upload labor data and
            generate a dashboard with KPI cards, charts, tables and export
            options.
          </p>

          <div className='flex flex-col gap-3 pt-4 sm:flex-row'>
            <Link
              href='/dashboard/workforce-productivity-dashboard'
              className='inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300'
            >
              Try Workforce Dashboard
            </Link>

            <Link
              href='/guides/workforce-productivity-metrics'
              className='inline-flex rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10'
            >
              Read Productivity Metrics
            </Link>
          </div>

          <h2 className='pt-8 text-2xl font-semibold text-white'>FAQ</h2>

          <h3 className='text-lg font-semibold text-white'>
            What is a workforce KPI dashboard?
          </h3>

          <p>
            It is a visual dashboard that tracks workforce performance using
            labor hours, output, labor cost and productivity metrics.
          </p>

          <h3 className='pt-4 text-lg font-semibold text-white'>
            What data do I need?
          </h3>

          <p>
            You can start with worker name, activity, hours worked, output and
            labor cost.
          </p>

          <h3 className='pt-4 text-lg font-semibold text-white'>
            Can this be built from Excel?
          </h3>

          <p>
            Yes. A workforce dashboard can be generated from Excel or CSV data.
          </p>
          <RelatedGuides
            guides={[
              {
                title: 'Workforce Productivity Metrics',
                href: '/guides/workforce-productivity-metrics',
              },
              {
                title: 'How to Calculate Man Hours',
                href: '/guides/how-to-calculate-man-hours',
              },
            ]}
          />
        </section>
      </article>
    </main>
  )
}
