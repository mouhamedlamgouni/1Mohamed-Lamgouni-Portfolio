import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ContactActions, SocialLinks } from './components/ContactActions';
import { profile, tools } from './data';
import { ui, type Language } from './translations';

export default function App() {
  const [theme, setTheme] = useState(document.documentElement.dataset.theme || 'dark');
  const [language, setLanguage] = useState<Language>(() => {
    try { return localStorage.getItem('portfolio-language') === 'fr' ? 'fr' : 'en'; }
    catch { return 'en'; }
  });
  const [localTime, setLocalTime] = useState('');
  const text = ui[language];
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#161b1e' : '#f3f2ed');
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Browsing with storage disabled still supports theme switching. */ }
  }, [theme]);
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'fr'
      ? 'Mohamed Lamgouni — Designer graphique et créatif'
      : 'Mohamed Lamgouni — Graphic & Creative Designer';
    document.querySelector('meta[name="description"]')?.setAttribute('content', language === 'fr'
      ? 'Mohamed Lamgouni, designer graphique et créatif à Kénitra, Maroc. Identité visuelle, packaging et design numérique.'
      : 'Mohamed Lamgouni, a graphic and creative designer based in Kenitra, Morocco. Explore branding, visual identities, packaging and digital design.');
    try { localStorage.setItem('portfolio-language', language); } catch { /* The language switch still works when storage is disabled. */ }
  }, [language]);
  useEffect(() => {
    const update = () => setLocalTime(new Intl.DateTimeFormat('en-GB', { timeZone: profile.timezone, hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }).format(new Date()));
    update(); const interval = setInterval(update, 30000); return () => clearInterval(interval);
  }, []);

  return <>
    <a className="skip-link" href="#main">{text.skip}</a>
    <Navigation theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} language={language} setLanguage={setLanguage} />
    <main id="main" className="page-shell">
      <Hero language={language} /><Projects language={language} />
      <section className="practice section" aria-labelledby="practice-title">
        <div className="practice-intro"><h2 id="practice-title">{text.practiceTitle}<br />{text.practiceTitleSecond}</h2><p>{text.practiceDescription}</p><a href={profile.resume} download className="text-link">{text.background}<ArrowUpRight size={16} /></a></div>
        <div className="practice-details"><h3>{text.whatIWorkOn}</h3><ul className="discipline-list">{text.disciplines.map(item => <li key={item}>{item}<ArrowUpRight size={16} aria-hidden="true" /></li>)}</ul><div className="tool-list"><span>{text.tools}</span><p>{tools.join(' · ')}</p></div></div>
      </section>
      <section className="contact section" id="contact" aria-labelledby="contact-title">
        <div className="contact-top"><h2 id="contact-title">{text.contactTitle}<br />{text.contactTitleSecond}</h2><svg className="contact-big-arrow" viewBox="0 0 180 110" aria-hidden="true"><path d="M96 99c9-22 29-45 77-76-31-6-70-5-111 4 28-2 49 2 69 10-19 15-31 31-35 62Z" /><path d="M39 102c6-17 20-34 58-56-23-5-48-4-78 4 20-1 36 2 51 8-17 12-27 26-31 44Z" /></svg></div>
        <div className="contact-bottom"><p>{text.contactPrompt}<br />{text.contactPromptSecond}</p><ContactActions language={language} /></div>
        {!profile.email && <p className="contact-note">{text.contactNote}</p>}
      </section>
    </main>
    <footer className="footer page-shell"><div><a href="#about" className="footer-name">Mohamed Lamgouni<span>.</span></a><p>{profile.location} <span className="footer-time">{localTime}</span></p></div><SocialLinks language={language} /><p className="copyright">© {new Date().getFullYear()} Mohamed Lamgouni</p></footer>
  </>;
}
