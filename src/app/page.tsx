import { dashboardCatalog } from '@/dashboards/catelog'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard Tools Platform - Generate KPI Dashboards from Excel',
  description:
    'Generate clean KPI dashboards from Excel and CSV files. Upload operational data, calculate metrics, visualize KPIs and export professional dashboards.',
}

export default function HomePage() {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='mx-auto max-w-7xl px-6 py-10'>
        <nav className='flex items-center justify-between'>
          <Link href='/' className='text-sm font-semibold text-white'>
            Dashboard Tools
          </Link>

          <Link
            href='/dashboard/hh-dashboard'
            className='rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white'
          >
            Try HH Dashboard
          </Link>
        </nav>

        <section className='flex min-h-[72vh] flex-col items-center justify-center text-center'>
          <p className='mb-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200'>
            Dashboard & KPI Tools
          </p>

          <h1 className='max-w-5xl text-4xl font-bold tracking-tight md:text-7xl'>
            Generate clean KPI dashboards from Excel and CSV files.
          </h1>

          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-300'>
            Upload operational data, calculate key metrics, visualize
            performance and export professional dashboards in minutes.
          </p>

          <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
            <Link
              href='/dashboard/hh-dashboard'
              className='rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300'
            >
              Try HH Dashboard
            </Link>

            <Link
              href='#dashboards'
              className='rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10'
            >
              View dashboards
            </Link>
          </div>
        </section>

        <section id='dashboards' className='pb-20'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-sm font-medium uppercase tracking-[0.25em] text-cyan-300'>
              Dashboard Family
            </p>
            <h2 className='mt-4 text-3xl font-bold md:text-5xl'>
              Start with one dashboard. Grow into a KPI suite.
            </h2>
            <p className='mt-4 text-slate-400'>
              Each dashboard is designed for a specific operational problem:
              labor hours, maintenance, fuel, projects and productivity.
            </p>
          </div>

          <div className='mt-12 grid gap-6 md:grid-cols-2'>
            {dashboardCatalog.map((dashboard) => {
              const isAvailable = dashboard.status === 'Available'

              return (
                <Link
                  key={dashboard.slug}
                  href={`/dashboard/${dashboard.slug}`}
                  className='group rounded-3xl border border-white/10 bg-white/4 p-6 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/6'
                >
                  <div className='flex items-start justify-between gap-4'>
                    <h3 className='text-xl font-semibold text-white'>
                      {dashboard.name}
                    </h3>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        isAvailable
                          ? 'bg-cyan-400/10 text-cyan-200'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {dashboard.status}
                    </span>
                  </div>

                  <p className='mt-4 leading-7 text-slate-400'>
                    {dashboard.description}
                  </p>

                  <p className='mt-6 text-sm font-semibold text-cyan-300'>
                    {isAvailable ? 'Open dashboard →' : 'Coming soon'}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>
      </section>
    </main>
  )
}
