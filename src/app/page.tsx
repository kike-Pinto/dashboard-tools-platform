import { dashboardCatalog } from '@/dashboards/catelog'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard Tools Platform - Generate KPI Dashboards from Excel',
  description:
    'Generate KPI dashboards from Excel and CSV files. Upload operational data, calculate metrics, visualize KPIs and export dashboards for operations, maintenance, projects, fuel and workforce productivity.',
  openGraph: {
    title: 'Dashboard Tools Platform - Generate KPI Dashboards from Excel',
    description:
      'Upload Excel or CSV data, visualize operational KPIs and export clean dashboards in minutes.',
    type: 'website',
    images: [
      {
        url: '/og/dashboard-tools-og.png',
        width: 1200,
        height: 630,
        alt: 'Dashboard Tools Platform preview',
      },
    ],
  },
}

const useCases = [
  'Track labor hours and workforce productivity',
  'Monitor maintenance downtime and repair costs',
  'Compare project progress, budget and cost',
  'Analyze fuel consumption and vehicle cost',
]

const steps = [
  {
    title: 'Upload Excel or CSV',
    description:
      'Start with operational data from spreadsheets. No login or database required.',
  },
  {
    title: 'Generate KPIs automatically',
    description:
      'The dashboard calculates totals, averages, costs, productivity and performance indicators.',
  },
  {
    title: 'Export reports',
    description:
      'Download dashboards as PNG or PDF for reports, meetings and documentation.',
  },
]

const featuredGuides = [
  {
    title: 'How to Calculate Man Hours',
    href: '/guides/how-to-calculate-man-hours',
  },
  {
    title: 'How to Use a Maintenance KPI Dashboard',
    href: '/guides/how-to-use-maintenance-kpi-dashboard',
  },
  {
    title: 'How to Track Project KPIs',
    href: '/guides/how-to-track-project-kpis',
  },
]

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

        <section className='flex flex-col items-center justify-center pb-20 pt-24 text-center md:pb-28 md:pt-32'>
          <p className='mb-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200'>
            Dashboard & KPI Tools
          </p>

          <h1 className='max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl'>
            Generate clean KPI dashboards from Excel and CSV files.
          </h1>

          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-300'>
            Upload operational data, calculate key metrics, visualize
            performance and export professional dashboards for operations,
            maintenance, projects, fuel and workforce productivity.
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

            <Link
              href='/guides'
              className='rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10'
            >
              Browse Guides
            </Link>
          </div>
        </section>

        <section id='dashboards' className='border-t border-white/10 py-20'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-sm font-medium uppercase tracking-[0.25em] text-cyan-300'>
              Dashboard Family
            </p>
            <h2 className='mt-4 text-3xl font-bold md:text-5xl'>
              Five dashboard generators for operational data.
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

        <section className='border-t border-white/10 py-20'>
          <div className='grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center'>
            <div>
              <p className='text-sm font-medium uppercase tracking-[0.25em] text-cyan-300'>
                How it works
              </p>

              <h2 className='mt-4 text-3xl font-bold md:text-5xl'>
                From spreadsheet data to exportable dashboards.
              </h2>

              <p className='mt-5 leading-8 text-slate-400'>
                Dashboard Tools Platform is built for simple operational
                reporting workflows. Upload a spreadsheet, generate visual KPIs
                and export the result without building charts manually.
              </p>
            </div>

            <div className='grid gap-4'>
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className='rounded-3xl border border-white/10 bg-white/4 p-6'
                >
                  <p className='text-sm font-semibold text-cyan-300'>
                    Step {index + 1}
                  </p>
                  <h3 className='mt-2 text-xl font-semibold text-white'>
                    {step.title}
                  </h3>
                  <p className='mt-3 text-slate-400'>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='border-t border-white/10 py-20'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-sm font-medium uppercase tracking-[0.25em] text-cyan-300'>
              Use Cases
            </p>

            <h2 className='mt-4 text-3xl font-bold md:text-5xl'>
              Built for operations, maintenance and project reporting.
            </h2>
          </div>

          <div className='mt-10 grid gap-4 md:grid-cols-2'>
            {useCases.map((useCase) => (
              <div
                key={useCase}
                className='rounded-2xl border border-white/10 bg-white/4 p-5 text-slate-300'
              >
                {useCase}
              </div>
            ))}
          </div>
        </section>

        <section className='border-t border-white/10 py-20'>
          <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
            <div>
              <p className='text-sm font-medium uppercase tracking-[0.25em] text-cyan-300'>
                Guides
              </p>

              <h2 className='mt-4 text-3xl font-bold md:text-5xl'>
                Learn dashboard and KPI basics.
              </h2>
            </div>

            <Link
              href='/guides'
              className='rounded-xl border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10'
            >
              View all guides
            </Link>
          </div>

          <div className='mt-10 grid gap-4 md:grid-cols-3'>
            {featuredGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className='rounded-2xl border border-white/10 bg-white/4 p-5 transition hover:border-cyan-400/30'
              >
                <h3 className='font-semibold text-white'>{guide.title}</h3>
                <p className='mt-4 text-sm font-semibold text-cyan-300'>
                  Read guide →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className='border-t border-white/10 py-20 text-center'>
          <p className='text-sm font-medium uppercase tracking-[0.25em] text-cyan-300'>
            Start Now
          </p>

          <h2 className='mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-5xl'>
            Turn spreadsheet data into dashboards without manual chart building.
          </h2>

          <div className='mt-8 flex flex-col justify-center gap-4 sm:flex-row'>
            <Link
              href='/dashboard/hh-dashboard'
              className='rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300'
            >
              Try a Dashboard
            </Link>

            <Link
              href='/guides'
              className='rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10'
            >
              Read Guides
            </Link>
          </div>
        </section>
      </section>
    </main>
  )
}
