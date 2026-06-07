import SectionHeader from '../components/SectionHeader'
import { guideSections } from '../data/mabaData'

export default function Guide() {
  return (
    <main className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Panduan"
          title="Panduan singkat peserta"
          description="Konten panduan dibuat sebagai contoh halaman informasi statis yang mudah diperluas oleh panitia."
        />

        <div className="guide-grid">
          {guideSections.map((section) => (
            <article className="guide-card" key={section.id}>
              <h2>{section.title}</h2>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
