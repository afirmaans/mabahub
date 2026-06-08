export const PROFILE_KEY = 'mabahub_user'
export const CHECKLIST_KEY = 'mabahub_checklist'

const TASK_STATUS_KEYS = [
  'mabahub_task_status',
  'mabahub_task_statuses',
  'mabahub_tasks_status',
  'mabahub_completed_tasks',
  'mabahub_tasks',
  'mabahub_assignments',
  'task_statuses',
  'taskStatus',
]

export function readStorage(key, fallback) {
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

export function writeStorage(key, value) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(key, JSON.stringify(value))
}

export function removeStorage(key) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.removeItem(key)
}

export function getProfile() {
  return readStorage(PROFILE_KEY, null)
}

export function saveProfile(profile) {
  writeStorage(PROFILE_KEY, profile)
}

export function removeProfile() {
  removeStorage(PROFILE_KEY)
}

export function createChecklistState(checklistItems) {
  return checklistItems.reduce(
    (state, item) => ({
      ...state,
      [item.id]: item.done,
    }),
    {},
  )
}

function readTaskStatusData() {
  if (typeof window === 'undefined') {
    return null
  }

  for (const key of TASK_STATUS_KEYS) {
    const value = window.localStorage.getItem(key)

    if (value) {
      try {
        return JSON.parse(value)
      } catch {
        return null
      }
    }
  }

  return null
}

function normalizeStatus(value) {
  if (typeof value === 'boolean') {
    return value ? 'Selesai' : 'Belum Selesai'
  }

  if (typeof value === 'string') {
    return value
  }

  if (value && typeof value === 'object') {
    if ('status' in value) return value.status
    if ('done' in value) return value.done ? 'Selesai' : 'Belum Selesai'
    if ('completed' in value) return value.completed ? 'Selesai' : 'Belum Selesai'
  }

  return 'Belum Selesai'
}

function isCompleted(status) {
  const normalized = String(status).toLowerCase()

  return (
    normalized === 'selesai' ||
    normalized === 'done' ||
    normalized === 'completed' ||
    normalized === 'true'
  )
}

function createTaskStatusMap() {
  const data = readTaskStatusData()
  const statusMap = {}

  if (!data) {
    return statusMap
  }

  if (Array.isArray(data)) {
    data.forEach((item) => {
      if (typeof item === 'string' || typeof item === 'number') {
        statusMap[String(item)] = 'Selesai'
        return
      }

      if (item && typeof item === 'object') {
        const key = item.id || item.taskId || item.slug || item.title

        if (key) {
          statusMap[String(key)] = normalizeStatus(item)
        }
      }
    })

    return statusMap
  }

  if (typeof data === 'object') {
    Object.entries(data).forEach(([key, value]) => {
      statusMap[String(key)] = normalizeStatus(value)
    })
  }

  return statusMap
}

function getTaskSavedStatus(task, statusMap) {
  const possibleKeys = [task.id, task.taskId, task.slug, task.title].filter(Boolean)

  for (const key of possibleKeys) {
    if (statusMap[String(key)]) {
      return statusMap[String(key)]
    }
  }

  return task.status
}

export function getAssignmentsWithSavedStatus(assignments) {
  const statusMap = createTaskStatusMap()

  return assignments.map((task) => ({
    ...task,
    status: getTaskSavedStatus(task, statusMap),
  }))
}

export function getTaskProgress(assignments) {
  const tasksWithStatus = getAssignmentsWithSavedStatus(assignments)

  const total = tasksWithStatus.length
  const completed = tasksWithStatus.filter((task) => isCompleted(task.status)).length
  const unfinished = total - completed
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100)

  return {
    total,
    completed,
    unfinished,
    percentage,
    tasks: tasksWithStatus,
  }
}