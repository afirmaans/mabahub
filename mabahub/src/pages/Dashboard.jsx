import { useEffect, useMemo, useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import StatusBadge from '../components/StatusBadge'
import {
  assignments,
  checklistItems,
  timelineEvents,
} from '../data/mabaData'

const PROFILE_KEY = 'mabahub-demo-profile'
const CHECKLIST_KEY = 'mabahub-demo-checklist'

function readStorage(key, fallback) {
  if (typeof window === 'undefined') {
    return fallback
  }

  try {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

function createChecklistState() {
  return checklistItems.reduce(
    (state, item) => ({
      ...state,
      [item.id]: item.done,
    }),
    {},
  )
}

const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'short',
})

export default function Dashboard() {
  const [profile, setProfile] = useState(() => readStorage(PROFILE_KEY, null))
  const [name, setName] = useState('')
  const [faculty, setFaculty] = useState('Teknik')
  const [checklistState, setChecklistState] = useState(() =>
    readStorage(CHECKLIST_KEY, createChecklistState()),
  )

  useEffect(() => {
    if (profile) {
      window.localStorage.setItem(PROFILE_KEY, JSON.stringify(profile))
    }
  }, [profile])

  useEffect(() => {
    window.localStorage.setItem(CHECKLIST_KEY, JSON.stringify(checklistState))
  }, [checklistState])

  const taskProgress = useMemo(() => {
    const completed = assignments.filter((task) => task.status === 'Selesai').length
    const percentage = Math.round((completed / assignments.length) * 100)

    return { completed, percentage, total: assignments.length }
  }, [])

  const upcomingEvents = timelineEvents.slice(0, 3)

  const activeTasks = assignments.filter((task) => task.status !== 'Selesai').slice(0, 3)

  function handleLogin(event) {
    event.preventDefault()

    if (!name.trim()) {
      return
    }

    setProfile({
      name: name.trim(),
      faculty,
      joinedAt: new Date().toISOString(),
    })
    setName('')
  }

  function handleLogout() {
    window.localStorage.removeItem(PROFILE_KEY)
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
            title="Masuk dengan akun demo"
            description="Data login disimpan di localStorage browser, sehingga cocok untuk contoh portfolio tanpa backend."
          />

          <form className="login-panel" onSubmit={handleLogin}>
            <label>
              <span>Nama peserta</span>
              <input
                required
                type="text"
                placeholder="Contoh: Nadia Kirana"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>

            <label>
              <span>Fakultas</span>
              <select
                value={faculty}
                onChange={(event) => setFaculty(event.target.value)}
              >
                <option>Teknik</option>
                <option>Ekonomi dan Bisnis</option>
                <option>Ilmu Komputer</option>
                <option>Ilmu Sosial</option>
                <option>Kedokteran</option>
              </select>
            </label>

            <button className="button button-primary" type="submit">
              Masuk demo
            </button>
          </form>
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
              Fakultas {profile.faculty}. Pantau tugas aktif, jadwal terdekat,
              dan checklist persiapan dari satu layar.
            </p>
          </div>
          <button className="button button-secondary" type="button" onClick={handleLogout}>
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
            <span>Tugas aktif</span>
            <strong>{activeTasks.length}</strong>
            <p>Masih perlu dipantau sebelum deadline.</p>
          </article>
          <article className="metric-card">
            <span>Checklist</span>
            <strong>
              {Object.values(checklistState).filter(Boolean).length}/
              {checklistItems.length}
            </strong>
            <p>Persiapan pribadi tersimpan lokal.</p>
          </article>
        </section>

        <div className="dashboard-grid">
          <section className="dashboard-panel">
            <div className="panel-heading">
              <h2>Tugas aktif</h2>
              <span>{activeTasks.length} item</span>
            </div>
            <div className="compact-list">
              {activeTasks.map((task) => (
                <article className="compact-item" key={task.id}>
                  <div>
                    <strong>{task.title}</strong>
                    <span>
                      Deadline {dateFormatter.format(new Date(task.deadline))}
                    </span>
                  </div>
                  <StatusBadge status={task.status} />
                </article>
              ))}
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
                      {dateFormatter.format(new Date(event.date))} - {event.time} WIB
                    </span>
                  </div>
                  <span className="task-category">{event.category}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="dashboard-panel checklist-panel">
            <div className="panel-heading">
              <h2>Checklist</h2>
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
