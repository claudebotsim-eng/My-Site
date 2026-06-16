import { Link } from 'react-router-dom'
import GrowthIllustration from '../components/GrowthIllustration'
import ScrollReveal from '../components/ScrollReveal'
import { LeafDecorLeft, LeafDecorRight, SeedDivider } from '../components/LeafDecor'
import SEO from '../components/SEO'
import './Home.css'

const pillars = [
  {
    icon: '💰',
    tag: 'Financial Assistance',
    title: 'Remove the Cost Barrier',
    desc: 'Quality behavioral health and alternative medicine care can be expensive. We provide direct financial assistance so that cost doesn\'t determine who gets to heal.',
    link: '/programs',
    color: 'blue',
  },
  {
    icon: '📚',
    tag: 'Education',
    title: 'Inform Before You Decide',
    desc: 'Evidence-based education on therapeutic modalities, behavioral health approaches, and alternative medicine options — so people can make informed, confident decisions about their care.',
    link: '/programs',
    color: 'green',
  },
  {
    icon: '🤝',
    tag: 'Professional Network',
    title: 'Connect with the Right Provider',
    desc: 'A curated network of credentialed therapists, counselors, and alternative medicine practitioners committed to accessible, trauma-informed, whole-person care.',
    link: '/providers',
    color: 'teal',
  },
]

const testimonials = [
  {
    quote: 'I had been looking for a specialist for over a year. Bridging Wellness connected me with the right provider and helped me cover the cost. It changed everything.',
    name: 'Client',
    context: 'Behavioral health support',
  },
  {
    quote: 'Joining the provider network was straightforward and the referrals have been quality. These are clients who are ready, motivated, and well matched.',
    name: 'Licensed Therapist',
    context: 'Network Provider',
  },
  {
    quote: 'I didn\'t think I could afford the kind of care I actually needed. The application was simple and everyone treated me with real dignity.',
    name: 'Client',
    context: 'Alternative medicine & counseling',
  },
]

export default function Home() {
  return (
    <div className="home">
      <SEO path="/" />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <ScrollReveal direction="left">
              <span className="section-label">Illinois Nonprofit · 501(c)(3)</span>
              <h1>Healing Shouldn't Be<br /><em>Out of Reach</em></h1>
              <p>Quality therapeutic, behavioral health, and alternative medicine care makes a real difference — but cost and access keep too many people from getting it. We exist to change that.</p>
              <div className="hero-actions">
                <Link to="/apply" className="btn btn-primary btn-lg">Apply for Assistance</Link>
                <Link to="/programs" className="btn btn-secondary btn-lg">Learn More</Link>
              </div>
              <div className="hero-trust">
                <span>✓ Illinois Registered Nonprofit</span>
                <span>✓ Vetted Provider Network</span>
                <span>✓ Whole-Person Care</span>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="right" delay={200}>
            <GrowthIllustration />
          </ScrollReveal>
        </div>
      </section>

      {/* VALUES BAR */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {[
              { icon: '🌱', label: 'Financial Assistance', detail: 'For those who qualify' },
              { icon: '📋', label: 'Vetted Provider Network', detail: 'Credentialed & matched' },
              { icon: '📚', label: 'Evidence-Based Education', detail: 'Informed decisions' },
              { icon: '🤝', label: 'Whole-Person Care', detail: 'Mind, body & spirit' },
            ].map((s, i) => (
              <ScrollReveal key={s.label} direction="up" delay={i * 80}>
                <div className="stat-item">
                  <span className="stat-number" style={{fontSize:'2rem'}}>{s.icon}</span>
                  <span className="stat-label">{s.label}</span>
                  <span className="stat-detail">{s.detail}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="section" style={{position:'relative'}}>
        <LeafDecorLeft />
        <LeafDecorRight />
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-header center">
              <span className="section-label">What We Do</span>
              <h2 className="section-title">Three Ways We Bridge the Gap</h2>
              <p className="section-subtitle">From financial barriers to information gaps to finding the right provider — we address the obstacles that keep people from the care they need.</p>
            </div>
          </ScrollReveal>
          <div className="grid-3">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.tag} direction="up" delay={i * 120}>
                <div className={`pillar-card card color-${p.color}`}>
                  <div className="pillar-icon">{p.icon}</div>
                  <span className={`tag tag-${p.color === 'blue' ? 'blue' : 'green'}`}>{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <Link to={p.link} className="pillar-link">Learn more →</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SeedDivider />

      {/* AUDIENCE PATHS */}
      <section className="section section-alt" style={{position:'relative'}}>
        <LeafDecorRight opacity={0.04} />
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-header center">
              <span className="section-label">Who We Serve</span>
              <h2 className="section-title">Find Your Path Forward</h2>
            </div>
          </ScrollReveal>
          <div className="paths-grid">
            {[
              {
                cls:'path-client', icon:'🙋', title:"I'm Seeking Support",
                desc:"Looking for therapy, behavioral health care, or alternative medicine support but facing cost or access barriers? We're here to help.",
                items:['Financial assistance applications','Provider matching & referrals','Education & wellness resources','Ongoing support navigation'],
                btn:<Link to="/apply" className="btn btn-primary">Apply for Assistance</Link>
              },
              {
                cls:'path-provider', icon:'🩺', title:"I'm a Provider",
                desc:"Licensed therapist, counselor, or alternative medicine practitioner? Join our network and connect with clients actively seeking your specialty.",
                items:['Join the referral network','Professional development resources','Clinical consultation access','Community of practice'],
                btn:<Link to="/providers" className="btn btn-green">Join the Network</Link>
              },
              {
                cls:'path-donor', icon:'❤️', title:"I Want to Help",
                desc:"Every contribution directly removes a financial barrier between someone who needs care and the provider who can help them.",
                items:['Direct client assistance funding','Education program support','Full financial transparency','Tax-deductible contributions'],
                btn:<Link to="/donate" className="btn btn-secondary">Make a Donation</Link>
              },
            ].map((p, i) => (
              <ScrollReveal key={p.title} direction="up" delay={i * 100}>
                <div className={`path-card ${p.cls}`}>
                  <div className="path-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <ul>{p.items.map(item => <li key={item}>{item}</li>)}</ul>
                  {p.btn}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SeedDivider />

      {/* HOW IT WORKS */}
      <section className="section" style={{position:'relative'}}>
        <LeafDecorLeft opacity={0.04} />
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-header center">
              <span className="section-label">The Process</span>
              <h2 className="section-title">How It Works</h2>
              <p className="section-subtitle">A clear, supported path from first contact to care — we walk with you every step of the way.</p>
            </div>
          </ScrollReveal>
          <div className="steps">
            {[
              { n: '01', title: 'Reach Out', desc: 'Complete our simple application or send us a message. No judgment, no pressure — just a first step.' },
              { n: '02', title: 'Assessment', desc: 'We review your situation, goals, and needs to understand how we can best support your path to care.' },
              { n: '03', title: 'Provider Match', desc: 'We connect you with a vetted, credentialed provider whose specialty and approach align with your needs.' },
              { n: '04', title: 'Financial Planning', desc: 'We determine assistance eligibility and help bridge the gap between the cost of care and what you can afford.' },
              { n: '05', title: 'Ongoing Support', desc: 'We stay connected throughout your journey and help connect you with additional resources as needed.' },
            ].map((s, i) => (
              <ScrollReveal key={s.n} direction="left" delay={i * 80}>
                <div className="step">
                  <div className="step-num">{s.n}</div>
                  <div className="step-content">
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SeedDivider />

      {/* TESTIMONIALS */}
      <section className="section section-alt" style={{position:'relative'}}>
        <LeafDecorLeft opacity={0.05} />
        <LeafDecorRight opacity={0.05} />
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-header center">
              <span className="section-label">Voices</span>
              <h2 className="section-title">What People Say</h2>
            </div>
          </ScrollReveal>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.context} direction="up" delay={i * 120}>
                <div className="testimonial card">
                  <span className="quote-mark">"</span>
                  <p className="quote-text">{t.quote}</p>
                  <div className="quote-author">
                    <strong>{t.name}</strong>
                    <span>{t.context}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <ScrollReveal direction="left">
            <div>
              <h2>Ready to Take the First Step?</h2>
              <p>Whether you're seeking help, want to refer a client, or want to fund access — we're here.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={150}>
            <div className="cta-actions">
              <Link to="/apply" className="btn btn-white btn-lg">Apply for Assistance</Link>
              <Link to="/contact" className="btn btn-lg" style={{color:'white', border:'2px solid rgba(255,255,255,0.5)'}}>Get in Touch</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
