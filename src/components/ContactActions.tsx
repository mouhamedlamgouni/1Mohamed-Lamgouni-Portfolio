import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { profile } from '../data';
import { ui, type Language } from '../translations';

export function ContactActions({ resume = false, language }: { resume?: boolean; language: Language }) {
  const text = ui[language];
  return <div className="contact-actions">
    {resume && <a className="button button-primary" href={profile.resume} download><Download size={17} />{text.downloadCv}</a>}
    {!resume && profile.email && <a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={17} />{text.contact}<ArrowUpRight size={17} /></a>}
  </div>;
}

export function SocialLinks({ language }: { language: Language }) {
  const text = ui[language];
  return <div className="social-links" aria-label={text.socialProfiles}>{profile.socials.map(social => {
    const icon = <span className="social-icon" aria-hidden="true">
      {social.label === 'LinkedIn'
        ? <svg viewBox="0 0 24 24" focusable="false"><path d="M5.4 8.2H2.2V21h3.2V8.2ZM3.8 6.45a1.85 1.85 0 1 0 0-3.7 1.85 1.85 0 0 0 0 3.7ZM21.8 13.65c0-3.85-2.05-5.65-4.78-5.65a4.13 4.13 0 0 0-3.72 2.05V8.2h-3.2V21h3.2v-6.35c0-1.67.32-3.29 2.39-3.29 2.04 0 2.07 1.92 2.07 3.4V21H21v-7.35h.8Z" /></svg>
        : <svg viewBox="0 0 24 24" focusable="false"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.59 1.21 3.22.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.43-2.22 1.15-3.01-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.15a10.62 10.62 0 0 1 5.56 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.79 1.15 1.79 1.15 3.01 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" /></svg>}
    </span>;
    return social.url
      ? <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer">{icon}{social.label}<ArrowUpRight size={13} aria-hidden="true" /></a>
      : <span key={social.label} className="social-pending" title={`${social.label} ${text.linkPending}`}>
        {icon}{social.label}<span className="sr-only"> — {text.linkPending}</span>
      </span>;
  })}</div>;
}
