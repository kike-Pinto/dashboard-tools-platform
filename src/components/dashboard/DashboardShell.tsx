import Link from 'next/link'
import { HHDashboardClient } from './HHDashboardClient'
import { MaintenanceDashboardClient } from './MaintenanceDashboardClient'
import { ProjectDashboardClient } from './ProjectDashboardClient'

type DashboardShellProps = {
  badge: string
  title: string
  description: string
  requiredColumns: string[]
  sampleFile: string
  uploadTitle: string
  uploadDescription: string
  dashboardType?: 'hh' | 'maintenance' | 'project'
}

export function DashboardShell({
  badge,
  title,
  description,
  requiredColumns,
  sampleFile,
  uploadTitle,
  uploadDescription,
  dashboardType = 'hh',
}: DashboardShellProps) {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='mx-auto max-w-7xl px-6 py-10'>
        <Link
          href='/'
          className='inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white'
        >
          ← Back to home
        </Link>

        <div className='mt-10 rounded-3xl border border-white/10 bg-white/4 p-8 shadow-2xl shadow-cyan-950/30 backdrop-blur md:p-12'>
          <p className='mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200'>
            {badge}
          </p>

          <h1 className='max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl'>
            {title}
          </h1>

          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-300'>
            {description}
          </p>
        </div>

        {dashboardType === 'maintenance' ? (
          <MaintenanceDashboardClient
            requiredColumns={requiredColumns}
            sampleFile={sampleFile}
            uploadTitle={uploadTitle}
            uploadDescription={uploadDescription}
          />
        ) : dashboardType === 'project' ? (
          <ProjectDashboardClient
            requiredColumns={requiredColumns}
            sampleFile={sampleFile}
            uploadTitle={uploadTitle}
            uploadDescription={uploadDescription}
          />
        ) : (
          <HHDashboardClient
            requiredColumns={requiredColumns}
            sampleFile={sampleFile}
            uploadTitle={uploadTitle}
            uploadDescription={uploadDescription}
          />
        )}
      </section>
    </main>
  )
}
