import { useState } from 'react'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'

const FORMSPREE_ID = 'YOUR_FORM_ID'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch { setStatus('error') }
  }

  if (status === 'success') return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
      <div style={{ textAlign: 'center', maxWidth: '500px' }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📬</div>
        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Message Sent</h2>
        <p style={{ color: '#6a5f55', lineHeight: '1.8' }}>
          Thanks for reaching out. We respond within 2–3 business days. Urgent?
          Email us directly at <a href="mailto:info@bridgewellness.org" style={{ color: '#3a7ca5' }}>info@bridgewellness.org</a>
        </p>
      </div>
    </div>
  )

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with Bridging Wellness. Questions, partnerships, referrals, or general inquiries." path="/contact" />

      <section className="page-hero">
        <div className="container">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>We're Here</span>
          <h1>Get in Touch</h1>
          <p>Questions, partnerships, referrals, or general inquiries — we're real people and we're responsive.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '60px', alignItems: 'start' }}>
          <ScrollReveal direction="left">
            <h2 style={{ fontSize: '1.6rem', marginBottom: '28px', color: '#2c2416' }}>Contact Information</h2>
            {[
              { icon: '📧', label: 'Email', value: 'info@bridgewellness.org', href: 'mailto:info@bridgewellness.org' },
              { icon: '🌐', label: 'Website', value: 'bridgewellness.org', href: 'https://bridgewellness.org' },
              { icon: '🏢', label: 'Organization', value: 'Bridging Wellness\nIllinois Nonprofit Corporation' },
              { icon: '👤', label: 'President', value: 'David Gray, LCPC' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', gap: '16px', padding: '18px 0', borderBottom: '1px solid #f0ebe3', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{c.icon}</span>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a08870', marginBottom: '4px' }}>{c.label}</strong>
                  {c.href
                    ? <a href={c.href} style={{ color: '#3a7ca5', fontSize: '0.95rem' }}>{c.value}</a>
                    : <p style={{ fontSize: '0.95rem', color: '#4a4038', whiteSpace: 'pre-line', lineHeight: '1.6' }}>{c.value}</p>
                  }
                </div>
              </div>
            ))}

            <div style={{ background: '#ddeee2', borderRadius: '14px', padding: '24px', marginTop: '28px', border: '1px solid #b5d4bc' }}>
              <h4 style={{ marginBottom: '10px', fontSize: '0.95rem', color: '#2c2416' }}>Seeking financial assistance?</h4>
              <p style={{ fontSize: '0.88rem', color: '#4a5c50', lineHeight: '1.6', marginBottom: '14px' }}>Use our dedicated application form for the fastest response.</p>
              <a href="/apply" className="btn btn-green" style={{ fontSize: '0.88rem', padding: '10px 18px' }}>Application Form →</a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <div className="card" style={{ padding: '44px' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '28px', color: '#2c2416' }}>Send a Message</h3>
              <form onSubmit={submit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input name="name" value={form.name} onChange={handle} required placeholder="Full name" />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handle} required placeholder="your@email.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <select name="subject" value={form.subject} onChange={handle} required>
                    <option value="">Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Seeking Care Assistance</option>
                    <option>Provider / Partnership Inquiry</option>
                    <option>Donation Question</option>
                    <option>Board / Volunteer Interest</option>
                    <option>Media / Press</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" value={form.message} onChange={handle} required
                    placeholder="How can we help?" style={{ minHeight: '140px' }} />
                </div>
                {status === 'error' && (
                  <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '10px', padding: '12px 16px', marginBottom: '16px', fontSize: '0.88rem', color: '#b91c1c' }}>
                    Something went wrong. Please email <a href="mailto:info@bridgewellness.org">info@bridgewellness.org</a> directly.
                  </div>
                )}
                <button type="submit" className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
