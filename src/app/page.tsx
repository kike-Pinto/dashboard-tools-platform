import { dashboardCatalog } from '@/dashboards/catelog'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  BarChart3,
  FileSpreadsheet,
  Wrench,
  Briefcase,
  Fuel,
  Users,
  Clock3,
} from 'lucide-react'
import Image from 'next/image'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Dashboard Tools Platform | Generate KPI Dashboards',
  description:
    'Generate KPI dashboards from Excel and CSV files. Upload operational data, visualize KPIs and export professional dashboards in minutes.',
  openGraph: {
    title: 'Dashboard Tools Platform | Generate KPI Dashboards',

    description:
      'Generate KPI dashboards from Excel and CSV files. Upload operational data, visualize KPIs and export professional dashboards.',

    siteName: 'Dashboard Tools Platform',

    type: 'website',

    images: [
      {
        url: '/og/dashboard-tools-og.png',
        width: 1200,
        height: 630,
        alt: 'Dashboard Tools Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',

    title: 'Dashboard Tools Platform',

    description: 'Generate KPI dashboards from Excel and CSV files.',

    images: ['/og/dashboard-tools-og.png'],
  },
}

const useCases = [
  {
    title: 'Workforce',
    description: 'Track labor hours and workforce productivity.',
    icon: Users,
    className: 'text-sky-300',
  },
  {
    title: 'Maintenance',
    description: 'Monitor maintenance downtime and repair costs.',
    icon: Wrench,
    className: 'text-orange-300',
  },
  {
    title: 'Projects',
    description: 'Compare project progress, budget and cost.',
    icon: Briefcase,
    className: 'text-violet-300',
  },
  {
    title: 'Fuel',
    description: 'Analyze fuel consumption and vehicle cost.',
    icon: Fuel,
    className: 'text-emerald-300',
  },
]

const steps = [
  {
    number: '01',
    title: 'Upload',
    description: 'Start with operational data from Excel or CSV files.',
  },
  {
    number: '02',
    title: 'Calculate',
    description:
      'Automatically calculate totals, costs, averages and KPI values.',
  },
  {
    number: '03',
    title: 'Visualize',
    description: 'Turn spreadsheet rows into clean charts and KPI cards.',
  },
  {
    number: '04',
    title: 'Analyze',
    description:
      'Compare performance across workers, equipment, projects and activities.',
  },
  {
    number: '05',
    title: 'Export',
    description: 'Download dashboards as PNG or PDF for reports and meetings.',
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

const dashboardIcons = {
  'hh-dashboard': {
    icon: Clock3,
    className: 'border-cyan-400/25 bg-cyan-400/10 text-cyan-300',
  },
  'maintenance-kpi-dashboard': {
    icon: Wrench,
    className: 'border-orange-400/25 bg-orange-400/10 text-orange-300',
  },
  'project-kpi-dashboard': {
    icon: Briefcase,
    className: 'border-violet-400/25 bg-violet-400/10 text-violet-300',
  },
  'fuel-consumption-dashboard': {
    icon: Fuel,
    className: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300',
  },
  'workforce-productivity-dashboard': {
    icon: Users,
    className: 'border-sky-400/25 bg-sky-400/10 text-sky-300',
  },
}

export default function HomePage() {
  return (
    <main className='min-h-screen overflow-x-hidden bg-slate-950 text-white'>
      <section className='mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10'>
        <nav className='flex items-center justify-between gap-3'>
          <Link
            href='/'
            className='flex items-center transition hover:opacity-90'
          >
            <Image
              src='/og/logo.png'
              alt='Dashboard Tools Platform'
              width={260}
              height={56}
              priority
              className='h-20 w-auto md:h-42'
            />
          </Link>

          <Link
            href='/dashboard/hh-dashboard'
            className='rounded-full border border-white/10 px-2.5 sm:px-4 py-1.5 text-[11px] sm:text-sm text-slate-300 transition hover:bg-white/10 hover:text-white sm:py-2'
          >
            Try HH
          </Link>
        </nav>

        <section className='flex flex-col items-center justify-center pb-20 pt-16 text-center md:pb-28 md:pt-20'>
          <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-200'>
            <BarChart3 className='h-4 w-4' />5 Dashboard Generators
          </div>

          <h1 className='max-w-5xl text-3xl font-bold tracking-tight sm:text-5xl md:text-7xl'>
            Generate clean KPI dashboards from{' '}
            <span className='mt-3 block bg-linear-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent'>
              Excel & CSV Files
            </span>
          </h1>

          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-300'>
            Upload operational data, calculate key metrics, visualize
            performance and export professional dashboards for operations,{' '}
            <span className='bg-linear-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent'>
              maintenance, projects, fuel and workforce productivity.
            </span>
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-300 sm:gap-6 md:gap-8'>
            <div className='inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-3 py-2'>
              <Users className='h-4 w-4 text-cyan-300 sm:h-5 sm:w-5' />
              Workforce
            </div>

            <div className='inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-3 py-2'>
              <Wrench className='h-4 w-4 text-orange-300 sm:h-5 sm:w-5' />
              Maintenance
            </div>

            <div className='inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-3 py-2'>
              <Briefcase className='h-4 w-4 text-violet-300 sm:h-5 sm:w-5' />
              Projects
            </div>

            <div className='inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-3 py-2'>
              <Fuel className='h-4 w-4 text-emerald-300 sm:h-5 sm:w-5' />
              Fuel
            </div>

            <div className='inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-3 py-2'>
              <FileSpreadsheet className='h-4 w-4 text-sky-300 sm:h-5 sm:w-5' />
              Excel & CSV
            </div>
          </div>

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
              const iconConfig =
                dashboardIcons[dashboard.slug as keyof typeof dashboardIcons]
              const DashboardIcon = iconConfig.icon

              return (
                <Link
                  key={dashboard.slug}
                  href={`/dashboard/${dashboard.slug}`}
                  className='group rounded-3xl border border-white/10 bg-white/4 p-5 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/6 md:p-6'
                >
                  <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
                    <div className='flex min-w-0 items-start gap-3 md:gap-4'>
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border md:h-12 md:w-12 ${iconConfig.className}`}
                      >
                        <DashboardIcon className='h-5 w-5 md:h-6 md:w-6' />
                      </div>

                      <h3 className='min-w-0 text-lg font-semibold leading-snug text-white md:text-xl'>
                        {dashboard.name}
                      </h3>
                    </div>

                    <span
                      className={`inline-flex w-fit shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
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

            <div className='grid gap-4 sm:grid-cols-2'>
              {steps.map((step) => (
                <div
                  key={step.number}
                  className='rounded-3xl border border-white/10 bg-white/4 p-5 transition hover:border-cyan-400/20 md:p-6'
                >
                  <p className='text-5xl font-bold tracking-tight bg-linear-to-r from-slate-700 to-slate-800 bg-clip-text text-transparent md:text-6xl'>
                    {step.number}
                  </p>

                  <h3 className='mt-3 text-lg font-semibold text-white md:text-xl'>
                    {step.title}
                  </h3>

                  <p className='mt-3 text-sm leading-6 text-slate-400 md:text-base'>
                    {step.description}
                  </p>
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
            {useCases.map((useCase) => {
              const UseCaseIcon = useCase.icon

              return (
                <div
                  key={useCase.title}
                  className='rounded-2xl border border-white/10 bg-white/4 p-5'
                >
                  <div className='flex items-center gap-3'>
                    <UseCaseIcon className={`h-5 w-5 ${useCase.className}`} />
                    <h3 className='font-semibold text-white'>
                      {useCase.title}
                    </h3>
                  </div>

                  <p className='mt-3 leading-7 text-slate-400'>
                    {useCase.description}
                  </p>
                </div>
              )
            })}
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
                className='rounded-2xl border border-white/10 bg-white/4 p-5 transition hover:-translate-y-1 hover:border-cyan-400/30'
              >
                <p className='mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300'>
                  Guide
                </p>

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
        <Footer />
      </section>
    </main>
  )
}
