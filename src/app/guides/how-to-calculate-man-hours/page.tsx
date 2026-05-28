import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Calculate Man Hours - Simple HH Formula',
  description:
    'Learn how to calculate man hours, total labor hours and workforce effort using a simple formula. Includes an HH dashboard example.',
}

export default function HowToCalculateManHoursPage() {
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
          How to Calculate Man Hours
        </h1>

        <p className='mt-6 text-lg leading-8 text-slate-300'>
          Man hours, also called HH or labor hours, measure the total amount of
          work performed by people during a task, activity or project.
        </p>

        <section className='mt-10 space-y-5 text-slate-300'>
          <h2 className='text-2xl font-semibold text-white'>
            Man hours formula
          </h2>

          <div className='rounded-2xl border border-white/10 bg-white/4 p-6 text-xl font-semibold text-cyan-200'>
            Man Hours = Number of Workers × Hours Worked
          </div>

          <p>
            For example, if 4 workers work 8 hours each, the total man hours are
            32 HH.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Why man hours matter
          </h2>

          <p>
            Man hours help estimate labor effort, compare productivity, measure
            project progress and calculate labor costs.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Turn HH data into a dashboard
          </h2>

          <p>
            Instead of reviewing long Excel tables manually, you can upload your
            workforce data and automatically generate KPI cards, charts and
            exportable reports.
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
