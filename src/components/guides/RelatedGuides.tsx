import Link from 'next/link'

type RelatedGuide = {
  title: string
  href: string
}

type RelatedGuidesProps = {
  guides: RelatedGuide[]
}

export function RelatedGuides({ guides }: RelatedGuidesProps) {
  return (
    <section className='pt-8'>
      <h2 className='text-2xl font-semibold text-white'>Related Guides</h2>

      <div className='mt-5 grid gap-3'>
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className='rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-cyan-300 transition hover:border-cyan-400/30 hover:text-cyan-200'
          >
            {guide.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
