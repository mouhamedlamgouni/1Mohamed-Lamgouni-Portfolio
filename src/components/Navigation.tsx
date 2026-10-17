import { Moon, Sun, ArrowUpRight } from 'lucide-react';
import { profile } from '../data';
import { ui, type Language } from '../translations';

export function Navigation({ theme, toggleTheme, language, setLanguage }: { theme: string; toggleTheme: () => void; language: Language; setLanguage: (language: Language) => void }) {
  const text = ui[language];
  return <header className="nav-wrap">
    <nav className="navigation" aria-label={text.navigation}>
      <a className="signature" href="#about" aria-label="Mohamed Lamgouni, back to top">ml<span>.</span></a>
      <div className="nav-links"><a href="#about">{text.about}</a><a href="#projects">{text.projects}</a><a href="#contact">{text.contact} <ArrowUpRight size={13} /></a></div>
      <div className="nav-end">
        {profile.available && <span className="availability"><span className="status-dot" />{text.available}</span>}
        <div className="language-switch" role="group" aria-label={text.languageLabel}>
          <button type="button" className="language-option" aria-pressed={language === 'fr'} aria-label={text.french} onClick={() => setLanguage('fr')}>FR</button>
          <button type="button" className="language-option" aria-pressed={language === 'en'} aria-label={text.english} onClick={() => setLanguage('en')}>EN</button>
        </div>
        <button className="icon-button" onClick={toggleTheme} aria-label={theme === 'dark' ? text.switchToLight : text.switchToDark}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  </header>;
}
