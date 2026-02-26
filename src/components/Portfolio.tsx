import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Zap, Globe, GraduationCap, Users, BookOpen } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    {
      title: "St. Mary's JSS School",
      description: 'Educational institution website with student portal, academic programs, faculty profiles, and admin systems.',
      image: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Next.js', 'Tailwind', 'Vercel'],
      liveUrl: 'https://stmarysjssweb.vercel.app/',
      githubUrl: '#',
      featured: true,
      accent: '#10b981',
      glow: 'rgba(16,185,129,0.25)',
      category: 'Education',
      icon: GraduationCap,
      metrics: [{ v: '500+', l: 'Students' }, { v: '50+', l: 'Faculty' }, { v: '100%', l: 'Responsive' }],
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack commerce solution with user auth, payment processing, product management, and analytics dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      accent: '#00d9f5',
      glow: 'rgba(0,217,245,0.25)',
      category: 'E-Commerce',
      icon: Zap,
      metrics: [{ v: '300%', l: 'Sales Up' }, { v: '10k+', l: 'Products' }, { v: '99.9%', l: 'Uptime' }],
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project tool with real-time updates, team features, and advanced analytics.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      accent: '#7c3aed',
      glow: 'rgba(124,58,237,0.25)',
      category: 'Productivity',
      icon: Users,
      metrics: [{ v: '50+', l: 'Teams' }, { v: 'Real-time', l: 'Sync' }, { v: '24/7', l: 'Support' }],
    },
    {
      title: 'Restaurant Website',
      description: 'Modern restaurant site with online ordering, table reservations, and menu management.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'Tailwind', 'Stripe'],
      liveUrl: '#', githubUrl: '#', featured: false,
      accent: '#f97316', category: 'Restaurant', icon: BookOpen,
    },
    {
      title: 'Financial Dashboard',
      description: 'Analytics dashboard with real-time data visualization and comprehensive reporting.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      liveUrl: '#', githubUrl: '#', featured: false,
      accent: '#7c3aed', category: 'Finance', icon: Zap,
    },
    {
      title: 'Social Media Platform',
      description: 'Full-featured social app with profiles, posts, messaging, and content sharing.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: '#', githubUrl: '#', featured: false,
      accent: '#f59e0b', category: 'Social', icon: Users,
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform with course management, video streaming, quizzes, and progress tracking.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
      liveUrl: '#', githubUrl: '#', featured: false,
      accent: '#10b981', category: 'Education', icon: GraduationCap,
    },
  ];

  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden" style={{ background: 'var(--c-surface)' }}>
      <div className="noise-overlay" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <div className="section-label justify-center mb-4">My Work</div>
          <h2 className="font-display font-black mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', letterSpacing: '-0.02em' }}>
            Featured{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#00d9f5,#7c3aed)' }}>
              Portfolio
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(226,232,240,0.5)', fontFamily:"'Cabinet Grotesk',sans-serif" }}>
            Showcasing projects that solve real problems and deliver measurable results
          </p>
        </motion.div>

        {/* Featured — alternating layout */}
        <div className="space-y-8 mb-16">
          {featured.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                onHoverStart={() => setHoveredId(i)}
                onHoverEnd={() => setHoveredId(null)}
              >
                {/* Hover gradient top line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: project.accent }}
                />

                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                  {/* Image */}
                  <div className="lg:w-1/2 relative overflow-hidden aspect-[16/9] lg:aspect-auto" style={{ minHeight: '280px' }}>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{ filter: 'saturate(0.7) brightness(0.7)' }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(${isEven ? '90deg' : '270deg'}, rgba(13,17,23,0.9) 0%, rgba(13,17,23,0.3) 100%)` }} />

                    {/* Category badge */}
                    <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm"
                      style={{ background: `${project.accent}25`, border: `1px solid ${project.accent}40` }}
                    >
                      <project.icon className="w-3 h-3" style={{ color: project.accent }} />
                      <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'0.68rem', color: project.accent, letterSpacing:'0.08em' }}>{project.category}</span>
                    </div>

                    {/* Glow on hover */}
                    <AnimatePresence>
                      {hoveredId === i && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                          className="absolute inset-0 pointer-events-none"
                          style={{ background: `radial-gradient(circle at center, ${project.glow} 0%, transparent 70%)` }}
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                    <motion.h3
                      className="font-display font-black text-2xl lg:text-3xl text-white mb-4"
                      whileHover={{ x: 4 }}
                    >
                      {project.title}
                    </motion.h3>

                    <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(226,232,240,0.55)', fontFamily:"'Cabinet Grotesk',sans-serif" }}>
                      {project.description}
                    </p>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {project.metrics.map((m, mi) => (
                          <motion.div key={mi}
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: mi * 0.1 }}
                            className="text-center py-3 rounded-xl"
                            style={{ background: `${project.accent}10`, border: `1px solid ${project.accent}20` }}
                          >
                            <div className="font-display font-black text-base" style={{ color: project.accent }}>{m.v}</div>
                            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'0.65rem', color:'rgba(255,255,255,0.35)', textTransform:'uppercase', letterSpacing:'0.08em' }}>{m.l}</div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-7">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tag-pill">{tech}</span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="btn-primary text-sm py-2.5 px-5"
                        whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}
                      >
                        <Globe className="w-4 h-4" />
                        <span>View Live</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.a>
                      <motion.a href={project.githubUrl}
                        className="btn-outline text-sm py-2.5 px-5"
                        whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}
                      >
                        <Github className="w-4 h-4" />
                        <span>Source</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other projects grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="font-display font-bold text-xl text-white/60 mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-white/20" />
            More Projects
            <span className="flex-1 h-px bg-white/10" />
          </h3>
        </motion.div>

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
        >
          {others.map((project, i) => (
            <motion.div key={i}
              variants={{ hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } } }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="relative overflow-hidden aspect-video">
                <motion.img
                  src={project.image} alt={project.title}
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.5) brightness(0.6)' }}
                  whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `${project.accent}20`, backdropFilter: 'blur(4px)' }}
                >
                  <motion.a href={project.liveUrl} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: project.accent }}
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a href={project.githubUrl} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/20 bg-white/10"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </motion.a>
                </motion.div>

                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full backdrop-blur-sm"
                  style={{ background: `${project.accent}20`, border: `1px solid ${project.accent}35` }}
                >
                  <project.icon className="w-2.5 h-2.5" style={{ color: project.accent }} />
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'0.62rem', color: project.accent }}>{project.category}</span>
                </div>
              </div>

              <div className="p-5">
                <h4 className="font-display font-bold text-base text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text transition-all"
                  style={{ backgroundImage: `linear-gradient(135deg,${project.accent},white)` }}
                >
                  {project.title}
                </h4>
                <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: 'rgba(226,232,240,0.45)', fontFamily:"'Cabinet Grotesk',sans-serif" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} style={{
                      padding: '2px 8px', borderRadius: 999,
                      fontSize: '0.65rem', fontFamily:"'DM Mono',monospace",
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(226,232,240,0.5)'
                    }}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="group inline-flex items-center gap-3 text-sm font-semibold transition-colors"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ color: 'rgba(226,232,240,0.5)', fontFamily:"'Syne',sans-serif" }}
            whileHover={{ scale: 1.04 }}
          >
            <Zap className="w-4 h-4" style={{ color: '#f59e0b' }} />
            <span className="group-hover:text-white transition-colors">Ready to build your project?</span>
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
              <ArrowRight className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;