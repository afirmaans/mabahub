import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'
import SectionHeader from '../components/SectionHeader'
import { activities } from '../data/activities'
import { faqs } from '../data/faqs'
import { tasks } from '../data/tasks'

const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

const stats = [
  {
    label: 'Kegiatan',
    value: activities.length,
    description: 'hari rangkaian mahasiswa baru',
  },
  {
    label: 'Tugas',
    value: tasks.length,
    description: 'penugasan lintas kategori',
  },
  {
    label: 'FAQ',
    value: faqs.length,
    description: 'jawaban pertanyaan penting',
  },
]

const mainFeatures = [
  {
    title: 'Informasi',
    label: '01',
    description:
      'Ringkasan jadwal, lokasi, dan arahan kegiatan tersusun rapi untuk peserta.',
  },
  {
    title: 'Penugasan',
    label: '02',
    description:
      'Daftar tugas memiliki kategori, deadline, tipe, status, dan prioritas.',
  },
  {
    title: 'Dashboard',
    label: '03',
    description:
      'Peserta dapat memantau progress, jadwal terdekat, dan checklist pribadi.',
  },
  {
    title: 'FAQ',
    label: '04',
    description:
      'Pertanyaan umum seputar kehadiran, dresscode, tugas, dan contact person.',
  },
]

export default function Home() {
  return (
    <main>
      <section className="hero-section home-hero">
        <img className="hero-art" src={heroImage} alt="" aria-hidden="true" />
        <div className="container hero-content">
          <span className="eyebrow">Portal mahasiswa baru 2026</span>
          <h1>MabaHub</h1>
          <p>
            Mini portal kepanitiaan kampus untuk menyatukan informasi kegiatan,
            penugasan, panduan, dan dashboard peserta mahasiswa baru.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" to="/tasks">
              Lihat tugas
            </Link>
            <Link className="button button-secondary" to="/guide">
              Baca panduan
            </Link>
          </div>
        </div>
      </section>

      <section className="container section-space home-stats-section">
        <SectionHeader
          eyebrow="Statistik"
          title="Satu portal untuk kebutuhan peserta"
          description="Angka berikut diambil langsung dari data dummy agar mudah dijelaskan saat presentasi portfolio."
        />

        <div className="home-stats-grid">
          {stats.map((stat) => (
            <article className="home-stat-card" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <p>{stat.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <SectionHeader
            eyebrow="Timeline preview"
            title="Cuplikan jadwal kegiatan"
            description="Empat hari kegiatan utama ditampilkan sebagai preview sebelum peserta membaca detail agenda."
          />

          <div className="home-timeline-grid">
            {activities.map((activity, index) => (
              <article className="home-activity-card" key={activity.title}>
                <div className="activity-day">Hari {index + 1}</div>
                <h2>{activity.title}</h2>
                <div className="activity-meta">
                  <span>
                    {dateFormatter.format(
                      new Date(`${activity.date}T08:00:00+07:00`),
                    )}
                  </span>
                  <span>{activity.time}</span>
                  <span>{activity.location}</span>
                </div>
                <p>{activity.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-space">
        <SectionHeader
          eyebrow="Fitur utama"
          title="Dibuat untuk alur kerja kepanitiaan"
          description="Struktur fitur dibuat sederhana, modular, dan mudah dikembangkan menjadi portal mahasiswa baru yang lebih lengkap."
        />

        <div className="home-feature-grid">
          {mainFeatures.map((feature) => (
            <article className="home-feature-card" key={feature.title}>
              <span>{feature.label}</span>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-final-cta">
        <div className="container final-cta-content">
          <div>
            <span className="eyebrow">Siap digunakan</span>
            <h2>Mulai pantau penugasan mahasiswa baru.</h2>
            <p>
              Buka daftar tugas atau masuk sebagai peserta demo untuk melihat
              bagaimana alur portal bekerja tanpa backend.
            </p>
          </div>

          <div className="final-cta-actions">
            <Link className="button button-primary" to="/tasks">
              Ke halaman tugas
            </Link>
            <Link className="button button-secondary" to="/login">
              Login demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
