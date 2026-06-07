import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="page">
      <div className="container not-found">
        <span className="eyebrow">404</span>
        <h1>Halaman tidak ditemukan</h1>
        <p>Rute yang dibuka belum tersedia di portal MabaHub.</p>
        <Link className="button button-primary" to="/">
          Kembali ke beranda
        </Link>
      </div>
    </main>
  )
}
