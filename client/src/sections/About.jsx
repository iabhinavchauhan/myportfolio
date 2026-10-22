import { ArrowUpRight, Code2, Layers3, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/portfolio';

const highlights = [
  { icon: Code2, value: '5+', label: 'Production-grade apps' },
  { icon: Layers3, value: 'MERN', label: 'Full-stack toolkit' },
  { icon: Sparkles, value: '30%', label: 'Efficiency improvement*' }
];
export default function About() {
  return <section className="section-shell content-section" id="about">
    <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Code with purpose.<br /><span>Built for people.</span></>} number="01" />
    <div className="about-grid reveal">
      <div className="about-lead"><p className="large-copy">I build useful digital products with a balance of <span>engineering discipline</span> and <span>creative curiosity.</span></p><a className="text-link" href={`mailto:${profile.email}`}>Let’s work together <ArrowUpRight size={16} /></a></div>
      <div className="about-body"><p>{profile.summary}</p><p>From responsive frontends to full-stack applications, I enjoy turning complex requirements into clear, maintainable experiences. I’m especially interested in interaction design, motion, and AI-assisted development workflows.</p><div className="about-location"><span className="location-dot" /> Based in {profile.location}</div></div>
    </div>
    <div className="highlight-grid reveal">{highlights.map(({ icon: Icon, value, label }) => <div className="highlight-card" key={label}><Icon size={19} /><strong>{value}</strong><span>{label}</span></div>)}</div>
    <p className="micro-note">*Efficiency improvement reported in resume.</p>
  </section>;
}
