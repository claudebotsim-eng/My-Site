import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <div className="about"><SEO title="About Us" description="Learn about Bridging Wellness, our mission, founder David Gray LCPC, and our Illinois nonprofit structure." path="/about" />
      <section className="page-hero">
        <div className="container">
          <span className="section-label" style={{color:'rgba(255,255,255,0.7)'}}>Our Story</span>
          <h1>About Bridging Wellness</h1>
          <p>An Illinois nonprofit built on the belief that effective mental health and wellness care should be available to everyone — not just those who can afford it.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <span className="section-label">Our Mission</span>
            <h2 className="section-title">Why We Exist</h2>
            <p style={{color:'#6a5f55', lineHeight:'1.8', marginBottom:'20px'}}>Access to quality therapeutic, behavioral health, and alternative medicine care is uneven. Cost, geography, stigma, and a fragmented system leave too many people without the support they need — not because effective care doesn't exist, but because they can't reach it.</p>
            <p style={{color:'#6a5f55', lineHeight:'1.8', marginBottom:'20px'}}>Bridging Wellness exists to close that gap. We provide financial assistance to qualifying individuals, connect people to vetted providers, and offer evidence-based education so that informed, empowered decisions about care are possible regardless of income or circumstance.</p>
            <p style={{color:'#6a5f55', lineHeight:'1.8'}}>We believe healing is a right, not a privilege. Our work is built on that foundation.</p>
          </div>
          <div className="mission-visual">
            <div className="mission-card">
              <span>🌉</span>
              <h3>"Bridging the gap between people who need care and the support that can help them heal."</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Who We Are</h2>
          </div>
          <div className="founder-card card">
            <div className="founder-content">
              <div className="founder-avatar">DG</div>
              <div>
                <h3>David Gray, LCPC</h3>
                <p className="founder-title">President & Founder</p>
                <p>David Gray is a Licensed Clinical Professional Counselor (LCPC) in the State of Illinois with over 10 years of clinical experience specializing in hypnotherapy and mindfulness-based interventions. He holds two master's degrees — in Psychology and Counseling — and is a doctoral candidate completing research on the therapeutic alliance.</p>
                <br />
                <p>David trained with the American Society of Clinical Hypnosis (ASCH) and operates Gray Matter Therapy, a private practice in Illinois. His clinical background grounds Bridging Wellness in real-world practice — in an understanding of what clients actually face, what providers need, and where the system falls short.</p>
                <br />
                <p>He founded Bridging Wellness to formalize what he had observed for years in clinical work: that the people who need care the most are often the least able to access it, and that the gap between need and access is bridgeable with the right support structures.</p>
                <div className="founder-links">
                  <a href="https://graymattertherapy.net" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{fontSize:'0.88rem', padding:'10px 18px'}}>Gray Matter Therapy →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Transparency</span>
            <h2 className="section-title">Our Structure</h2>
          </div>
          <div className="grid-3">
            {[
              { icon: '📋', title: 'Legal Status', body: 'Bridging Wellness is a registered nonprofit corporation in the State of Illinois. We operate under board governance and comply with all applicable state and federal nonprofit regulations.' },
              { icon: '🏛️', title: 'Governance', body: 'We are led by a board of directors. We are actively seeking qualified individuals to serve as Vice President and Treasurer as we grow our governance and operational capacity.' },
              { icon: '💼', title: 'Financials', body: 'We are committed to full financial transparency. Contributions are used directly for client financial assistance, educational programming, and organizational operations.' },
            ].map(c => (
              <div className="card" key={c.title}>
                <div style={{fontSize:'2rem', marginBottom:'16px'}}>{c.icon}</div>
                <h3 style={{fontSize:'1.15rem', marginBottom:'10px'}}>{c.title}</h3>
                <p style={{fontSize:'0.92rem', color:'#6a5f55', lineHeight:'1.7'}}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="section-title">Get Involved</h2>
          <p className="section-subtitle" style={{margin:'0 auto 36px'}}>Whether you need help, want to provide it, or want to fund it — there's a place for you here.</p>
          <div style={{display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap'}}>
            <Link to="/apply" className="btn btn-primary btn-lg">Apply for Assistance</Link>
            <Link to="/donate" className="btn btn-green btn-lg">Make a Donation</Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
