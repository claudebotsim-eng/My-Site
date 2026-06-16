import { Link } from 'react-router-dom'
import { LogoStacked } from './Logo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <LogoStacked size={100} light={true} className="footer-logo-svg" />
            <p>Providing financial assistance, education, and provider connections for therapeutic, behavioral health, and alternative medicine care.</p>
            <p className="footer-nonprofit">Illinois Nonprofit Corporation</p>
          </div>

          <div className="footer-col">
            <h4>Organization</h4>
            <Link to="/about">About Us</Link>
            <Link to="/programs">Our Programs</Link>
            <Link to="/providers">For Providers</Link>
            <Link to="/donate">Donate</Link>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <Link to="/apply">Apply for Assistance</Link>
            <Link to="/contact">Contact Us</Link>
            <a href="https://graymattertherapy.net" target="_blank" rel="noreferrer">Gray Matter Therapy</a>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>David Gray, LCPC</p>
            <p>President, Bridging Wellness</p>
            <a href="mailto:info@bridgewellness.org">info@bridgewellness.org</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Bridging Wellness. All rights reserved. | Illinois Nonprofit Corporation</p>
          <p>Bridging Wellness does not provide medical or clinical services. We provide financial assistance and educational resources only.</p>
        </div>
      </div>
    </footer>
  )
}
