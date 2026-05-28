import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Workforce KPI Dashboard - Track Labor Performance',
  description:
    'Learn what a workforce KPI dashboard is and how to track labor hours, productivity, cost and activity performance from Excel or CSV data.',
}

export default function WorkforceKPIDashboardPage() {
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
          Workforce KPI Dashboard
        </h1>

        <p className='mt-6 text-lg leading-8 text-slate-300'>
          A workforce KPI dashboard helps teams understand labor performance,
          total hours, cost distribution and productivity trends from
          operational data.
        </p>

        <section className='mt-10 space-y-5 text-slate-300'>
          <h2 className='text-2xl font-semibold text-white'>
            What does a workforce KPI dashboard show?
          </h2>

          <p>
            It converts workforce data into clear visual metrics so managers can
            quickly identify where time and labor cost are being used.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Common workforce KPIs
          </h2>

          <ul className='list-disc space-y-3 pl-6'>
            <li>Total labor hours</li>
            <li>Average hours per worker</li>
            <li>Labor cost by worker</li>
            <li>Hours by activity</li>
            <li>Productivity percentage</li>
          </ul>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Why workforce KPIs matter
          </h2>

          <p>
            Workforce KPIs help compare activities, detect inefficient labor
            distribution and improve operational planning.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Build a dashboard from Excel or CSV
          </h2>

          <p>
            Instead of manually creating charts, you can upload labor data and
            generate a dashboard with KPI cards, charts and export options.
          </p>

          <Link
            href='/dashboard/hh-dashboard'
            className='inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300'
          >
            Try HH Dashboard Generator
          </Link>
        </section>
      </article>
    </main>
  )
}
