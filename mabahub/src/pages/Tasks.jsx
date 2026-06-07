import { useMemo, useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import TaskCard from '../components/TaskCard'
import { assignments } from '../data/mabaData'

const categories = ['Semua', ...new Set(assignments.map((task) => task.category))]
const statuses = ['Semua', 'Selesai', 'Berjalan', 'Belum Mulai']

export default function Tasks() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Semua')
  const [status, setStatus] = useState('Semua')

  const filteredTasks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return assignments
      .filter((task) => {
        const matchesQuery =
          task.title.toLowerCase().includes(normalizedQuery) ||
          task.description.toLowerCase().includes(normalizedQuery)
        const matchesCategory = category === 'Semua' || task.category === category
        const matchesStatus = status === 'Semua' || task.status === status

        return matchesQuery && matchesCategory && matchesStatus
      })
      .sort((first, second) => new Date(first.deadline) - new Date(second.deadline))
  }, [category, query, status])

  return (
    <main className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Penugasan"
          title="Cari dan pantau tugas peserta"
          description="Setiap tugas memiliki kategori, status, deadline, prioritas, dan progress agar alur monitoring lebih jelas."
        />

        <section className="filter-panel" aria-label="Filter penugasan">
          <label className="search-field">
            <span>Cari tugas</span>
            <input
              type="search"
              placeholder="Nama tugas atau detail"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <label>
            <span>Kategori</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Status</span>
            <select value={status} onChange={(event) => setStatus(event.target.value)}>
              {statuses.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </section>

        <div className="result-summary">
          <strong>{filteredTasks.length}</strong>
          <span>tugas ditemukan</span>
        </div>

        <div className="task-grid">
          {filteredTasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      </div>
    </main>
  )
}
