import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { LogoMark } from '../components/Logo'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" />
      <div style={{
        minHeight: '80vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', padding: '60px 24px', textAlign: 'center'
      }}>
        <div style={{ maxWidth: '480px' }}>
          <LogoMark size={72} style={{ margin: '0 auto 28px', display: 'block' }} />
          <h1 style={{ fontSize: '1.4rem', color: '#8c7b6e', fontFamily: 'Inter', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.2em' }}>
            404
          </h1>
          <h2 style={{ fontSize: '2rem', color: '#2c2416', marginBottom: '16px' }}>
            Page Not Found
          </h2>
          <p style={{ color: '#6a5f55', lineHeight: '1.8', marginBottom: '36px' }}>
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary btn-lg">Back to Home</Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  )
}
