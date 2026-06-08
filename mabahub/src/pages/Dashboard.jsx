import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import StatusBadge from '../components/StatusBadge'
import {
  assignments,
  checklistItems,
  timelineEvents,
} from '../data/mabaData'
import {
  CHECKLIST_KEY,
  createChecklistState,
  getAssignmentsWithSavedStatus,
  getProfile,
  getTaskProgress,
  readStorage,
  removeProfile,
  writeStorage,
} from '../utils/storage'

const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'short',
})

export default function Dashboard() {
  const [profile, setProfile] = useState(() => getProfile())

  const [checklistState, setChecklistState] = useState(() =>
    readStorage(CHECKLIST_KEY, createChecklistState(checklistItems)),
  )

  useEffect(() => {
    writeStorage(CHECKLIST_KEY, checklistState)
  }, [checklistState])

  const assignmentsWithStatus = useMemo(
    () => getAssignmentsWithSavedStatus(assignments),
    [],
  )

  const taskProgress = useMemo(() => getTaskProgress(assignments), [])

  const activeTasks = assignmentsWithStatus
    .filter((task) => task.status !== 'Selesai')
    .slice(0, 3)

  const upcomingEvents = timelineEvents.slice(0, 3)

  function handleLogout() {
    removeProfile()
    setProfile(null)
  }

  function toggleChecklist(id) {
    setChecklistState((current) => ({
      ...current,
      [id]: !current[id],
    }))
  }

  if (!profile) {
    return (
      <main className="page">
        <div className="container dashboard-login">
          <SectionHeader
            eyebrow="Dashboard peserta"
            title="Belum ada peserta masuk"
            description="Silakan masuk lewat halaman login demo untuk menyimpan profil peserta di localStorage."
          />

          <div className="login-panel">
            <p>
              Setelah login, dashboard akan menampilkan progress tugas, jadwal
              terdekat, dan checklist peserta.
            </p>

            <Link className="button button-primary" to="/login">
              Ke halaman login
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="page">
      <div className="container">
        <section className="dashboard-hero">
          <div>
            <span className="eyebrow">Dashboard peserta</span>
            <h1>Halo, {profile.name}</h1>
            <p>
              Fakultas {profile.faculty}. Pantau progress tugas, jadwal
              terdekat, dan checklist persiapan dari satu layar.
            </p>
          </div>

          <button
            className="button button-secondary"
            type="button"
            onClick={handleLogout}
          >
            Keluar
          </button>
        </section>

        <section className="metric-grid" aria-label="Progress peserta">
          <article className="metric-card">
            <span>Progress tugas</span>
            <strong>{taskProgress.percentage}%</strong>
            <p>
              {taskProgress.completed} dari {taskProgress.total} tugas selesai.
            </p>
          </article>

          <article className="metric-card">
            <span>Tugas selesai</span>
            <strong>{taskProgress.completed}</strong>
            <p>Tugas yang sudah ditandai selesai.</p>
          </article>

          <article className="metric-card">
            <span>Belum selesai</span>
            <strong>{taskProgress.unfinished}</strong>
            <p>Tugas yang masih perlu dikerjakan.</p>
          </article>

          <article className="metric-card">
            <span>Total tugas</span>
            <strong>{taskProgress.total}</strong>
            <p>Seluruh penugasan mahasiswa baru.</p>
          </article>
        </section>

        <div className="dashboard-grid">
          <section className="dashboard-panel">
            <div className="panel-heading">
              <h2>Tugas aktif</h2>
              <span>{activeTasks.length} item</span>
            </div>

            <div className="compact-list">
              {activeTasks.length > 0 ? (
                activeTasks.map((task) => (
                  <article className="compact-item" key={task.id}>
                    <div>
                      <strong>{task.title}</strong>
                      <span>
                        Deadline {dateFormatter.format(new Date(task.deadline))}
                      </span>
                    </div>

                    <StatusBadge status={task.status} />
                  </article>
                ))
              ) : (
                <p>Semua tugas sudah selesai. Mantap!</p>
              )}
            </div>
          </section>

          <section className="dashboard-panel">
            <div className="panel-heading">
              <h2>Jadwal terdekat</h2>
              <span>{upcomingEvents.length} sesi</span>
            </div>

            <div className="compact-list">
              {upcomingEvents.map((event) => (
                <article className="compact-item" key={event.id}>
                  <div>
                    <strong>{event.title}</strong>
                    <span>
                      {dateFormatter.format(new Date(event.date))} - {event.time}
                    </span>
                  </div>

                  <span className="task-category">{event.category}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="dashboard-panel checklist-panel">
            <div className="panel-heading">
              <h2>Checklist persiapan</h2>
              <span>localStorage</span>
            </div>

            <div className="checklist">
              {checklistItems.map((item) => (
                <label className="checklist-item" key={item.id}>
                  <input
                    type="checkbox"
                    checked={Boolean(checklistState[item.id])}
                    onChange={() => toggleChecklist(item.id)}
                  />

                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}