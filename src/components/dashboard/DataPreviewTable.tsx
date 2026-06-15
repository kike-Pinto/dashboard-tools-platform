import { HHRow } from '@/dashboards/hh-dashboard/types'
import { formatCurrency } from '@/lib/dashboard/format'

type DataPreviewTableProps = {
  data: HHRow[]
}

export function DataPreviewTable({ data }: DataPreviewTableProps) {
  const visibleRows = data.slice(0, 10)
  const hasMoreRows = data.length > visibleRows.length

  return (
    <div className='mt-6 overflow-x-auto rounded-2xl border border-white/10'>
      <table className='min-w-160 w-full text-left text-sm'>
        <thead className='bg-slate-900 text-slate-300'>
          <tr>
            <th className='px-4 py-3'>Worker</th>
            <th className='px-4 py-3'>Activity</th>
            <th className='px-4 py-3'>Hours</th>
            <th className='px-4 py-3'>Cost</th>
          </tr>
        </thead>

        <tbody className='divide-y divide-white/10 bg-slate-950/40 text-slate-400'>
          {visibleRows.map((row) => (
            <tr key={`${row.worker}-${row.activity}-${row.hours}`}>
              <td className='px-4 py-3'>{row.worker}</td>
              <td className='px-4 py-3'>{row.activity}</td>
              <td className='px-4 py-3'>{row.hours}</td>
              <td className='px-4 py-3'>{formatCurrency(row.cost)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {hasMoreRows && (
        <div className='border-t border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-400'>
          Only the first 10 rows are shown to keep the dashboard export clean.
        </div>
      )}
    </div>
  )
}
