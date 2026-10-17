import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, ImagePlus, Pause, Play, X } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { projects, type Project } from '../data';
import { projectTranslations, ui, type Language } from '../translations';

function localizeProject(project: Project, language: Language): Project {
  if (language === 'en') return project;
  const translation = projectTranslations.fr[project.id];
  if (!translation) return project;
  return {
    ...project,
    ...translation,
    slides: project.slides?.map((slide, index) => ({ ...slide, alt: translation.slideAlts[index] ?? slide.alt })),
  };
}

function ProjectCarousel({ project, onOpen, language }: { project: Project; onOpen: (project: Project) => void; language: Language }) {
  const text = ui[language];
  const slides = project.slides!;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [activeSlideRatio, setActiveSlideRatio] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  const region = useRef<HTMLDivElement>(null);
  const visible = useInView(region);

  useEffect(() => {
    const activeSlide = slides[active];
    if (!activeSlide) return;
    if (activeSlide.kind === 'video') {
      setActiveSlideRatio(null);
      return;
    }
    if (activeSlide.width && activeSlide.height) {
      setActiveSlideRatio(activeSlide.width / activeSlide.height);
      return;
    }

    const image = new Image();
    image.onload = () => setActiveSlideRatio(image.naturalWidth / image.naturalHeight);
    image.src = activeSlide.src;
  }, [slides, active]);

  useEffect(() => {
    const video = region.current?.querySelector<HTMLVideoElement>('.carousel-video');
    if (!video) return;
    if (slides[active]?.kind === 'video') {
      video.muted = true;
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [slides, active]);

  // Auto-advance only while visible. Hover, keyboard focus and reduced motion stop it.
  useEffect(() => {
    if (paused || hovered || focused || reducedMotion || !visible || slides[active]?.kind === 'video') return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive(current => (current + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, reducedMotion, visible, slides, active]);
  const activeSlideIsVideo = slides[active]?.kind === 'video';
  return <div ref={region} className="project-carousel" role="region" aria-roledescription="carousel" aria-label={`${project.title} ${text.carouselLabel}`}
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <div className="project-cover carousel-cover" style={activeSlideRatio ? { aspectRatio: activeSlideRatio } : undefined}>
      <span className="carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {slides.map((slide, index) => <span key={slide.src} className="carousel-slide" aria-hidden={index !== active}>
          {slide.kind === 'video' ? <video className="carousel-video" controls muted playsInline preload="none" poster={slide.poster} aria-label={slide.alt} onLoadedMetadata={event => {
            const video = event.currentTarget;
            if (index === active && video.videoWidth && video.videoHeight) setActiveSlideRatio(video.videoWidth / video.videoHeight);
          }}><source src={slide.src} type="video/mp4" />{text.videoUnsupported}</video> : <button className="carousel-image-button" onClick={() => onOpen(project)} aria-label={`${text.viewProject}: ${project.title}`}><img src={slide.src} alt={slide.alt} loading="lazy" width={slide.width} height={slide.height} /><span className="cover-arrow"><ArrowUpRight size={22} /></span></button>}
        </span>)}
      </span>
    </div>
    <div className="carousel-controls">
      <span className="carousel-count" aria-live="off">{active + 1} / {slides.length}</span>
      <div className="carousel-dots">{slides.map((slide, index) => <button key={slide.src} aria-label={`${text.showImage} ${index + 1}: ${project.title}`} aria-pressed={active === index} onClick={() => { setActive(index); setPaused(true); }}><span /></button>)}</div>
      <button className="carousel-toggle" aria-label={activeSlideIsVideo ? text.nextSlide : paused || reducedMotion ? text.playSlideshow : text.pauseSlideshow} disabled={!!reducedMotion && !activeSlideIsVideo} onClick={() => activeSlideIsVideo ? setActive(current => (current + 1) % slides.length) : setPaused(current => !current)}>{activeSlideIsVideo ? <ArrowRight size={14} /> : paused || reducedMotion ? <Play size={14} /> : <Pause size={14} />}</button>
    </div>
  </div>;
}

function ProjectCard({ project, onOpen, language }: { project: Project; onOpen: (project: Project) => void; language: Language }) {
  const text = ui[language];
  const reducedMotion = useReducedMotion();
  return <motion.article className={`project-card ${project.tone}`} whileHover={reducedMotion ? {} : { y: -5 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>
    {project.slides?.length ? <ProjectCarousel project={project} onOpen={onOpen} language={language} /> : <button className="project-cover" onClick={() => onOpen(project)} aria-label={`${text.viewProject}: ${project.title}`}>
      {/* PLACEHOLDER: Project assets and case study links */}
      {project.image ? <img src={project.image} alt={`${project.title} project artwork`} loading="lazy" width="960" height="600" /> : <>
        <span className="cover-category">{project.category}</span>
        <span className="cover-wordmark" aria-hidden="true">{project.wordmark}</span>
        <span className="media-placeholder"><ImagePlus size={15} />{text.projectArtwork}</span>
      </>}
      <span className="cover-arrow"><ArrowUpRight size={22} /></span>
    </button>}
    <div className="project-title-row"><h3><button onClick={() => onOpen(project)}>{project.title}</button></h3><span className="project-year">{project.year}</span></div>
    <p>{project.description}</p>
    <ul className="project-tags" aria-label={text.disciplinesLabel}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
  </motion.article>;
}

export function Projects({ language }: { language: Language }) {
  const text = ui[language];
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedBase = projects.find(project => project.id === selectedId);
  const selected = selectedBase ? localizeProject(selectedBase, language) : null;
  const dialog = useRef<HTMLDialogElement>(null);
  // Native dialog provides focus trapping, Escape dismissal, and focus restoration.
  useEffect(() => {
    if (selected && !dialog.current?.open) dialog.current?.showModal();
    if (!selected && dialog.current?.open) dialog.current.close();
  }, [selected]);

  return <section className="projects section" id="projects" aria-labelledby="projects-title">
    <div className="section-heading"><h2 id="projects-title">{text.selectedWork}<span>.</span></h2><p>{text.selectedWorkDescription}<br />{text.selectedWorkDescriptionSecond}</p></div>
    <div className="project-grid">{projects.map(project => <ProjectCard key={project.id} project={localizeProject(project, language)} onOpen={current => setSelectedId(current.id)} language={language} />)}</div>
    <dialog ref={dialog} className="project-dialog" onClose={() => setSelectedId(null)} onClick={event => { if (event.target === event.currentTarget) setSelectedId(null); }} aria-labelledby="dialog-title">
      {selected && <div className="dialog-body"><button className="icon-button dialog-close" onClick={() => setSelectedId(null)} aria-label={text.closeDetails}><X size={22} /></button>
        <h2 id="dialog-title">{selected.title}</h2><p>{selected.description}</p><h3>{text.scope}</h3><ul>{selected.deliverables.map(item => <li key={item}>{item}</li>)}</ul>
        {selected.slides && <div className="dialog-gallery">{selected.slides.filter(slide => slide.kind !== 'video').map(slide => <img key={slide.src} src={slide.src} alt={slide.alt} loading="lazy" width={slide.width} height={slide.height} />)}</div>}
        {selected.video && <video className="dialog-video" controls playsInline preload="none" poster={selected.slides?.find(slide => slide.kind === 'video')?.poster}><source src={selected.video} type="video/mp4" />{text.videoUnsupported}</video>}
        {selected.href ? <a className="button button-primary" href={selected.href} target="_blank" rel="noopener noreferrer">{selected.id === 'lv-manager' ? 'lvmanager.net' : selected.href}<ArrowUpRight size={17} /></a> : <p className="dialog-note">{selected.slides ? text.fullCaseStudy : text.artworkAndCaseStudy}</p>}
      </div>}
    </dialog>
  </section>;
}
