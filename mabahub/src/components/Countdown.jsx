import { useEffect, useState } from 'react'

function calculateTimeLeft(targetDate) {
  const distance = new Date(targetDate).getTime() - Date.now()

  if (distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isStarted: true,
    }
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
    isStarted: false,
  }
}

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [targetDate])

  const units = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ]

  return (
    <div className="countdown" aria-label="Hitung mundur kegiatan MabaHub">
      {units.map((unit) => (
        <div className="countdown-item" key={unit.label}>
          <strong>{String(unit.value).padStart(2, '0')}</strong>
          <span>{unit.label}</span>
        </div>
      ))}
      {timeLeft.isStarted && (
        <p className="countdown-note">Rangkaian kegiatan sedang berlangsung.</p>
      )}
    </div>
  )
}
