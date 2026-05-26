'use client'

import { useState } from 'react'
import { hhMockData } from '@/dashboards/hh-dashboard/mockData'
import { HHRow } from '@/dashboards/hh-dashboard/types'
import { calculateHHKPIs } from '@/dashboards/hh-dashboard/calculate'
import { parseHHCsv } from '@/lib/dashboard/parseHHCsv'
import { ChartCard } from './ChartCard'
import { KPICard } from './KPICard'
import { CostByWorkerChart, HoursByActivityChart } from './HHCharts'

export function HHDashboardClient() {
  const [data, setData] = useState<HHRow[]>(hhMockData)
  const [fileName, setFileName] = useState('Sample data')

  const kpi = calculateHHKPIs(data)

  async function handleFileUpload(file: File) {
    const parsedData = await parseHHCsv(file)

    if (parsedData.length === 0) {
      alert('No valid rows found. Use columns: worker, activity, hours, cost')
      return
    }

    setData(parsedData)
    setFileName(file.name)
  }

  return (
    <>
      <section className='mt-8 rounded-3xl border border-white/10 bg-white/4 p-6'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <div>
            <h2 className='text-xl font-semibold'>Upload HH data</h2>
            <p className='mt-2 text-sm text-slate-400'>
              Required columns: worker, activity, hours, cost
            </p>
            <p className='mt-2 text-xs text-slate-500'>
              Current file: {fileName}
            </p>
          </div>

          <label className='cursor-pointer rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300'>
            Upload CSV
            <input
              type='file'
              accept='.csv,text/csv'
              className='hidden'
              onChange={(event) => {
                const file = event.target.files?.[0]
                if (file) {
                  handleFileUpload(file)
                }
              }}
            />
          </label>
        </div>
      </section>

      <section className='mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        <KPICard
          label='Total HH'
          value={String(kpi.totalHH)}
          helper='Total reported hours'
        />
        <KPICard
          label='Total Cost'
          value={`$${kpi.totalCost}`}
          helper='Estimated labor cost'
        />
        <KPICard
          label='Productivity'
          value={`${kpi.productivity}%`}
          helper='Based on completed work'
        />
        <KPICard
          label='Avg HH / Worker'
          value={kpi.avgHH.toFixed(1)}
          helper='Average per worker'
        />
      </section>

      <section className='mt-8 grid gap-6 xl:grid-cols-2'>
        <ChartCard
          title='Hours by activity'
          description='Compare total man-hours across activities.'
        >
          <HoursByActivityChart />
        </ChartCard>

        <ChartCard
          title='Cost by worker'
          description='Identify labor cost distribution by worker.'
        >
          <CostByWorkerChart />
        </ChartCard>
      </section>

      <section className='mt-8 rounded-3xl border border-white/10 bg-white/4 p-6'>
        <h2 className='text-xl font-semibold'>Data preview</h2>

        <div className='mt-6 overflow-hidden rounded-2xl border border-white/10'>
          <table className='w-full text-left text-sm'>
            <thead className='bg-slate-900 text-slate-300'>
              <tr>
                <th className='px-4 py-3'>Worker</th>
                <th className='px-4 py-3'>Activity</th>
                <th className='px-4 py-3'>Hours</th>
                <th className='px-4 py-3'>Cost</th>
              </tr>
            </thead>

            <tbody className='divide-y divide-white/10 bg-slate-950/40 text-slate-400'>
              {data.map((row) => (
                <tr key={`${row.worker}-${row.activity}-${row.hours}`}>
                  <td className='px-4 py-3'>{row.worker}</td>
                  <td className='px-4 py-3'>{row.activity}</td>
                  <td className='px-4 py-3'>{row.hours}</td>
                  <td className='px-4 py-3'>${row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
