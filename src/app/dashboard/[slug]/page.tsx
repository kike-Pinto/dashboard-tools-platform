import { dashboardCatalog } from '@/dashboards/catelog'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type MetadataProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { slug } = await params

  const dashboard = dashboardCatalog.find((item) => item.slug === slug)

  if (!dashboard) {
    return {
      title: 'Dashboard Not Found',
    }
  }

  return {
    title: `${dashboard.name} - Dashboard Tools Platform`,
    description: dashboard.description,
    openGraph: {
      title: `${dashboard.name} - Dashboard Tools Platform`,
      description: dashboard.description,
      type: 'website',
    },
  }
}

type DashboardComingSoonPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function DashboardComingSoonPage({
  params,
}: DashboardComingSoonPageProps) {
  const { slug } = await params

  const dashboard = dashboardCatalog.find((item) => item.slug === slug)

  if (!dashboard) {
    notFound()
  }

  const isAvailable = dashboard.status === 'Available'

  if (isAvailable) {
    return notFound()
  }

  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center'>
        <p className='mb-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200'>
          Coming Soon
        </p>

        <h1 className='text-4xl font-bold tracking-tight md:text-6xl'>
          {dashboard.name}
        </h1>

        <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-300'>
          {dashboard.description}
        </p>

        <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
          <Link
            href='/dashboard/hh-dashboard'
            className='rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300'
          >
            Try HH Dashboard
          </Link>

          <Link
            href='/'
            className='rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10'
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  )
}
