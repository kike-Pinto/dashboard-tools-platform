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
          HH Dashboard Template
        </h1>

        <p className='mt-6 text-lg leading-8 text-slate-300'>
          An HH dashboard template helps operations, construction and
          maintenance teams visualize workforce hours, labor costs and
          productivity KPIs without manually creating charts in Excel.
        </p>

        <section className='mt-10 space-y-5 text-slate-300'>
          <h2 className='text-2xl font-semibold text-white'>
            What is an HH dashboard?
          </h2>

          <p>
            An HH dashboard transforms workforce data into visual KPI cards,
            charts and summaries that help managers understand labor effort and
            workforce performance.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Typical HH dashboard metrics
          </h2>

          <ul className='list-disc space-y-3 pl-6'>
            <li>Total man hours</li>
            <li>Total labor cost</li>
            <li>Hours by activity</li>
            <li>Hours by worker</li>
            <li>Average hours per worker</li>
            <li>Productivity indicators</li>
          </ul>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Example workforce dataset
          </h2>

          <div className='overflow-x-auto rounded-2xl border border-white/10'>
            <table className='min-w-160 w-full text-left text-sm'>
              <thead className='bg-slate-900 text-slate-300'>
                <tr>
                  <th className='px-4 py-3'>Worker</th>
                  <th className='px-4 py-3'>Activity</th>
                  <th className='px-4 py-3'>Hours</th>
                  <th className='px-4 py-3'>Cost</th>
                </tr>
              </thead>

              <tbody className='divide-y divide-white/10 bg-slate-950/40'>
                <tr>
                  <td className='px-4 py-3'>John</td>
                  <td className='px-4 py-3'>Assembly</td>
                  <td className='px-4 py-3'>8</td>
                  <td className='px-4 py-3'>$240</td>
                </tr>

                <tr>
                  <td className='px-4 py-3'>Sarah</td>
                  <td className='px-4 py-3'>Inspection</td>
                  <td className='px-4 py-3'>7</td>
                  <td className='px-4 py-3'>$210</td>
                </tr>

                <tr>
                  <td className='px-4 py-3'>Mike</td>
                  <td className='px-4 py-3'>Packaging</td>
                  <td className='px-4 py-3'>9</td>
                  <td className='px-4 py-3'>$270</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Why use a dashboard instead of Excel manually?
          </h2>

          <p>
            Manual reporting requires creating formulas, pivot tables and
            charts. A dashboard automates visualization and allows faster
            operational decisions.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Benefits of an HH dashboard
          </h2>

          <ul className='list-disc space-y-3 pl-6'>
            <li>Reduce reporting time</li>
            <li>Improve workforce visibility</li>
            <li>Track labor cost trends</li>
            <li>Identify productivity issues</li>
            <li>Create exportable reports</li>
          </ul>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Generate an HH dashboard automatically
          </h2>

          <p>
            Upload CSV or Excel files and instantly generate KPI cards, charts,
            tables and downloadable reports.
          </p>

          <div className='flex flex-col gap-3 pt-4 sm:flex-row'>
            <Link
              href='/dashboard/hh-dashboard'
              className='inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300'
            >
              Open HH Dashboard
            </Link>

            <Link
              href='/guides/how-to-calculate-man-hours'
              className='inline-flex rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10'
            >
              Learn Man Hours Formula
            </Link>
          </div>

          <h2 className='pt-8 text-2xl font-semibold text-white'>FAQ</h2>

          <h3 className='text-lg font-semibold text-white'>
            What does HH stand for?
          </h3>

          <p>
            HH stands for man hours or labor hours and represents the total
            workforce effort spent on a task or project.
          </p>

          <h3 className='pt-4 text-lg font-semibold text-white'>
            Can I upload Excel files?
          </h3>

          <p>Yes. Most HH dashboards support both Excel and CSV formats.</p>

          <h3 className='pt-4 text-lg font-semibold text-white'>
            What industries use HH dashboards?
          </h3>

          <p>
            Construction, maintenance, mining, logistics, manufacturing and
            operations teams frequently use HH dashboards.
          </p>
        </section>
      </article>
    </main>
  )
}
