type UploadZoneProps = {
  fileName: string
  requiredColumns: string[]
  sampleFile: string
  onFileUpload: (file: File) => void
  uploadTitle: string
  uploadDescription: string
}

export function UploadZone({
  fileName,
  requiredColumns,
  sampleFile,
  onFileUpload,
  uploadTitle,
  uploadDescription,
}: UploadZoneProps) {
  return (
    <section className='mt-8 rounded-3xl border border-white/10 bg-white/4 p-6'>
      <div className='grid gap-6 lg:grid-cols-[1.4fr_0.6fr]'>
        <div>
          <h2 className='text-xl font-semibold'>{uploadTitle}</h2>
          <p className='mt-2 text-sm text-slate-400'>{uploadDescription}</p>

          <div className='mt-5 grid gap-3 sm:grid-cols-4'>
            {requiredColumns.map((column) => (
              <div
                key={column}
                className='rounded-2xl border border-white/10 bg-slate-950/50 p-4'
              >
                <p className='text-xs uppercase tracking-wide text-slate-500'>
                  Column
                </p>
                <p className='mt-1 font-semibold text-white'>{column}</p>
              </div>
            ))}
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
                if (file) onFileUpload(file)
              }}
            />
          </label>

          <a
            href={sampleFile}
            download
            className='rounded-xl border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10'
          >
            Download sample CSV
          </a>
        </div>
      </div>
    </section>
  )
}
