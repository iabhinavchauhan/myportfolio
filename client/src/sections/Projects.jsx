import { useState } from 'react';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolio';

function ProjectVisual({ type }) {
  return <div className={`project-visual visual-${type}`} aria-hidden="true">
    {type === 'mountain' && <><div className="mountain-sun" /><div className="mountain-shape mountain-back" /><div className="mountain-shape mountain-front" /><div className="visual-stamp">STAY<br />SLOW.</div></>}
    {type === 'vypax' && <><div className="vypax-orbit orbit-1" /><div className="vypax-orbit orbit-2" /><div className="vypax-core">V<span>.</span></div><span className="visual-grid-label">TECHNOLOGY FOR WHAT'S NEXT</span></>}
    {type === 'cloud' && <><div className="cloud-window"><div className="window-dots"><i/><i/><i/></div><div className="cloud-files"><b/><b/><b/><b/><b/><b/></div><div className="cloud-progress"><span/></div></div><div className="cloud-glow" /></>}
    {type === 'motion' && <><div className="motion-type">K72<span>®</span></div><div className="motion-block block-a"/><div className="motion-block block-b"/><div className="motion-line"/><span className="motion-caption">DESIGN IN MOTION</span></>}
    <span className="visual-index">PROJECT / {type.toUpperCase()}</span>
  </div>;
}
export default function Projects() {
  const [active, setActive] = useState(null);
  return <section className="section-shell content-section projects-section" id="projects">
    <SectionHeading eyebrow="SELECTED WORK" title={<>A few things I've<br /><span>put into the world.</span></>} description="A selection of projects spanning full-stack development, business platforms, and motion-led interfaces." number="04" />
    <div className="projects-grid reveal">{projects.map((project, index) => <motion.article className={`project-card project-card-${index + 1}`} key={project.number} whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
      <button className="project-visual-button" onClick={() => setActive(project)} aria-label={`View details for ${project.title}`}><ProjectVisual type={project.visual} /></button>
      <div className="project-card-meta"><span>{project.category}</span><span>{project.number} / 04</span></div>
      <div className="project-card-heading"><div><h3>{project.title}</h3><p>{project.subtitle}</p></div><button className="round-arrow" onClick={() => setActive(project)} aria-label={`View ${project.title} details`}><ArrowUpRight size={19}/></button></div>
      <div className="project-stack">{project.stack.slice(0, 5).map(tag => <span key={tag}>{tag}</span>)}{project.stack.length > 5 && <span>+{project.stack.length - 5}</span>}</div>
      {project.live && <a className="project-live-link" href={project.live} target="_blank" rel="noreferrer">Visit live site <ExternalLink size={13}/></a>}
    </motion.article>)}</div>
    <AnimatePresence>{active && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={e => e.target === e.currentTarget && setActive(null)}><motion.div className="project-modal" role="dialog" aria-modal="true" aria-label={`${active.title} details`} initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }}><button className="modal-close" onClick={() => setActive(null)} aria-label="Close project details"><X/></button><p className="eyebrow">{active.category}</p><h3>{active.title}</h3><p className="modal-subtitle">{active.subtitle}</p><p className="modal-description">{active.description}</p><h4>TECH STACK</h4><div className="skill-tags modal-tags">{active.stack.map(tag => <span key={tag}>{tag}</span>)}</div>{active.live && <a className="button button-primary modal-link" href={active.live} target="_blank" rel="noreferrer">Visit live project <ArrowUpRight size={16}/></a>}</motion.div></motion.div>}</AnimatePresence>
  </section>;
}
