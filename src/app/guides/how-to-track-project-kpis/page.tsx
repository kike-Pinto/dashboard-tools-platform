import type { Metadata } from 'next'
import Link from 'next/link'
import { RelatedGuides } from '@/components/guides/RelatedGuides'

export const metadata: Metadata = {
  title: 'How to Track Project KPIs',
  description:
    'Learn how to track project KPIs including progress, budget, cost, task completion and project performance indicators.',
}

export default function HowToTrackProjectKPIsPage() {
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
          How to Track Project KPIs
        </h1>

        <p className='mt-6 text-lg leading-8 text-slate-300'>
          Project KPIs help teams measure progress, budget performance and task
          completion so projects stay on schedule and under control.
        </p>

        <section className='mt-10 space-y-5 text-slate-300'>
          <h2 className='text-2xl font-semibold text-white'>
            What are project KPIs?
          </h2>

          <p>
            Project KPIs are measurable indicators used to evaluate project
            performance, progress and financial health.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Common project KPIs
          </h2>

          <ul className='list-disc space-y-3 pl-6'>
            <li>Planned progress</li>
            <li>Actual progress</li>
            <li>Budget utilization</li>
            <li>Project cost</li>
            <li>Completed tasks</li>
            <li>Delayed tasks</li>
          </ul>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Why project KPIs matter
          </h2>

          <p>
            Without KPIs it is difficult to identify delays, cost overruns and
            productivity issues before they become major problems.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Example project KPI dashboard
          </h2>

          <p>
            A dashboard can compare planned versus actual progress, budget
            versus cost and visualize project status using charts and KPI cards.
          </p>

          <div className='flex flex-col gap-3 pt-4 sm:flex-row'>
            <Link
              href='/dashboard/project-kpi-dashboard'
              className='inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300'
            >
              Try Project KPI Dashboard
            </Link>

            <Link
              href='/dashboard/maintenance-kpi-dashboard'
              className='inline-flex rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10'
            >
              View Maintenance Dashboard
            </Link>
          </div>

          <h2 className='pt-8 text-2xl font-semibold text-white'>FAQ</h2>

          <h3 className='text-lg font-semibold text-white'>
            What is the most important project KPI?
          </h3>

          <p>
            Progress against plan is usually the most important KPI because it
            shows whether the project is advancing as expected.
          </p>

          <h3 className='pt-4 text-lg font-semibold text-white'>
            How often should project KPIs be reviewed?
          </h3>

          <p>
            Most teams review project KPIs weekly, while large projects may
            require daily monitoring.
          </p>
          <RelatedGuides
            guides={[
              {
                title: 'How to Use a Maintenance KPI Dashboard',
                href: '/guides/how-to-use-maintenance-kpi-dashboard',
              },
              {
                title: 'Fuel Consumption Dashboard Guide',
                href: '/guides/fuel-consumption-dashboard-guide',
              },
            ]}
          />
        </section>
      </article>
    </main>
  )
}
