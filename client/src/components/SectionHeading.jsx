export default function SectionHeading({ eyebrow, title, description, number }) {
  return <div className="section-heading reveal">
    <div><p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div>
    {number && <span className="section-number">{number}</span>}
  </div>;
}
