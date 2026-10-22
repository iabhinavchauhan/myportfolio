import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/portfolio';
export default function Experience() {
  return <section className="section-shell content-section" id="experience">
    <SectionHeading eyebrow="WHERE I'VE WORKED" title={<>Experience that<br /><span>keeps me learning.</span></>} description="Professional experience across frontend development and business operations." number="03" />
    <div className="experience-list reveal">{experiences.map((item, index) => <article className="experience-item" key={item.company}><div className="experience-index"><span>0{index + 1}</span><div className="experience-rail" /></div><div className="experience-main"><div className="experience-top"><div><p className="eyebrow">{item.period}</p><h3>{item.role}</h3><p className="company-line"><BriefcaseBusiness size={15} /> {item.company} <span>/</span> {item.location}</p></div><span className="experience-tag">{item.tag}</span></div><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
  </section>;
}
