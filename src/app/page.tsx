export default function HomePage() {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center'>
        <p className='mb-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200'>
          Dashboard & KPI Tools
        </p>

        <h1 className='max-w-4xl text-4xl font-bold tracking-tight md:text-6xl'>
          Generate KPI dashboards from Excel and CSV files.
        </h1>

        <p className='mt-6 max-w-2xl text-lg text-slate-300'>
          Upload your data, calculate key metrics, visualize performance and
          export a clean dashboard in minutes.
        </p>

        <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
          <a
            href='/dashboard/hh-dashboard'
            className='rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300'
          >
            Try HH Dashboard
          </a>

          <a
            href='#dashboards'
            className='rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10'
          >
            View dashboards
          </a>
        </div>
      </section>
    </main>
  )
}
