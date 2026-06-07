import { useEffect, useMemo, useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import StatusBadge from '../components/StatusBadge'
import { tasks } from '../data/tasks'
import { TASK_STATUS_KEY } from '../data/storageKeys'

const deadlineFormatter = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

const categories = ['Semua', ...new Set(tasks.map((task) => task.category))]

function readTaskStatuses() {
  if (typeof window === 'undefined') {
    return {}
  }

  try {
    const savedStatuses = window.localStorage.getItem(TASK_STATUS_KEY)
    return savedStatuses ? JSON.parse(savedStatuses) : {}
  } catch {
    return {}
  }
}

function formatDeadline(deadline) {
  return deadlineFormatter.format(new Date(`${deadline}T08:00:00+07:00`))
}

export default function Tasks() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [taskStatuses, setTaskStatuses] = useState(readTaskStatuses)
  const [selectedTask, setSelectedTask] = useState(null)

  useEffect(() => {
    window.localStorage.setItem(TASK_STATUS_KEY, JSON.stringify(taskStatuses))
  }, [taskStatuses])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setSelectedTask(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const taskList = useMemo(
    () =>
      tasks.map((task) => ({
        ...task,
        status: taskStatuses[task.id] ?? task.status,
      })),
    [taskStatuses],
  )

  const filteredTasks = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    return taskList
      .filter((task) => {
        const matchesTitle = task.title.toLowerCase().includes(normalizedQuery)
        const matchesCategory =
          selectedCategory === 'Semua' || task.category === selectedCategory

        return matchesTitle && matchesCategory
      })
      .sort((first, second) => new Date(first.deadline) - new Date(second.deadline))
  }, [searchQuery, selectedCategory, taskList])

  const taskSummary = useMemo(() => {
    const completed = taskList.filter((task) => task.status === 'Selesai').length

    return {
      completed,
      incomplete: taskList.length - completed,
    }
  }, [taskList])

  function handleMarkComplete(taskId) {
    setTaskStatuses((currentStatuses) => ({
      ...currentStatuses,
      [taskId]: 'Selesai',
    }))
  }

  return (
    <main className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Tasks"
          title="Daftar tugas mahasiswa baru"
          description="Cari tugas berdasarkan judul, filter berdasarkan kategori, lalu tandai tugas yang sudah selesai."
        />

        <section className="task-summary-grid" aria-label="Ringkasan tugas">
          <article className="task-summary-card">
            <span>Selesai</span>
            <strong>{taskSummary.completed}</strong>
            <p>Tugas sudah selesai atau ditandai selesai.</p>
          </article>
          <article className="task-summary-card">
            <span>Belum selesai</span>
            <strong>{taskSummary.incomplete}</strong>
            <p>Tugas masih perlu dikerjakan peserta.</p>
          </article>
        </section>

        <section className="filter-panel tasks-filter" aria-label="Filter tugas">
          <label className="search-field">
            <span>Cari judul tugas</span>
            <input
              type="search"
              placeholder="Contoh: twibbon"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </label>

          <label>
            <span>Kategori</span>
            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </section>

        <div className="result-summary">
          <strong>{filteredTasks.length}</strong>
          <span>tugas ditampilkan</span>
        </div>

        <div className="task-grid">
          {filteredTasks.map((task) => (
            <article className="task-card task-list-card" key={task.id}>
              <div className="task-card-top">
                <span className="task-category">{task.category}</span>
                <StatusBadge status={task.status} />
              </div>

              <h2>{task.title}</h2>

              <div className="task-meta">
                <span>Deadline: {formatDeadline(task.deadline)}</span>
                <span>Prioritas: {task.priority}</span>
              </div>

              <div className="task-actions">
                <button
                  className="button button-secondary"
                  type="button"
                  onClick={() => setSelectedTask(task)}
                >
                  Lihat Detail
                </button>
                <button
                  className="button button-primary"
                  type="button"
                  disabled={task.status === 'Selesai'}
                  onClick={() => handleMarkComplete(task.id)}
                >
                  Tandai Selesai
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div className="empty-state">
            <h2>Tugas tidak ditemukan</h2>
            <p>Coba ganti kata kunci pencarian atau pilih kategori lain.</p>
          </div>
        )}
      </div>

      {selectedTask && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setSelectedTask(null)}
        >
          <section
            aria-labelledby="task-detail-title"
            aria-modal="true"
            className="task-modal"
            role="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-heading">
              <div>
                <span className="task-category">{selectedTask.category}</span>
                <h2 id="task-detail-title">{selectedTask.title}</h2>
              </div>
              <button
                className="modal-close"
                type="button"
                aria-label="Tutup detail tugas"
                onClick={() => setSelectedTask(null)}
              >
                x
              </button>
            </div>

            <p>{selectedTask.description}</p>

            <dl className="task-detail-list">
              <div>
                <dt>Deadline</dt>
                <dd>{formatDeadline(selectedTask.deadline)}</dd>
              </div>
              <div>
                <dt>Tipe</dt>
                <dd>{selectedTask.type}</dd>
              </div>
              <div>
                <dt>Prioritas</dt>
                <dd>{selectedTask.priority}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>
                  <StatusBadge status={selectedTask.status} />
                </dd>
              </div>
            </dl>

            <div className="modal-actions">
              <button
                className="button button-secondary"
                type="button"
                onClick={() => setSelectedTask(null)}
              >
                Tutup
              </button>
              <button
                className="button button-primary"
                type="button"
                disabled={selectedTask.status === 'Selesai'}
                onClick={() => {
                  handleMarkComplete(selectedTask.id)
                  setSelectedTask((currentTask) => ({
                    ...currentTask,
                    status: 'Selesai',
                  }))
                }}
              >
                Tandai Selesai
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  )
}
