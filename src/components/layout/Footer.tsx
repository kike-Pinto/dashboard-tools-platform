import Link from 'next/link'

const dashboardLinks = [
  {
    title: 'HH Dashboard',
    href: '/dashboard/hh-dashboard',
  },
  {
    title: 'Maintenance KPI Dashboard',
    href: '/dashboard/maintenance-kpi-dashboard',
  },
  {
    title: 'Project KPI Dashboard',
    href: '/dashboard/project-kpi-dashboard',
  },
  {
    title: 'Fuel Consumption Dashboard',
    href: '/dashboard/fuel-consumption-dashboard',
  },
  {
    title: 'Workforce Productivity Dashboard',
    href: '/dashboard/workforce-productivity-dashboard',
  },
]

const resourceLinks = [
  {
    title: 'Guides',
    href: '/guides',
  },
  {
    title: 'How to Calculate Man Hours',
    href: '/guides/how-to-calculate-man-hours',
  },
  {
    title: 'Project KPIs',
    href: '/guides/how-to-track-project-kpis',
  },
]

export function Footer() {
  return (
    <footer className='border-t border-white/10 py-12'>
      <div className='grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]'>
        <div>
          <p className='text-lg font-semibold text-white'>
            Dashboard Tools Platform
          </p>

          <p className='mt-4 max-w-md leading-7 text-slate-400'>
            Generate KPI dashboards from Excel and CSV files for operations,
            maintenance, projects, fuel and workforce productivity.
          </p>
        </div>

        <div>
          <p className='font-semibold text-white'>Dashboards</p>

          <div className='mt-4 flex flex-col gap-3'>
            {dashboardLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-sm text-slate-400 transition hover:text-cyan-300'
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className='font-semibold text-white'>Resources</p>

          <div className='mt-4 flex flex-col gap-3'>
            {resourceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-sm text-slate-400 transition hover:text-cyan-300'
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between'>
        <p>© 2026 Dashboard Tools Platform.</p>
        <p>Built with Next.js, TypeScript and Recharts.</p>
      </div>
    </footer>
  )
}
