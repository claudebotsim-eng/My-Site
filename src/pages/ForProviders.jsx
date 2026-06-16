import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function ForProviders() {
  return (
    <div><SEO title="For Providers" description="Join the Bridging Wellness provider network. Connect with clients seeking therapeutic and alternative medicine care." path="/providers" />
      <section className="page-hero">
        <div className="container">
          <span className="section-label" style={{color:'rgba(255,255,255,0.7)'}}>For Clinicians & Practitioners</span>
          <h1>Join Our Provider Network</h1>
          <p>Connect with clients actively seeking your specialty. Access professional development resources and a community of practitioners committed to accessible, whole-person care.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div><SEO title="For Providers" description="Join the Bridging Wellness provider network. Connect with clients seeking therapeutic and alternative medicine care." path="/providers" />
              <span className="section-label">Why Join</span>
              <h2 className="section-title">What the Network Offers</h2>
              <p style={{color:'#6a5f55', lineHeight:'1.8', marginBottom:'28px'}}>Bridging Wellness maintains a vetted directory of licensed therapists, counselors, and alternative medicine practitioners who are committed to quality, ethical, and accessible care. When clients apply to us for assistance, we match them to providers in our network based on specialty, approach, and fit.</p>
              <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
                {[
                  {icon:'👥', title:'Qualified Client Referrals', body:'Clients who apply to Bridging Wellness are screened and motivated. We refer to providers in our network whose specialties match client needs.'},
                  {icon:'📖', title:'Professional Development', body:'Access to continuing education opportunities, training resources, and clinical skill-building relevant to your specialty and the clients we serve.'},
                  {icon:'🤝', title:'Peer Consultation', body:'Connect with other practitioners for case consultation, clinical support, and a collaborative community of practice.'},
                  {icon:'📣', title:'Network Visibility', body:'Be listed in our provider directory, visible to clients, referring practitioners, and partner organizations seeking specialized care.'},
                ].map(b => (
                  <div key={b.title} style={{display:'flex', gap:'16px', padding:'20px', background:'#faf7f2', borderRadius:'12px', border:'1px solid #e4ddd5'}}>
                    <span style={{fontSize:'1.6rem', flexShrink:0}}>{b.icon}</span>
                    <div><SEO title="For Providers" description="Join the Bridging Wellness provider network. Connect with clients seeking therapeutic and alternative medicine care." path="/providers" />
                      <strong style={{display:'block', fontSize:'0.95rem', marginBottom:'4px', color:'#2c2416'}}>{b.title}</strong>
                      <p style={{fontSize:'0.88rem', color:'#6a5f55', lineHeight:'1.6'}}>{b.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div><SEO title="For Providers" description="Join the Bridging Wellness provider network. Connect with clients seeking therapeutic and alternative medicine care." path="/providers" />
              <div style={{background:'linear-gradient(135deg, #eaf0eb, #f5f0e8)', borderRadius:'24px', padding:'40px', marginBottom:'24px', border:'1px solid #d6e4d8'}}>
                <h3 style={{fontSize:'1.3rem', marginBottom:'20px', color:'#2c2416'}}>Who Can Join</h3>
                {[
                  'Licensed therapists & counselors (LCPC, LCSW, Psychologist, LPC, MFT)',
                  'Physicians & nurse practitioners with behavioral health focus',
                  'Alternative & integrative medicine practitioners',
                  'Somatic, body-based, and mindfulness practitioners',
                  'Hypnotherapists with clinical training',
                  'Commitment to trauma-informed, whole-person care',
                  'Willingness to work with financially assisted clients',
                ].map(r => (
                  <div key={r} style={{padding:'10px 0', borderBottom:'1px solid rgba(94,140,106,0.15)', fontSize:'0.9rem', color:'#4a4038', paddingLeft:'22px', position:'relative'}}>
                    <span style={{position:'absolute', left:0, color:'#5e8c6a', fontWeight:'bold'}}>✓</span>{r}
                  </div>
                ))}
              </div>
              <div className="card">
                <h3 style={{fontSize:'1.1rem', marginBottom:'12px'}}>Ready to Join?</h3>
                <p style={{fontSize:'0.9rem', color:'#6a5f55', marginBottom:'20px', lineHeight:'1.7'}}>Complete our provider inquiry form. We review each submission and follow up within 5 business days.</p>
                <Link to="/contact" className="btn btn-green" style={{width:'100%', justifyContent:'center'}}>Apply to Join the Network</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">What We Believe About Care</h2>
            <p className="section-subtitle">The providers in our network share a common set of values that guide how we work with clients.</p>
          </div>
          <div className="grid-3">
            {[
              {icon:'🌿', title:'Whole-Person Care', body:'Effective care addresses the full person — not just symptoms. We prioritize providers who integrate mind, body, and behavioral health in their practice.'},
              {icon:'🔓', title:'Accessibility Matters', body:'Quality care should not be determined by income. Providers in our network are committed to working with clients across financial circumstances.'},
              {icon:'🛡️', title:'Trauma-Informed Practice', body:'We vet for providers who approach care with sensitivity to trauma, cultural context, and the full complexity of a person\'s history and needs.'},
            ].map(v => (
              <div className="card" key={v.title} style={{textAlign:'center', padding:'40px 32px'}}>
                <div style={{fontSize:'2.4rem', marginBottom:'16px'}}>{v.icon}</div>
                <h3 style={{fontSize:'1.15rem', marginBottom:'12px'}}>{v.title}</h3>
                <p style={{fontSize:'0.92rem', color:'#6a5f55', lineHeight:'1.7'}}>{v.body}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:'48px'}}>
            <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch to Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
