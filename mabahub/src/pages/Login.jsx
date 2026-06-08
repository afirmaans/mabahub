import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { getProfile, saveProfile } from '../utils/storage'

export default function Login() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [faculty, setFaculty] = useState('Teknik')

  useEffect(() => {
    const profile = getProfile()

    if (profile) {
      navigate('/dashboard', { replace: true })
    }
  }, [navigate])

  function handleLogin(event) {
    event.preventDefault()

    if (!name.trim()) {
      return
    }

    const profile = {
      name: name.trim(),
      faculty,
      joinedAt: new Date().toISOString(),
    }

    saveProfile(profile)
    navigate('/dashboard', { replace: true })
  }

  return (
    <main className="page">
      <div className="container dashboard-login">
        <SectionHeader
          eyebrow="Login demo"
          title="Masuk ke dashboard peserta"
          description="Login ini hanya simulasi. Data peserta disimpan di localStorage browser tanpa backend."
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