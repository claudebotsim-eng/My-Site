import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LogoHorizontal } from './Logo'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="nav-logo" aria-label="Bridging Wellness Home">
          <LogoHorizontal height={38} />
        </Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
          <Link to="/programs" className={isActive('/programs') ? 'active' : ''}>Programs</Link>
          <Link to="/providers" className={isActive('/providers') ? 'active' : ''}>For Providers</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
          <Link to="/apply" className="btn btn-primary nav-cta">Apply for Help</Link>
          <Link to="/donate" className="btn btn-green nav-cta">Donate</Link>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={menuOpen ? 'open' : ''} /><span className={menuOpen ? 'open' : ''} /><span className={menuOpen ? 'open' : ''} />
        </button>
      </div>
    </nav>
  )
}
