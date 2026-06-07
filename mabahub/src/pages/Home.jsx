import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'
import Countdown from '../components/Countdown'
import SectionHeader from '../components/SectionHeader'
import {
  assignments,
  heroStats,
  highlights,
  launchDate,
  timelineEvents,
} from '../data/mabaData'

const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export default function Home() {
  const nextEvent = timelineEvents[0]
  const activeAssignments = assignments.filter((task) => task.status !== 'Selesai')

  return (
    <main>
      <section className="hero-section">
        <img className="hero-art" src={heroImage} alt="" aria-hidden="true" />
        <div className="container hero-content">
          <span className="eyebrow">Portal mahasiswa baru 2026</span>
          <h1>MabaHub</h1>
          <p>
            Mini portal informasi dan penugasan mahasiswa baru untuk membantu
            peserta membaca jadwal, memantau tugas, dan menyiapkan kegiatan
            orientasi dalam satu tempat.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" to="/dashboard">
              Masuk demo
            </Link>
            <Link className="button button-secondary" to="/penugasan">
              Lihat tugas
            </Link>
          </div>

          <div className="hero-stats" aria-label="Ringkasan MabaHub">
            {heroStats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container split-section">
          <div>
            <SectionHeader
              eyebrow="Hitung mundur"
              title="Pembukaan kegiatan segera dimulai"
              description={`Agenda pertama: ${nextEvent.title} pada ${dateFormatter.format(
                new Date(`${nextEvent.date}T08:00:00+07:00`),
              )}.`}
            />
          </div>
          <Countdown targetDate={launchDate} />
        </div>
      </section>

      <section className="container section-space">
        <SectionHeader
          eyebrow="Highlight"
          title="Fokus utama portal"
          description="Landing page ini menampilkan contoh alur yang biasa dibutuhkan kepanitiaan website kampus."
        />

        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="highlight-card" key={item.title}>
              <span>{item.tag}</span>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band">
        <div className="container overview-grid">
          <div>
            <span className="eyebrow">Ringkasan tugas</span>
            <h2>{activeAssignments.length} tugas perlu dipantau</h2>
            <p>
              Data dummy dirancang agar search, filter kategori, status, deadline,
              dan progress bisa langsung diuji tanpa backend.
            </p>
          </div>

          <div className="mini-task-list" aria-label="Tugas aktif terdekat">
            {activeAssignments.slice(0, 3).map((task) => (
              <Link className="mini-task" to="/penugasan" key={task.id}>
                <strong>{task.title}</strong>
                <span>{task.category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
