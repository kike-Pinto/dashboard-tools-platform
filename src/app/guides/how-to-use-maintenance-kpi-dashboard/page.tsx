import type { Metadata } from 'next'
import Link from 'next/link'
import { RelatedGuides } from '@/components/guides/RelatedGuides'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'How to Use a Maintenance KPI Dashboard',
  description:
    'Learn how to use a maintenance KPI dashboard to track downtime, repair hours, maintenance cost and equipment performance from Excel or CSV data.',
}

export default function HowToUseMaintenanceKPIDashboardPage() {
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
          How to Use a Maintenance KPI Dashboard
        </h1>

        <p className='mt-6 text-lg leading-8 text-slate-300'>
          A maintenance KPI dashboard helps teams understand equipment problems,
          downtime, repair effort and maintenance cost using clear visual
          indicators instead of long spreadsheets.
        </p>

        <section className='py-20 space-y-5 text-slate-300'>
          <h2 className='text-2xl font-semibold text-white'>
            What is a maintenance KPI dashboard?
          </h2>

          <p>
            A maintenance KPI dashboard is a visual report that converts
            maintenance records into metrics such as downtime, repair hours,
            maintenance cost and failure categories.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Common maintenance KPIs
          </h2>

          <ul className='list-disc space-y-3 pl-6'>
            <li>Total downtime hours</li>
            <li>Total repair hours</li>
            <li>Average repair time</li>
            <li>Maintenance cost by equipment</li>
            <li>Cost by failure type</li>
          </ul>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Example maintenance data
          </h2>

          <div className='overflow-x-auto rounded-2xl border border-white/10'>
            <table className='min-w-160 w-full text-left text-sm'>
              <thead className='bg-slate-900 text-slate-300'>
                <tr>
                  <th className='px-4 py-3'>Equipment</th>
                  <th className='px-4 py-3'>Failure Type</th>
                  <th className='px-4 py-3'>Downtime</th>
                  <th className='px-4 py-3'>Repair Hours</th>
                  <th className='px-4 py-3'>Cost</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-white/10 bg-slate-950/40'>
                <tr>
                  <td className='px-4 py-3'>Pump A</td>
                  <td className='px-4 py-3'>Mechanical</td>
                  <td className='px-4 py-3'>6</td>
                  <td className='px-4 py-3'>3</td>
                  <td className='px-4 py-3'>$1,200</td>
                </tr>
                <tr>
                  <td className='px-4 py-3'>Conveyor B</td>
                  <td className='px-4 py-3'>Electrical</td>
                  <td className='px-4 py-3'>4</td>
                  <td className='px-4 py-3'>2</td>
                  <td className='px-4 py-3'>$850</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Why use a dashboard instead of Excel only?
          </h2>

          <p>
            Excel is useful for storing maintenance records, but dashboards make
            it easier to identify the equipment with the highest downtime, the
            most expensive failure types and the areas that need attention.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Generate a maintenance dashboard automatically
          </h2>

          <p>
            You can upload a CSV or Excel file and automatically generate KPI
            cards, charts, a data preview and exportable reports.
          </p>

          <div className='flex flex-col gap-3 pt-4 sm:flex-row'>
            <Link
              href='/dashboard/maintenance-kpi-dashboard'
              className='inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300'
            >
              Try Maintenance KPI Dashboard
            </Link>

            <Link
              href='/dashboard/project-kpi-dashboard'
              className='inline-flex rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10'
            >
              View Project Dashboard
            </Link>
          </div>

          <h2 className='pt-8 text-2xl font-semibold text-white'>FAQ</h2>

          <h3 className='text-lg font-semibold text-white'>
            What is downtime in maintenance?
          </h3>
          <p>
            Downtime is the amount of time that equipment is unavailable or not
            operating because of a failure, repair or maintenance issue.
          </p>

          <h3 className='pt-4 text-lg font-semibold text-white'>
            What data do I need?
          </h3>
          <p>
            A simple maintenance dashboard can start with equipment name,
            failure type, downtime hours, repair hours and maintenance cost.
          </p>
          <RelatedGuides
            guides={[
              {
                title: 'How to Track Project KPIs',
                href: '/guides/how-to-track-project-kpis',
              },
              {
                title: 'Fuel Consumption Dashboard Guide',
                href: '/guides/fuel-consumption-dashboard-guide',
              },
            ]}
          />
        </section>
        <Footer />
      </article>
    </main>
  )
}
