import StatusBadge from './StatusBadge'

const deadlineFormatter = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

export default function TaskCard({ task }) {
  const deadline = deadlineFormatter.format(
    new Date(`${task.deadline}T08:00:00+07:00`),
  )

  return (
    <article className="task-card">
      <div className="task-card-top">
        <span className="task-category">{task.category}</span>
        <StatusBadge status={task.status} />
      </div>

      <h2>{task.title}</h2>
      <p>{task.description}</p>

      <div className="task-meta">
        <span>Deadline: {deadline}</span>
        <span>Prioritas: {task.priority}</span>
      </div>

      <div className="progress-bar" aria-label={`Progress ${task.progress} persen`}>
        <span style={{ width: `${task.progress}%` }} />
      </div>
    </article>
  )
}
