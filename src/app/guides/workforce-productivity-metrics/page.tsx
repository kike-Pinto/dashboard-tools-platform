import type { Metadata } from 'next'
import Link from 'next/link'
import { RelatedGuides } from '@/components/guides/RelatedGuides'

export const metadata: Metadata = {
  title: 'Workforce Productivity Metrics - Key KPIs to Track',
  description:
    'Learn the most important workforce productivity metrics, including labor hours, output, labor cost, productivity rate and cost per output.',
}

export default function WorkforceProductivityMetricsPage() {
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
          Workforce Productivity Metrics
        </h1>

        <p className='mt-6 text-lg leading-8 text-slate-300'>
          Workforce productivity metrics help teams understand how labor hours,
          output and labor cost translate into operational performance.
        </p>

        <section className='mt-10 space-y-5 text-slate-300'>
          <h2 className='text-2xl font-semibold text-white'>
            What are workforce productivity metrics?
          </h2>

          <p>
            Workforce productivity metrics are indicators used to measure how
            efficiently workers or teams convert time and labor cost into useful
            output.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Important workforce productivity KPIs
          </h2>

          <ul className='list-disc space-y-3 pl-6'>
            <li>Total labor hours</li>
            <li>Total output</li>
            <li>Output per labor hour</li>
            <li>Total labor cost</li>
            <li>Cost per output</li>
            <li>Hours by activity</li>
          </ul>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Productivity formula
          </h2>

          <div className='rounded-2xl border border-white/10 bg-white/4 p-6 text-xl font-semibold text-cyan-200'>
            Productivity = Total Output ÷ Total Labor Hours
          </div>

          <p>
            For example, if a team produces 200 units in 80 labor hours, the
            productivity rate is 2.5 units per hour.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Why productivity metrics matter
          </h2>

          <p>
            These metrics help identify high-performing activities, compare
            teams and improve workforce planning decisions.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Build a workforce productivity dashboard
          </h2>

          <p>
            A dashboard can automatically calculate labor hours, output,
            productivity rate and labor cost from CSV or Excel data.
          </p>

          <div className='flex flex-col gap-3 pt-4 sm:flex-row'>
            <Link
              href='/dashboard/workforce-productivity-dashboard'
              className='inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300'
            >
              Try Workforce Dashboard
            </Link>

            <Link
              href='/dashboard/hh-dashboard'
              className='inline-flex rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10'
            >
              View HH Dashboard
            </Link>
          </div>

          <h2 className='pt-8 text-2xl font-semibold text-white'>FAQ</h2>

          <h3 className='text-lg font-semibold text-white'>
            What is workforce productivity?
          </h3>

          <p>
            Workforce productivity measures how much output is produced for each
            unit of labor time or labor cost.
          </p>

          <h3 className='pt-4 text-lg font-semibold text-white'>
            What is a good productivity metric?
          </h3>

          <p>
            A useful productivity metric should connect labor input, such as
            hours or cost, with a measurable output.
          </p>
          <RelatedGuides
            guides={[
              {
                title: 'Workforce KPI Dashboard',
                href: '/guides/workforce-kpi-dashboard',
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
