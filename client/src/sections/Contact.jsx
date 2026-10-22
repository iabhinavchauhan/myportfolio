import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Code2, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/portfolio';

const API_BASE = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const onSubmit = async values => {
    setStatus({ state: 'loading', message: 'Sending your message…' });
    try {
const response = await fetch(`${API_BASE}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
const data = await response.json().catch(() => ({}));
if (!response.ok || !data.success) throw new Error(data.message || 'Unable to send your message. Please try again later.');
setStatus({ state: 'success', message: data.message || 'Message submitted successfully.' }); reset();
    } catch (error) {
      setStatus({ state: 'error', message: error.message || 'Could not connect to the email service. Please try again later.' });
    }
  };
  return <section className="section-shell content-section contact-section" id="contact">
    <SectionHeading eyebrow="HAVE SOMETHING IN MIND?" title={<>Let's make something<br /><span>meaningful together.</span></>} description="Have an opportunity, a project, or just want to say hello? My inbox is open." number="06" />
    <div className="contact-grid reveal"><div className="contact-info"><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={20}/></a><div className="contact-detail"><MapPin size={17}/><span>{profile.location}</span></div><div className="contact-detail"><Mail size={17}/><a href={`mailto:${profile.email}`}>Email me directly</a></div><div className="contact-socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a><a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2/></a></div><div className="contact-note"><span className="status-pulse"/> A good conversation can start anywhere.</div></div>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-row"><label>Your name<input {...register('name', { required: 'Please enter your name.', maxLength: { value: 100, message: 'Name is too long.' } })} placeholder="Jane Smith" autoComplete="name" />{errors.name && <small>{errors.name.message}</small>}</label><label>Your email<input {...register('email', { required: 'Please enter your email.', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address.' } })} placeholder="jane@company.com" autoComplete="email" />{errors.email && <small>{errors.email.message}</small>}</label></div>
        <label>Phone number<input {...register('phone', { pattern: { value: /^[+()\-\s\d]{7,20}$/, message: 'Enter a valid phone number.' }, maxLength: { value: 20, message: 'Phone number is too long.' } })} placeholder="+91 98765 43210" autoComplete="tel" />{errors.phone && <small>{errors.phone.message}</small>}</label>
        <label>Subject<input {...register('subject', { required: 'Please add a subject.', maxLength: { value: 160, message: 'Subject is too long.' } })} placeholder="What would you like to discuss?" />{errors.subject && <small>{errors.subject.message}</small>}</label>
        <label>Your message<textarea {...register('message', { required: 'Please write a message.', minLength: { value: 10, message: 'Please write at least 10 characters.' }, maxLength: { value: 5000, message: 'Message is too long.' } })} placeholder="Tell me a little about it…" rows="4" />{errors.message && <small>{errors.message.message}</small>}</label>
        <label className="honeypot" aria-hidden="true">Leave this field empty<input tabIndex="-1" autoComplete="off" {...register('website')} /></label>
        <div className="form-bottom"><button className="button button-primary" type="submit" disabled={status.state === 'loading'}>{status.state === 'loading' ? 'Sending…' : 'Send message'} <Send size={15}/></button><span>Your message goes straight to my inbox.</span></div>
        {status.state !== 'idle' && <p className={`form-status status-${status.state}`} role="status">{status.state === 'success' && <CheckCircle2 size={16}/>} {status.message}</p>}
      </form>
    </div>
  </section>;
}
