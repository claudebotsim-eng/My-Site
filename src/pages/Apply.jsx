import { useState } from 'react'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'

// Sign up free at formspree.io → create a form → paste your form ID here
const FORMSPREE_ID = 'YOUR_FORM_ID'

export default function Apply() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    state: '', condition: '', priorTreatment: '', income: '',
    provider: '', message: '', consent: false
  })

  const handle = (e) => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

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
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
      <div style={{ textAlign: 'center', maxWidth: '500px' }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Application Received</h2>
        <p style={{ color: '#6a5f55', lineHeight: '1.8', marginBottom: '28px' }}>
          Thank you for reaching out. We review every application personally and will be in touch within 3–5 business days. You don't have to navigate this alone.
        </p>
        <p style={{ fontSize: '0.88rem', color: '#888' }}>
          Questions? Email us at <a href="mailto:info@bridgewellness.org" style={{ color: '#3a7ca5' }}>info@bridgewellness.org</a>
        </p>
      </div>
    </div>
  )

  return (
    <>
      <SEO
        title="Apply for Assistance"
        description="Apply for financial assistance from Bridging Wellness. We connect qualifying individuals with therapeutic, behavioral health, and alternative medicine care."
        path="/apply"
      />

      <section className="page-hero">
        <div className="container">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Take the First Step</span>
          <h1>Apply for Assistance</h1>
          <p>This application is confidential. We review every submission personally and respond within 3–5 business days.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <ScrollReveal>
            <div style={{ background: '#ddeef7', borderRadius: '12px', padding: '20px 24px', marginBottom: '40px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.4rem' }}>🔒</span>
              <div>
                <strong style={{ display: 'block', marginBottom: '4px', color: '#2c2416' }}>Your information is confidential</strong>
                <p style={{ fontSize: '0.88rem', color: '#4a5568' }}>This application is reviewed only by Bridging Wellness staff. We will never share your personal information without your explicit consent.</p>
              </div>
            </div>
          </ScrollReveal>

          <form onSubmit={submit}>
            <ScrollReveal delay={50}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '24px', color: '#2c2416', borderBottom: '2px solid #e4ddd5', paddingBottom: '12px' }}>
                Personal Information
              </h3>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input name="firstName" value={form.firstName} onChange={handle} required placeholder="First name" />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input name="lastName" value={form.lastName} onChange={handle} required placeholder="Last name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handle} required placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handle} placeholder="(555) 555-5555" />
                </div>
              </div>
              <div className="form-group">
                <label>State of Residence *</label>
                <select name="state" value={form.state} onChange={handle} required>
                  <option value="">Select your state</option>
                  <option value="IL">Illinois</option>
                  <option value="other">Other US State</option>
                </select>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h3 style={{ fontSize: '1.1rem', margin: '36px 0 24px', color: '#2c2416', borderBottom: '2px solid #e4ddd5', paddingBottom: '12px' }}>
                Care Information
              </h3>
              <div className="form-group">
                <label>What type of care are you seeking? *</label>
                <select name="condition" value={form.condition} onChange={handle} required>
                  <option value="">Select care type</option>
                  <option>Individual Therapy / Counseling</option>
                  <option>Trauma & PTSD Treatment</option>
                  <option>Depression & Mood Disorders</option>
                  <option>Anxiety & Stress Management</option>
                  <option>Addiction & Recovery Support</option>
                  <option>Integrative / Holistic Medicine</option>
                  <option>Somatic or Body-Based Therapy</option>
                  <option>Mindfulness & Hypnotherapy</option>
                  <option>Alternative & Complementary Care</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Prior Treatment History</label>
                <textarea name="priorTreatment" value={form.priorTreatment} onChange={handle}
                  placeholder="Briefly describe any prior treatment you've pursued (therapy, medication, etc.)" />
              </div>
              <div className="form-group">
                <label>Do you have a provider in mind?</label>
                <select name="provider" value={form.provider} onChange={handle}>
                  <option value="">Select an option</option>
                  <option>Yes — I have a specific provider</option>
                  <option>No — I need help finding one</option>
                  <option>I'd like a referral from your network</option>
                </select>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h3 style={{ fontSize: '1.1rem', margin: '36px 0 24px', color: '#2c2416', borderBottom: '2px solid #e4ddd5', paddingBottom: '12px' }}>
                Financial Information
              </h3>
              <div className="form-group">
                <label>Approximate Annual Household Income</label>
                <select name="income" value={form.income} onChange={handle}>
                  <option value="">Prefer not to say</option>
                  <option>Under $25,000</option>
                  <option>$25,000 – $50,000</option>
                  <option>$50,000 – $75,000</option>
                  <option>$75,000 – $100,000</option>
                  <option>Over $100,000</option>
                </select>
              </div>
              <div className="form-group">
                <label>Anything else you'd like us to know?</label>
                <textarea name="message" value={form.message} onChange={handle}
                  placeholder="Share anything that helps us understand your situation..." />
              </div>
              <div className="form-group" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <input type="checkbox" name="consent" checked={form.consent} onChange={handle} required
                  style={{ width: 'auto', marginTop: '3px', accentColor: '#5e8c6a' }} />
                <label style={{ fontWeight: '400', fontSize: '0.88rem', color: '#6a5f55', cursor: 'pointer' }}>
                  I understand that Bridging Wellness does not provide clinical services. I consent to being contacted by Bridging Wellness staff regarding my application. *
                </label>
              </div>

              {status === 'error' && (
                <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '10px', padding: '14px 18px', marginBottom: '20px', fontSize: '0.9rem', color: '#b91c1c' }}>
                  Something went wrong. Please email us directly at <a href="mailto:info@bridgewellness.org">info@bridgewellness.org</a>
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={status === 'sending'}>
                {status === 'sending' ? 'Submitting…' : 'Submit Application →'}
              </button>
            </ScrollReveal>
          </form>
        </div>
      </section>
    </>
  )
}
