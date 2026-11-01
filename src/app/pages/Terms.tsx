import { Lines, Reveal } from '../components/motion'
import { site } from '../../data/site'

const updated = '1 November 2026'

const sections = [
  {
    title: '1. Ruang lingkup layanan',
    body: ['Isi paragraf pertama Anda di sini.', 'Paragraf kedua jika perlu.', 'Paragraf ketiga mari kita test'],
  },
  {
    title: '2. Pembayaran',
    body: ['Isi aturan DP, pelunasan, dan metode pembayaran.'],
  },
  {
    title: '3. Revisi',
    body: ['Isi jumlah revisi dan biaya revisi tambahan.'],
  },
  {
    title: '4. Hak cipta dan penggunaan karya',
    body: ['Isi aturan kepemilikan file dan hak pakai.'],
  },
]

export function Terms() {
  return (
    <article className="mx-auto max-w-[900px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Lines as="h1" className="font-display text-balance text-[clamp(40px,6vw,88px)]" lines={['Syarat dan', 'ketentuan']} />
      <Reveal className="mt-6 text-[14px] text-faint">Terakhir diperbarui: {updated}</Reveal>

      <div className="mt-14 flex flex-col gap-12">
        {sections.map((s) => (
          <Reveal key={s.title}>
            <h2 className="text-[20px] font-medium">{s.title}</h2>
            <div className="mt-3 flex flex-col gap-3 text-[16px] leading-relaxed text-muted">
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 border-t border-line pt-6 text-[14px] text-muted">
        Ada pertanyaan soal ketentuan ini? Hubungi <a href={`mailto:${site.email}`} className="link-draw text-fg">{site.email}</a>.
      </Reveal>
    </article>
  )
}