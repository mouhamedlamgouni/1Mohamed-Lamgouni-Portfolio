import { ArrowDown, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../data';
import { ContactActions, SocialLinks } from './ContactActions';
import { ui, type Language } from '../translations';

export function Hero({ language }: { language: Language }) {
  const text = ui[language];
  const reduceMotion = useReducedMotion();
  return <section className="hero" id="about" aria-labelledby="hero-title">
    <div className="hero-copy">
      <h1 id="hero-title">{text.heroTitle}<br /><span>{text.heroAccent}</span></h1>
      <div className="intro"><p className="intro-name">{text.introName}</p><p>{text.intro}</p></div>
      <ContactActions resume language={language} />
      <SocialLinks language={language} />
    </div>
    <motion.figure className="portrait" initial={false} animate={reduceMotion ? {} : { y: [8, 0] }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}>
      <div className="portrait-image"><img src={profile.portrait} alt="Portrait of Mohamed Lamgouni" width="800" height="1300" fetchPriority="high" /></div>
      <figcaption><div><span>Mohamed Lamgouni</span><span>{text.role}</span></div><span className="portrait-mark" aria-hidden="true">ml.</span></figcaption>
    </motion.figure>
    <div className="hero-bottom"><span><MapPin size={14} />{profile.location}</span>{profile.available && <span className="mobile-availability"><span className="status-dot" />{text.available}</span>}<a href="#projects">{text.explore}<ArrowDown size={16} /></a><span className="hero-note">{text.heroNote}</span></div>
  </section>;
}
