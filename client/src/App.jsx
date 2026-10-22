import { useEffect } from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavBar from './components/NavBar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import { profile } from './data/portfolio';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);
export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.fromTo(element, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
      });
    });
    return () => { ctx.revert(); ScrollTrigger.getAll().forEach(trigger => trigger.kill()); };
  }, []);
  return <><div className="ambient ambient-one"/><div className="ambient ambient-two"/><NavBar/><main><Hero/><div className="section-divider"/><About/><div className="section-divider"/><Skills/><div className="section-divider"/><Experience/><div className="section-divider"/><Projects/><div className="section-divider"/><Education/><div className="section-divider"/><Contact/></main><footer className="site-footer section-shell"><a className="brand footer-brand" href="#home"><span className="brand-mark">A<span>.</span></span><span className="brand-name">ABHINAV<br/><small>CHAUHAN</small></span></a><p>Designed with intent. Built with code.</p><div className="footer-right"><span>© {new Date().getFullYear()} {profile.name}</span><a href="#home" aria-label="Back to top"><ArrowUp size={16}/></a></div></footer><a className="floating-contact" href="#contact" aria-label="Contact Abhinav"><span>LET'S TALK</span><ArrowUpRight size={16}/></a></>;
}
