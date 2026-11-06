import React, { useState } from 'react';
import Lightbox from './Lightbox';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Zap, Globe, Lock, Check, Images } from 'lucide-react';
import { projects, socials, type Project } from '../data/site';

/** Lightweight illustrated "browser window" preview, so no stock photos are needed. */
const ProjectVisual: React.FC<{ project: Project; compact?: boolean }> = ({ project, compact }) => {
  const a = project.accent;
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: `radial-gradient(120% 90% at 20% 0%, ${a}30 0%, #0b0f17 60%)` }}>
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className={`absolute ${compact ? 'inset-4' : 'inset-6 sm:inset-10'} rounded-xl overflow-hidden`}
        style={{ background: 'rgba(13,17,23,0.92)', border: `1px solid ${a}35`, boxShadow: `0 20px 60px -20px ${a}55` }}
      >
        <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.06]">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28ca42]" />
          <span className="ml-2 flex-1 truncate rounded-md px-2 py-0.5 font-mono-custom"
            style={{ fontSize: compact ? '0.55rem' : '0.62rem', color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.04)' }}
          >
            {project.liveUrl ? <Lock className="inline w-2.5 h-2.5 mr-1 -mt-0.5" style={{ color: a }} /> : null}
            {project.domain}
          </span>
        </div>
        {project.cover ? (
          <img src={project.cover} alt={`Screenshot of ${project.title}`} loading="lazy" decoding="async"
            width={800} height={500} className="w-full h-full object-cover object-top" />
        ) : (
        <div className={`flex ${compact ? 'gap-2 p-3' : 'gap-3 p-4'} h-full`}>
          <div className="w-1/4 space-y-2 hidden sm:block">
            {[0.9, 0.6, 0.75, 0.5, 0.65].map((w, i) => (
              <div key={i} className="h-2 rounded-full" style={{ width: `${w * 100}%`, background: i === 0 ? a : 'rgba(255,255,255,0.08)' }} />
            ))}
          </div>
          <div className="flex-1 space-y-3">
            <div className="h-3 w-2/3 rounded-full" style={{ background: 'rgba(255,255,255,0.14)' }} />
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map(i => (
                <div key={i} className="rounded-lg p-2" style={{ background: i === 0 ? `${a}22` : 'rgba(255,255,255,0.04)', border: `1px solid ${i === 0 ? a + '40' : 'rgba(255,255,255,0.05)'}` }}>
                  <div className="h-2 w-1/2 rounded-full mb-1.5" style={{ background: i === 0 ? a : 'rgba(255,255,255,0.15)' }} />
                  <div className="h-1.5 w-3/4 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
                </div>
              ))}
            </div>
            {!compact && (
              <div className="flex items-end gap-1.5 h-16 pt-2">
                {[40, 65, 50, 80, 60, 90, 72, 95].map((h, i) => (
                  <motion.div key={i} className="flex-1 rounded-t"
                    initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.6 }}
                    style={{ background: `linear-gradient(to top, ${a}30, ${a})` }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        )}
      </div>
      {project.coverPhone && !compact && (
        <div className="absolute right-3 sm:right-5 bottom-3 sm:bottom-5 w-[22%] min-w-[78px] max-w-[130px] rounded-[16px] p-[3px] hidden sm:block"
          style={{ background: '#0b0f17', border: `1px solid ${a}55`, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8)' }}
        >
          <img src={project.coverPhone} alt="" loading="lazy" decoding="async"
            className="w-full aspect-[9/19] object-cover object-top rounded-[13px]" />
        </div>
      )}
    </div>
  );
};

const ProjectLinks: React.FC<{ project: Project; onGallery?: () => void }> = ({ project, onGallery }) => (
  <div className="flex flex-wrap gap-3">
    {project.gallery && onGallery && (
      <motion.button type="button" onClick={onGallery}
        className="btn-outline text-sm py-2.5 px-5" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}
        style={{ borderColor: `${project.accent}55` }}
      >
        <Images className="w-4 h-4" style={{ color: project.accent }} /><span>Screenshots ({project.gallery.length})</span>
      </motion.button>
    )}
    {project.liveUrl && (
      <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
        className="btn-primary text-sm py-2.5 px-5" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}
      >
        <Globe className="w-4 h-4" /><span>View Live</span><ArrowRight className="w-3.5 h-3.5" />
      </motion.a>
    )}
    {project.sourceUrl && (
      <motion.a href={project.sourceUrl} target="_blank" rel="noopener noreferrer"
        className="btn-outline text-sm py-2.5 px-5" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}
      >
        <Github className="w-4 h-4" /><span>Source</span>
      </motion.a>
    )}
    {project.privateNote && (
      <span className="inline-flex items-center gap-2 text-sm py-2.5 px-4 rounded-xl"
        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(226,232,240,0.55)' }}
      >
        <Lock className="w-3.5 h-3.5" />{project.privateNote}
      </span>
    )}
  </div>
);

const Portfolio: React.FC = () => {
  const [open, setOpen] = useState<{ project: Project; index: number } | null>(null);
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden" style={{ background: 'var(--c-surface)' }}>
      <div className="noise-overlay" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <div className="section-label justify-center mb-4">My Work</div>
          <h2 className="font-display font-black mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', letterSpacing: '-0.02em' }}>
            Systems{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#00d9f5,#7c3aed)' }}>
              in Production
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(226,232,240,0.5)' }}>
            Real products used by schools, organisations and teams, from first idea to daily use.
          </p>
        </motion.div>

        {/* Featured */}
        <div className="space-y-8 mb-16">
          {featured.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.article key={project.slug}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}
                className="group relative rounded-2xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
                />
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:w-1/2 relative aspect-[16/10] lg:aspect-auto" style={{ minHeight: 300 }}>
                    {project.gallery ? (
                      <button type="button" onClick={() => setOpen({ project, index: 0 })}
                        aria-label={`View ${project.title} screenshots`}
                        className="absolute inset-0 w-full h-full cursor-zoom-in group/visual"
                      >
                        <ProjectVisual project={project} />
                        <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md opacity-90 group-hover/visual:opacity-100 transition-opacity"
                          style={{ background: 'rgba(8,12,20,0.7)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
                        ><Images className="w-3.5 h-3.5" /> {project.gallery.length} screenshots</span>
                      </button>
                    ) : <ProjectVisual project={project} />}
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full backdrop-blur-sm font-mono-custom"
                      style={{ background: `${project.accent}25`, border: `1px solid ${project.accent}40`, color: project.accent, fontSize: '0.68rem', letterSpacing: '0.08em' }}
                    >{project.category}</div>
                  </div>

                  <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                    <span className="font-mono-custom mb-2" style={{ fontSize: '0.72rem', color: project.accent, letterSpacing: '0.06em' }}>
                      {String(i + 1).padStart(2, '0')} — {project.tagline}
                    </span>
                    <h3 className="font-display font-black text-2xl lg:text-3xl text-white mb-4">{project.title}</h3>
                    <p className="text-base leading-relaxed mb-5" style={{ color: 'rgba(226,232,240,0.6)' }}>{project.description}</p>

                    <ul className="space-y-2 mb-6">
                      {project.highlights.map(h => (
                        <li key={h} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(226,232,240,0.7)' }}>
                          <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${project.accent}22` }}>
                            <Check className="w-2.5 h-2.5" style={{ color: project.accent }} />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-7">
                      {project.technologies.map(tech => <span key={tech} className="tag-pill">{tech}</span>)}
                    </div>
                    <ProjectLinks project={project} onGallery={project.gallery ? () => setOpen({ project, index: 0 }) : undefined} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* More projects */}
        <h3 className="font-display font-bold text-xl text-white/60 mb-6 flex items-center gap-3">
          <span className="w-6 h-px bg-white/20" />More Projects<span className="flex-1 h-px bg-white/10" />
        </h3>

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.08 }}
        >
          {others.map(project => {
            const href = project.liveUrl ?? project.sourceUrl;
            return (
              <motion.div key={project.slug}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl overflow-hidden flex flex-col"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="relative aspect-video"><ProjectVisual project={project} compact /></div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="font-mono-custom mb-1.5" style={{ fontSize: '0.65rem', color: project.accent }}>{project.category}</span>
                  <h4 className="font-display font-bold text-lg text-white mb-2">{project.title}</h4>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'rgba(226,232,240,0.5)' }}>{project.description}</p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="font-mono-custom" style={{
                          padding: '2px 8px', borderRadius: 999, fontSize: '0.65rem',
                          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(226,232,240,0.55)',
                        }}>{tech}</span>
                      ))}
                    </div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110"
                        style={{ background: project.accent }}
                      ><ExternalLink className="w-4 h-4 text-white" /></a>
                    ) : (
                      <span title={project.privateNote} className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10 bg-white/5">
                        <Lock className="w-4 h-4 text-white/50" />
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
            <Github className="w-4 h-4" /><span>More on GitHub</span>
          </a>
          <button className="group inline-flex items-center gap-3 text-sm font-semibold font-display"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ color: 'rgba(226,232,240,0.6)' }}
          >
            <Zap className="w-4 h-4" style={{ color: '#f59e0b' }} />
            <span className="group-hover:text-white transition-colors">Ready to build your project?</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && open.project.gallery && (
          <Lightbox
            key={open.project.slug}
            title={open.project.title}
            shots={open.project.gallery}
            startIndex={open.index}
            accent={open.project.accent}
            onClose={() => setOpen(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
