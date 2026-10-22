import { Award, GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certifications, education } from '../data/portfolio';
export default function Education() {
  return <section className="section-shell content-section" id="education">
    <SectionHeading eyebrow="THE FOUNDATION" title={<>Learning is a<br /><span>continuous process.</span></>} number="05" />
    <div className="education-cert-grid reveal"><div className="education-column"><div className="subsection-title"><GraduationCap size={18}/><h3>Education</h3></div>{education.map(item => <article className="education-card" key={item.degree}><div className="education-card-top"><span>{item.period}</span><span className="education-result">{item.result}</span></div><h4>{item.degree}</h4><p>{item.institution}</p></article>)}</div><div className="cert-column"><div className="subsection-title"><Award size={18}/><h3>Certifications</h3></div><div className="cert-list">{certifications.map((cert, i) => <article className="cert-card" key={cert.name}><span className="cert-index">0{i + 1}</span><div><h4>{cert.name}</h4><p>{cert.issuer}</p></div><Award size={17} className="cert-icon"/></article>)}</div></div></div>
  </section>;
}
