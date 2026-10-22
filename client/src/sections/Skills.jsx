import { Code2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { skillGroups } from '../data/portfolio';
export default function Skills() {
  return <section className="section-shell content-section skills-section" id="skills">
    <SectionHeading eyebrow="MY TOOLKIT" title={<>Tools for turning<br /><span>ideas into reality.</span></>} description="A practical mix of frontend, backend, product, and AI-assisted engineering tools." number="02" />
    <div className="skills-grid reveal">{skillGroups.map((group, index) => <article className={`skill-card skill-card-${index + 1}`} key={group.title}><div className="skill-card-top"><span className="skill-icon"><Code2 size={17} /></span><span className="mono-index">0{index + 1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div>
  </section>;
}
