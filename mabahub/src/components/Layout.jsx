import { Link, NavLink, Outlet } from 'react-router-dom'
import { contacts } from '../data/mabaData'

const navItems = [
  { path: '/', label: 'Beranda', end: true },
  { path: '/tasks', label: 'Tasks' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/guide', label: 'Guide' },
  { path: '/login', label: 'Login' },
]

export default function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="MabaHub beranda">
          <span className="brand-mark" aria-hidden="true">
            MH
          </span>
          <span>
            <strong>MabaHub</strong>
            <small>Portal Maba</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link is-active' : 'nav-link'
              }
              end={item.end}
              key={item.path}
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <Outlet />

      <footer className="site-footer" id="contact">
        <div className="footer-intro">
          <span className="eyebrow">Contact person</span>
          <h2>Butuh bantuan saat orientasi?</h2>
          <p>
            Hubungi panitia sesuai kebutuhan informasi peserta atau penugasan.
          </p>
        </div>

        <div className="footer-contacts">
          {contacts.map((contact) => (
            <address className="contact-card" key={contact.email}>
              <strong>{contact.name}</strong>
              <span>{contact.role}</span>
              <a
                href={`https://wa.me/${contact.phone.replace(/\D/g, '')}`}
                rel="noreferrer"
                target="_blank"
              >
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </address>
          ))}
        </div>
      </footer>
    </div>
  )
}
