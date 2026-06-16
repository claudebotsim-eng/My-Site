import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import { useState } from 'react'

export default function Donate() {
  const [submitted, setSubmitted] = useState(false)
  const [amount, setAmount] = useState('100')
  const [custom, setCustom] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => { e.preventDefault(); setSubmitted(true) }

  if (submitted) return (
    <div style={{minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 20px'}}>
      <div style={{textAlign:'center', maxWidth:'500px'}}>
        <div style={{fontSize:'4rem', marginBottom:'20px'}}>❤️</div>
        <h2 style={{fontSize:'2rem', marginBottom:'16px'}}>Thank You</h2>
        <p style={{color:'#555', lineHeight:'1.8'}}>Your generosity directly funds access to healing for people who couldn't otherwise afford it. We'll be in touch with next steps for completing your donation.</p>
      </div>
    </div>
  )

  const amounts = ['50', '100', '250', '500', '1000']
  const finalAmount = custom || amount

  return (
    <div><SEO title="Donate" description="Support Bridging Wellness. Your donation funds financial assistance for people seeking behavioral health and alternative medicine care." path="/donate" />
      <section className="page-hero">
        <div className="container">
          <span className="section-label" style={{color:'rgba(255,255,255,0.7)'}}>Make an Impact</span>
          <h1>Donate to Bridging Wellness</h1>
          <p>Your contribution directly funds financial assistance for people seeking therapeutic, behavioral health, and alternative medicine care. Every dollar removes a barrier to healing.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'60px', alignItems:'start'}}>
          
          {/* LEFT: IMPACT */}
          <div><SEO title="Donate" description="Support Bridging Wellness. Your donation funds financial assistance for people seeking behavioral health and alternative medicine care." path="/donate" />
            <span className="section-label">Your Impact</span>
            <h2 className="section-title">What Your Donation Does</h2>
            {[
              {amount:'$50', impact:'Covers one integration therapy session for a client in our program'},
              {amount:'$100', impact:'Funds preparatory consultation and intake for one new client'},
              {amount:'$250', impact:'Contributes toward a course of behavioral health or alternative medicine care'},
              {amount:'$500', impact:'Covers a significant portion of treatment costs for one person'},
              {amount:'$1,000+', impact:'Funds a complete course of treatment for one qualifying individual'},
            ].map(i => (
              <div key={i.amount} style={{display:'flex', gap:'16px', padding:'16px 0', borderBottom:'1px solid #f0f0f0', alignItems:'flex-start'}}>
                <span style={{background:'#2c5aa0', color:'white', padding:'6px 12px', borderRadius:'8px', fontSize:'0.88rem', fontWeight:'700', flexShrink:0}}>{i.amount}</span>
                <p style={{fontSize:'0.92rem', color:'#555', lineHeight:'1.6'}}>{i.impact}</p>
              </div>
            ))}
            <div style={{background:'#f8f7f5', borderRadius:'12px', padding:'20px', marginTop:'24px'}}>
              <p style={{fontSize:'0.82rem', color:'#888', lineHeight:'1.6'}}>Bridging Wellness is an Illinois-registered nonprofit corporation. Please consult your tax advisor regarding deductibility.</p>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="card" style={{padding:'40px'}}>
            <h3 style={{fontSize:'1.3rem', marginBottom:'24px'}}>Choose Your Amount</h3>
            <div style={{display:'flex', gap:'10px', flexWrap:'wrap', marginBottom:'16px'}}>
              {amounts.map(a => (
                <button key={a} type="button"
                  onClick={() => { setAmount(a); setCustom('') }}
                  style={{
                    padding:'12px 18px', borderRadius:'10px', border:'2px solid',
                    borderColor: amount === a && !custom ? '#2c5aa0' : '#e8e6e3',
                    background: amount === a && !custom ? '#2c5aa0' : 'white',
                    color: amount === a && !custom ? 'white' : '#444',
                    fontWeight:'600', fontSize:'0.95rem', cursor:'pointer', transition:'all 0.2s'
                  }}>
                  ${a}
                </button>
              ))}
            </div>
            <div className="form-group">
              <label>Or enter a custom amount</label>
              <div style={{position:'relative'}}>
                <span style={{position:'absolute', left:'14px', top:'50%', transform:'translateY(-50%)', color:'#888'}}>$</span>
                <input value={custom} onChange={e => { setCustom(e.target.value); setAmount('') }} placeholder="Other amount" style={{paddingLeft:'28px'}} />
              </div>
            </div>

            <form onSubmit={submit}>
              <div className="form-group">
                <label>Your Name *</label>
                <input name="name" value={form.name} onChange={handle} required placeholder="Full name" />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" name="email" value={form.email} onChange={handle} required placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Message (optional)</label>
                <textarea name="message" value={form.message} onChange={handle} placeholder="Share why this cause matters to you..." style={{minHeight:'80px'}} />
              </div>
              <button type="submit" className="btn btn-green btn-lg" style={{width:'100%', justifyContent:'center'}}>
                Donate {finalAmount ? `$${finalAmount}` : ''} →
              </button>
              <p style={{fontSize:'0.8rem', color:'#888', textAlign:'center', marginTop:'12px'}}>We'll follow up with secure payment instructions via email.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
