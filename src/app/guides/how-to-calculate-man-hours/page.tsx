import type { Metadata } from 'next'
import Link from 'next/link'
import { RelatedGuides } from '@/components/guides/RelatedGuides'

export const metadata: Metadata = {
  title: 'How to Calculate Man Hours - Formula and Example',
  description:
    'Learn how to calculate man hours, total labor hours, labor cost and workforce effort using simple formulas and examples.',
}

export default function HowToCalculateManHoursPage() {
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
          How to Calculate Man Hours
        </h1>

        <p className='mt-6 text-lg leading-8 text-slate-300'>
          Man hours, also called HH or labor hours, measure the total amount of
          work performed by people during a task, activity, shift or project.
          This metric is commonly used in operations, construction, maintenance,
          workforce planning and project control.
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
            Example calculation
          </h2>

          <div className='overflow-x-auto rounded-2xl border border-white/10'>
            <table className='min-w-160 w-full text-left text-sm'>
              <thead className='bg-slate-900 text-slate-300'>
                <tr>
                  <th className='px-4 py-3'>Workers</th>
                  <th className='px-4 py-3'>Hours worked</th>
                  <th className='px-4 py-3'>Total man hours</th>
                </tr>
              </thead>

              <tbody className='divide-y divide-white/10 bg-slate-950/40'>
                <tr>
                  <td className='px-4 py-3'>4</td>
                  <td className='px-4 py-3'>8</td>
                  <td className='px-4 py-3'>32 HH</td>
                </tr>
                <tr>
                  <td className='px-4 py-3'>10</td>
                  <td className='px-4 py-3'>12</td>
                  <td className='px-4 py-3'>120 HH</td>
                </tr>
                <tr>
                  <td className='px-4 py-3'>25</td>
                  <td className='px-4 py-3'>7.5</td>
                  <td className='px-4 py-3'>187.5 HH</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            How to calculate labor cost from man hours
          </h2>

          <div className='rounded-2xl border border-white/10 bg-white/4 p-6 text-xl font-semibold text-cyan-200'>
            Labor Cost = Man Hours × Hourly Rate
          </div>

          <p>
            If a team works 120 man hours and the hourly rate is $25, the labor
            cost is $3,000.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Why man hours matter
          </h2>

          <p>
            Man hours help estimate labor effort, compare productivity, measure
            project progress, calculate labor cost and understand how workforce
            time is being used.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Turn HH data into a dashboard
          </h2>

          <p>
            Instead of reviewing long Excel tables manually, you can upload
            workforce data and automatically generate KPI cards, charts and
            exportable reports.
          </p>

          <div className='flex flex-col gap-3 pt-4 sm:flex-row'>
            <Link
              href='/dashboard/hh-dashboard'
              className='inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300'
            >
              Try HH Dashboard Generator
            </Link>

            <Link
              href='/guides/hh-dashboard-template'
              className='inline-flex rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10'
            >
              Read HH Dashboard Template
            </Link>
          </div>

          <h2 className='pt-8 text-2xl font-semibold text-white'>FAQ</h2>

          <h3 className='text-lg font-semibold text-white'>
            What does HH mean?
          </h3>

          <p>
            HH usually means man hours or labor hours. It represents the total
            hours worked by one or more people.
          </p>

          <h3 className='pt-4 text-lg font-semibold text-white'>
            What is the difference between hours and man hours?
          </h3>

          <p>
            Hours can refer to time in general. Man hours multiply time by the
            number of workers involved.
          </p>

          <h3 className='pt-4 text-lg font-semibold text-white'>
            Can man hours be calculated from Excel?
          </h3>

          <p>
            Yes. You can calculate man hours manually in Excel or upload CSV and
            Excel data to generate a dashboard automatically.
          </p>
          <RelatedGuides
            guides={[
              {
                title: 'HH Dashboard Template',
                href: '/guides/hh-dashboard-template',
              },
              {
                title: 'Workforce Productivity Metrics',
                href: '/guides/workforce-productivity-metrics',
              },
            ]}
          />
        </section>
      </article>
    </main>
  )
}
