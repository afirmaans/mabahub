import SectionHeader from '../components/SectionHeader'
import { timelineEvents } from '../data/mabaData'

const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export default function Timeline() {
  return (
    <main className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Timeline"
          title="Rangkaian kegiatan mahasiswa baru"
          description="Urutan agenda dibuat ringkas agar peserta mudah membaca waktu, lokasi, dan konteks setiap sesi."
        />

        <div className="timeline-list">
          {timelineEvents.map((event, index) => (
            <article className="timeline-item" key={event.id}>
              <div className="timeline-marker">
                <span>{index + 1}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span>
                    {dateFormatter.format(new Date(`${event.date}T08:00:00+07:00`))}
                  </span>
                  <span>{event.time}</span>
                </div>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <div className="timeline-tags">
                  <span>{event.category}</span>
                  <span>{event.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
