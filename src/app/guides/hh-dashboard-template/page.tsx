import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HH Dashboard Template for Excel and CSV',
  description:
    'Use an HH dashboard template to visualize labor hours, workforce productivity, labor cost and operational KPIs from Excel or CSV files.',
}

export default function HHDashboardTemplatePage() {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <article className='mx-auto max-w-3xl px-6 py-16'>
        <Link href='/' className='text-sm text-cyan-300 hover:text-cyan-200'>
          ← Back to home
        </Link>

        <p className='mt-10 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300'>
          Guide
        </p>

        <h1 className='mt-4 text-4xl font-bold tracking-tight md:text-6xl'>
          HH Dashboard Template
        </h1>

        <p className='mt-6 text-lg leading-8 text-slate-300'>
          An HH dashboard template helps operations teams visualize workforce
          hours, labor costs and productivity KPIs without manually creating
          charts in Excel.
        </p>

        <section className='mt-10 space-y-5 text-slate-300'>
          <h2 className='text-2xl font-semibold text-white'>
            What is an HH dashboard?
          </h2>

          <p>
            HH dashboards transform workforce data into visual KPI cards,
            productivity metrics, charts and operational summaries.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Typical HH dashboard metrics
          </h2>

          <ul className='list-disc space-y-3 pl-6'>
            <li>Total man hours</li>
            <li>Labor cost</li>
            <li>Productivity percentage</li>
            <li>Hours by activity</li>
            <li>Cost distribution by worker</li>
          </ul>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Why use a dashboard instead of Excel manually?
          </h2>

          <p>
            Manual Excel reporting takes time and becomes difficult to maintain
            as operational data grows. Dashboards automate visualization and
            improve decision-making speed.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Generate an HH dashboard automatically
          </h2>

          <p>
            Upload CSV or Excel files and instantly generate charts, KPI cards
            and exportable reports.
          </p>

          <Link
            href='/dashboard/hh-dashboard'
            className='inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300'
          >
            Open HH Dashboard
          </Link>
        </section>
      </article>
    </main>
  )
}
