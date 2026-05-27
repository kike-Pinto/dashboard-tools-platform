type DashboardExportActionsProps = {
  isExporting: boolean
  onExportPNG: () => void
  onExportPDF: () => void
}

export function DashboardExportActions({
  isExporting,
  onExportPNG,
  onExportPDF,
}: DashboardExportActionsProps) {
  if (isExporting) {
    return null
  }

  return (
    <div className='flex flex-col gap-3 sm:flex-row'>
      <button
        onClick={onExportPNG}
        className='rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 cursor-pointer'
      >
        Export PNG
      </button>

      <button
        onClick={onExportPDF}
        className='rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 cursor-pointer'
      >
        Export PDF
      </button>
    </div>
  )
}
