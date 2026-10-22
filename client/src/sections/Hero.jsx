import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';
import Orb from '../components/Orb';
import { profile } from '../data/portfolio';

export default function Hero() {
  return <section className="hero section-shell" id="home">
    <div className="hero-copy">
      <motion.div className="availability" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}><span className="status-pulse" /> FULL-STACK DEVELOPER <span className="availability-divider">/</span> INDIA</motion.div>
      <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2 }}>
        Building digital<br />experiences that <em>move.</em>
      </motion.h1>
      <motion.p className="hero-description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        I’m <strong>{profile.name}</strong> — a full-stack developer focused on scalable web applications, thoughtful interfaces, and expressive motion.
      </motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
        <a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={17} /></a>
        <a className="button button-secondary" href="/resume/Abhinav-Chauhan-Resume.pdf" download>Download resume <Download size={16} /></a>
      </motion.div>
      <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href={`mailto:${profile.email}`}>{profile.email}</a>
      </motion.div>
    </div>
    <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.25 }}>
      <div className="art-label art-label-top"><span>CREATIVE ENGINEERING</span><span>01 / 04</span></div>
      <Orb />
      <div className="art-caption"><span className="caption-line" /><span>Turning ideas into<br />interactive experiences.</span><ArrowDownRight size={18} /></div>
      <div className="orbit-tag orbit-tag-a">REACT / NODE</div><div className="orbit-tag orbit-tag-b">MOTION + CODE</div>
    </motion.div>
    <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><div className="scroll-line"><span /></div><span>29° 58' N — 78° 08' E</span></div>
  </section>;
}
