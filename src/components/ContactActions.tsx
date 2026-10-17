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
  return <div className="social-links" aria-label={text.socialProfiles}>{profile.socials.map(social => social.url
    ? <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer">{social.label}<ArrowUpRight size={13} /></a>
    : <span key={social.label} className="social-pending" title={`${social.label} ${text.linkPending}`}>
      {social.label}<span className="sr-only"> — {text.linkPending}</span>
    </span>
  )}</div>;
}
