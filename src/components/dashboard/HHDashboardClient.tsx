'use client'

import { toPng } from 'html-to-image'
import { useState, useRef } from 'react'
import { hhMockData } from '@/dashboards/hh-dashboard/mockData'
import { HHRow } from '@/dashboards/hh-dashboard/types'
import { calculateHHKPIs } from '@/dashboards/hh-dashboard/calculate'
import { parseHHCsv } from '@/lib/dashboard/parseHHCsv'
import { ChartCard } from './ChartCard'
import { KPICard } from './KPICard'
import { CostByWorkerChart, HoursByActivityChart } from './HHCharts'
import { parseHHExcel } from '@/lib/dashboard/parseHHExcel'
import {
  formatCurrency,
  formatNumber,
  formatPercent,
} from '@/lib/dashboard/format'

export function HHDashboardClient() {
  const [data, setData] = useState<HHRow[]>(hhMockData)
  const [fileName, setFileName] = useState('Sample data')
  const dashboardRef = useRef<HTMLDivElement>(null)

  const kpi = calculateHHKPIs(data)

  async function handleFileUpload(file: File) {
    const extension = file.name.split('.').pop()?.toLowerCase()

    const parsedData =
      extension === 'xlsx' || extension === 'xls'
        ? await parseHHExcel(file)
        : await parseHHCsv(file)

    if (parsedData.length === 0) {
      alert('No valid rows found. Use columns: worker, activity, hours, cost')
      return
    }

    setData(parsedData)
    setFileName(file.name)
  }

  async function handleExportPNG() {
    if (!dashboardRef.current) return

    const image = await toPng(dashboardRef.current, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: '#020617',
    })

    const link = document.createElement('a')
    link.href = image
    link.download = 'hh-dashboard.png'
    link.click()
  }

  return (
    <>
      <section className='mt-8 rounded-3xl border border-white/10 bg-white/4 p-6'>
        <div className='grid gap-6 lg:grid-cols-[1.4fr_0.6fr]'>
          <div>
            <h2 className='text-xl font-semibold'>Upload HH data</h2>
            <p className='mt-2 text-sm text-slate-400'>
              Upload a CSV or Excel file with workforce hours and labor cost
              data.
            </p>

            <div className='mt-5 grid gap-3 sm:grid-cols-4'>
              <div className='rounded-2xl border border-white/10 bg-slate-950/50 p-4'>
                <p className='text-xs uppercase tracking-wide text-slate-500'>
                  Column
                </p>
                <p className='mt-1 font-semibold text-white'>worker</p>
              </div>

              <div className='rounded-2xl border border-white/10 bg-slate-950/50 p-4'>
                <p className='text-xs uppercase tracking-wide text-slate-500'>
                  Column
                </p>
                <p className='mt-1 font-semibold text-white'>activity</p>
              </div>

              <div className='rounded-2xl border border-white/10 bg-slate-950/50 p-4'>
                <p className='text-xs uppercase tracking-wide text-slate-500'>
                  Column
                </p>
                <p className='mt-1 font-semibold text-white'>hours</p>
              </div>

              <div className='rounded-2xl border border-white/10 bg-slate-950/50 p-4'>
                <p className='text-xs uppercase tracking-wide text-slate-500'>
                  Column
                </p>
                <p className='mt-1 font-semibold text-white'>cost</p>
              </div>
            </div>

            <p className='mt-4 text-xs text-slate-500'>
              Current file: {fileName}
            </p>
          </div>

          <div className='flex flex-col justify-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-5'>
            <label className='cursor-pointer rounded-xl bg-cyan-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300'>
              Upload CSV / Excel
              <input
                type='file'
                accept='.csv,.xlsx,.xls,text/csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel'
                className='hidden'
                onChange={(event) => {
                  const file = event.target.files?.[0]
                  if (file) {
                    handleFileUpload(file)
                  }
                }}
              />
            </label>

            <a
              href='/samples/hh-dashboard-sample.csv'
              download
              className='rounded-xl border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10'
            >
              Download sample CSV
            </a>
          </div>
        </div>
      </section>

      <div ref={dashboardRef}>
        <section className='mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          <KPICard
            label='Total HH'
            value={formatNumber(kpi.totalHH)}
            helper='Total reported hours'
          />
          <KPICard
            label='Total Cost'
            value={formatCurrency(kpi.totalCost)}
            helper='Estimated labor cost'
          />
          <KPICard
            label='Productivity'
            value={formatPercent(kpi.productivity)}
            helper='Based on completed work'
          />
          <KPICard
            label='Avg HH / Worker'
            value={formatNumber(Number(kpi.avgHH.toFixed(1)))}
            helper='Average per worker'
          />
        </section>

        <section className='mt-8 grid gap-6 xl:grid-cols-2'>
          <ChartCard
            title='Hours by activity'
            description='Compare total man-hours across activities.'
          >
            <HoursByActivityChart data={data} />
          </ChartCard>

          <ChartCard
            title='Cost by worker'
            description='Identify labor cost distribution by worker.'
          >
            <CostByWorkerChart data={data} />
          </ChartCard>
        </section>

        <section className='mt-8 rounded-3xl border border-white/10 bg-white/4 p-6'>
          <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
            <div>
              <h2 className='text-xl font-semibold'>Data preview</h2>
              <p className='mt-2 text-sm text-slate-400'>
                Review the parsed data before exporting the dashboard.
              </p>
            </div>

            <button
              onClick={handleExportPNG}
              className='rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10'
            >
              Export PNG
            </button>
          </div>

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
                    <td className='px-4 py-3'>{formatCurrency(row.cost)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}
