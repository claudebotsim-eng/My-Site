import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function Programs() {
  return (
    <div><SEO title="Our Programs" description="Three programs to bridge the gap: financial assistance, psychoeducation, and a vetted provider network for behavioral health care." path="/programs" />
      <section className="page-hero">
        <div className="container">
          <span className="section-label" style={{color:'rgba(255,255,255,0.7)'}}>What We Offer</span>
          <h1>Our Programs</h1>
          <p>Three interconnected programs designed to address every barrier between people and effective therapeutic, behavioral health, and alternative medicine care.</p>
        </div>
      </section>

      {/* FINANCIAL ASSISTANCE */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div><SEO title="Our Programs" description="Three programs to bridge the gap: financial assistance, psychoeducation, and a vetted provider network for behavioral health care." path="/programs" />
              <span className="tag tag-blue" style={{marginBottom:'16px', display:'inline-block'}}>Program 1</span>
              <h2 className="section-title">Financial Assistance</h2>
              <p style={{color:'#6a5f55', lineHeight:'1.8', marginBottom:'16px'}}>Quality therapeutic and behavioral health care — including specialized counseling, integrative medicine, somatic therapies, and alternative approaches — can carry significant out-of-pocket costs. Insurance coverage is often limited or unavailable for many effective modalities.</p>
              <p style={{color:'#6a5f55', lineHeight:'1.8', marginBottom:'28px'}}>We provide direct financial assistance to qualifying individuals on a case-by-case basis. Every application is reviewed personally. We work with each person to find the best possible path forward given their circumstances.</p>
              <h4 style={{marginBottom:'12px', color:'#2c2416'}}>Who Qualifies</h4>
              <ul style={{listStyle:'none', marginBottom:'28px'}}>
                {[
                  'Individuals with documented financial need',
                  'Those seeking therapeutic, behavioral health, or alternative medicine care',
                  'People connected to or seeking a vetted provider in our network',
                  'Illinois residents (priority) — others considered case by case',
                ].map(i => (
                  <li key={i} style={{padding:'8px 0', borderBottom:'1px solid #f0ebe3', fontSize:'0.92rem', color:'#6a5f55', paddingLeft:'20px', position:'relative'}}>
                    <span style={{position:'absolute', left:0, color:'#5e8c6a'}}>✓</span>{i}
                  </li>
                ))}
              </ul>
              <Link to="/apply" className="btn btn-primary btn-lg">Apply for Assistance</Link>
            </div>
            <div style={{background:'linear-gradient(135deg, #f5f0e8, #eaf0eb)', borderRadius:'24px', padding:'48px', display:'flex', flexDirection:'column', gap:'20px'}}>
              <h3 style={{fontSize:'1.2rem', color:'#2c2416', marginBottom:'8px'}}>Types of Care We Support</h3>
              {[
                ['Individual Therapy & Counseling', 'LCPC, LCSW, Psychologist'],
                ['Integrative & Holistic Medicine', 'Naturopathic, functional medicine'],
                ['Somatic & Body-Based Therapies', 'EMDR, somatic experiencing'],
                ['Mindfulness & Hypnotherapy', 'Evidence-based approaches'],
                ['Alternative & Complementary Care', 'Acupuncture, massage therapy, etc.'],
              ].map(([label, detail]) => (
                <div key={label} style={{display:'flex', flexDirection:'column', padding:'14px 18px', background:'white', borderRadius:'10px', boxShadow:'0 2px 8px rgba(44,36,22,0.06)', gap:'4px'}}>
                  <strong style={{fontSize:'0.9rem', color:'#2c2416'}}>{label}</strong>
                  <span style={{fontSize:'0.8rem', color:'#8c7b6e'}}>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid-2">
            <div style={{background:'linear-gradient(135deg, #1e1a14, #2a5c3a)', borderRadius:'24px', padding:'48px', color:'white', display:'flex', flexDirection:'column', gap:'16px'}}>
              <span style={{fontSize:'3rem'}}>📚</span>
              <h3 style={{fontSize:'1.4rem', color:'white'}}>Evidence over confusion.</h3>
              <p style={{color:'rgba(255,255,255,0.8)', lineHeight:'1.8'}}>The behavioral health and alternative medicine landscape is complex. We compile and present research-backed information in clear, accessible formats so people can make confident decisions about their care — without the overwhelm.</p>
            </div>
            <div><SEO title="Our Programs" description="Three programs to bridge the gap: financial assistance, psychoeducation, and a vetted provider network for behavioral health care." path="/programs" />
              <span className="tag tag-green" style={{marginBottom:'16px', display:'inline-block'}}>Program 2</span>
              <h2 className="section-title">Psychoeducation & Wellness Resources</h2>
              <p style={{color:'#6a5f55', lineHeight:'1.8', marginBottom:'20px'}}>Before someone pursues a new form of care, they deserve clear, accurate, unbiased information. Our educational resources cover the evidence, what to expect from different therapeutic approaches, and how to navigate the process.</p>
              <div style={{display:'flex', flexDirection:'column', gap:'14px', marginBottom:'28px'}}>
                {[
                  {icon:'🔬', title:'The Evidence', body:'Research-backed summaries of therapeutic modalities and behavioral health approaches — what works, for whom, and why.'},
                  {icon:'🧭', title:'Decision Support', body:'Frameworks to help people understand their options and determine which approach best fits their needs and situation.'},
                  {icon:'🛡️', title:'What to Expect', body:'Plain-language guides to the therapeutic process — what different modalities look like, what preparation involves, and what integration means.'},
                  {icon:'📖', title:'Wellness Library', body:'Curated resources on mental health, somatic care, integrative medicine, and whole-person wellness.'},
                ].map(r => (
                  <div key={r.title} style={{display:'flex', gap:'16px', padding:'16px', background:'white', borderRadius:'12px', boxShadow:'0 2px 8px rgba(44,36,22,0.05)'}}>
                    <span style={{fontSize:'1.5rem'}}>{r.icon}</span>
                    <div><SEO title="Our Programs" description="Three programs to bridge the gap: financial assistance, psychoeducation, and a vetted provider network for behavioral health care." path="/programs" />
                      <strong style={{display:'block', fontSize:'0.92rem', marginBottom:'4px', color:'#2c2416'}}>{r.title}</strong>
                      <p style={{fontSize:'0.85rem', color:'#6a5f55', lineHeight:'1.6'}}>{r.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL SUPPORT */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Program 3</span>
            <h2 className="section-title">Professional Support Network</h2>
            <p className="section-subtitle">Connecting clients to vetted providers. Supporting practitioners with referrals, resources, and professional community.</p>
          </div>
          <div className="grid-3">
            {[
              {icon:'🔗', title:'Provider Directory', body:'A curated list of credentialed therapists, counselors, and alternative medicine practitioners who have been vetted for quality and ethical practice.'},
              {icon:'🎓', title:'Professional Development', body:'Access to continuing education opportunities, training resources, and clinical skill-building for providers in our network.'},
              {icon:'💬', title:'Peer Consultation', body:'A community of practice for providers — clinical consultation, peer support, and collaborative care for complex or specialized cases.'},
            ].map(c => (
              <div className="card" key={c.title}>
                <div style={{fontSize:'2.2rem', marginBottom:'14px'}}>{c.icon}</div>
                <h3 style={{fontSize:'1.15rem', marginBottom:'10px'}}>{c.title}</h3>
                <p style={{fontSize:'0.92rem', color:'#6a5f55', lineHeight:'1.7'}}>{c.body}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:'48px', display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap'}}>
            <Link to="/providers" className="btn btn-green btn-lg">Join as a Provider</Link>
            <Link to="/apply" className="btn btn-secondary btn-lg">Apply as a Client</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
