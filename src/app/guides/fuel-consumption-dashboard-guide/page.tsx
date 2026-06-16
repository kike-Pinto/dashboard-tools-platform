import type { Metadata } from 'next'
import Link from 'next/link'
import { RelatedGuides } from '@/components/guides/RelatedGuides'

export const metadata: Metadata = {
  title: 'Fuel Consumption Dashboard Guide',
  description:
    'Learn how to use a fuel consumption dashboard to track fuel usage, distance, fuel cost and vehicle efficiency from Excel or CSV data.',
}

export default function FuelConsumptionDashboardGuidePage() {
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
          Fuel Consumption Dashboard Guide
        </h1>

        <p className='mt-6 text-lg leading-8 text-slate-300'>
          A fuel consumption dashboard helps teams monitor fuel usage, distance,
          fuel cost and vehicle efficiency from operational fleet data.
        </p>

        <section className='mt-10 space-y-5 text-slate-300'>
          <h2 className='text-2xl font-semibold text-white'>
            What is a fuel consumption dashboard?
          </h2>

          <p>
            It is a visual dashboard that converts fuel records into KPIs such
            as total fuel consumed, total distance, fuel cost and average fuel
            consumption.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Common fuel KPIs
          </h2>

          <ul className='list-disc space-y-3 pl-6'>
            <li>Total fuel consumed</li>
            <li>Total distance traveled</li>
            <li>Total fuel cost</li>
            <li>Average consumption in L/100km</li>
            <li>Fuel cost by vehicle</li>
          </ul>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Why fuel dashboards matter
          </h2>

          <p>
            Fuel dashboards help identify high-consumption vehicles, compare
            operating costs and monitor efficiency trends across a fleet.
          </p>

          <h2 className='pt-6 text-2xl font-semibold text-white'>
            Build a fuel dashboard from Excel or CSV
          </h2>

          <p>
            Instead of manually creating charts, upload fuel data and generate
            KPI cards, charts, a data preview and exportable reports.
          </p>

          <div className='flex flex-col gap-3 pt-4 sm:flex-row'>
            <Link
              href='/dashboard/fuel-consumption-dashboard'
              className='inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300'
            >
              Try Fuel Dashboard
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
            What data do I need for a fuel dashboard?
          </h3>

          <p>
            You can start with vehicle name, date, fuel liters, distance
            traveled and fuel cost.
          </p>

          <h3 className='pt-4 text-lg font-semibold text-white'>
            What does L/100km mean?
          </h3>

          <p>
            L/100km means liters of fuel consumed per 100 kilometers. Lower
            values usually indicate better fuel efficiency.
          </p>
          <RelatedGuides
            guides={[
              {
                title: 'How to Track Project KPIs',
                href: '/guides/how-to-track-project-kpis',
              },
              {
                title: 'How to Use a Maintenance KPI Dashboard',
                href: '/guides/how-to-use-maintenance-kpi-dashboard',
              },
            ]}
          />
        </section>
      </article>
    </main>
  )
}
