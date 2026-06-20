import Link from 'next/link'
import { Footer } from '@/components/layout/Footer'

const guides = [
  {
    title: 'How to Calculate Man Hours',
    href: '/guides/how-to-calculate-man-hours',
    description: 'Learn how to calculate man hours and workforce effort.',
  },
  {
    title: 'HH Dashboard Template',
    href: '/guides/hh-dashboard-template',
    description: 'Understand how HH dashboards help visualize labor KPIs.',
  },
  {
    title: 'Workforce KPI Dashboard',
    href: '/guides/workforce-kpi-dashboard',
    description: 'Track workforce productivity and labor performance.',
  },
  {
    title: 'How to Use a Maintenance KPI Dashboard',
    href: '/guides/how-to-use-maintenance-kpi-dashboard',
    description:
      'Learn how maintenance dashboards help track downtime, repairs and maintenance costs.',
  },
  {
    title: 'How to Track Project KPIs',
    href: '/guides/how-to-track-project-kpis',
    description:
      'Understand project KPIs such as progress, budget utilization and task completion.',
  },
  {
    title: 'Fuel Consumption Dashboard Guide',
    href: '/guides/fuel-consumption-dashboard-guide',
    description:
      'Learn how to monitor fuel usage, vehicle efficiency and fuel costs.',
  },
  {
    title: 'Workforce Productivity Metrics',
    href: '/guides/workforce-productivity-metrics',
    description:
      'Discover the most important workforce productivity metrics and indicators.',
  },
]

export default function GuidesPage() {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='mx-auto max-w-6xl px-6 py-16'>
        <Link
          href='/'
          className='text-sm text-cyan-300 transition hover:text-cyan-200'
        >
          ← Back to home
        </Link>

        <p className='mt-10 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300'>
          Guides
        </p>

        <h1 className='mt-4 text-4xl font-bold md:text-6xl'>
          Dashboard & KPI Guides
        </h1>

        <p className='mt-6 max-w-2xl text-slate-300'>
          Learn how to calculate operational KPIs, workforce metrics and
          dashboard indicators.
        </p>

        <div className='py-20 grid gap-6 md:grid-cols-2'>
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className='rounded-3xl border border-white/10 bg-white/4 p-6 transition hover:border-cyan-400/30'
            >
              <h2 className='text-xl font-semibold'>{guide.title}</h2>

              <p className='mt-4 text-slate-400'>{guide.description}</p>

              <p className='mt-6 text-sm font-semibold text-cyan-300'>
                Read guide →
              </p>
            </Link>
          ))}
        </div>
        <Footer />
      </section>
    </main>
  )
}
