import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/portfolio';

const links = [['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'], ['Projects', '#projects'], ['Education', '#education']];
export default function NavBar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a className="brand" href="#home" aria-label="Abhinav Chauhan home"><span className="brand-mark">A<span>.</span></span><span className="brand-name">ABHINAV<br /><small>CHAUHAN</small></span></a>
    <nav className={open ? 'nav-links nav-open' : 'nav-links'} id="main-navigation" aria-label="Main navigation">
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={15} /></a>
    </nav>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="main-navigation">{open ? <X /> : <Menu />}</button>
  </header>;
}
