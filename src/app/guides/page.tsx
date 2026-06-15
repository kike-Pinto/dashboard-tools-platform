import Link from 'next/link'

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
]

export default function GuidesPage() {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='mx-auto max-w-6xl px-6 py-16'>
        <p className='text-sm font-medium uppercase tracking-[0.25em] text-cyan-300'>
          Guides
        </p>

        <h1 className='mt-4 text-4xl font-bold md:text-6xl'>
          Dashboard & KPI Guides
        </h1>

        <p className='mt-6 max-w-2xl text-slate-300'>
          Learn how to calculate operational KPIs, workforce metrics and
          dashboard indicators.
        </p>

        <div className='mt-12 grid gap-6 md:grid-cols-2'>
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
      </section>
    </main>
  )
}
