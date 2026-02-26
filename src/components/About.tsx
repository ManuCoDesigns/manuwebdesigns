import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Heart, Code, Rocket, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Projects Done', value: '50+', color: '#f59e0b', glow: 'rgba(245,158,11,0.3)' },
    { icon: Clock, label: 'Years Exp.', value: '3+', color: '#00d9f5', glow: 'rgba(0,217,245,0.3)' },
    { icon: Heart, label: 'Happy Clients', value: '40+', color: '#f43f5e', glow: 'rgba(244,63,94,0.3)' },
    { icon: Zap, label: 'Coffee Cups', value: '∞', color: '#10b981', glow: 'rgba(16,185,129,0.3)' },
  ];

  const skills = [
    { name: 'React', level: 95, color: '#00d9f5' },
    { name: 'Node.js', level: 90, color: '#10b981' },
    { name: 'TypeScript', level: 88, color: '#7c3aed' },
    { name: 'Python', level: 85, color: '#f59e0b' },
    { name: 'MongoDB', level: 82, color: '#10b981' },
    { name: 'AWS', level: 80, color: '#f97316' },
  ];

  const sectionIn = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="about" className="relative py-24 overflow-hidden" style={{ background: 'var(--c-surface)' }}>
      <div className="noise-overlay" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Glow orbs */}
      <motion.div className="absolute pointer-events-none rounded-full"
        style={{ width: 500, height: 500, top: '10%', right: '-15%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div className="absolute pointer-events-none rounded-full"
        style={{ width: 400, height: 400, bottom: '10%', left: '-10%', background: 'radial-gradient(circle, rgba(0,217,245,0.07) 0%, transparent 70%)' }}
        animate={{ scale: [1.1, 1, 1.1] }} transition={{ duration: 18, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <div className="section-label justify-center mb-4">About Me</div>
          <h2 className="font-display font-black mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', letterSpacing: '-0.02em' }}>
            The Developer{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#00d9f5,#7c3aed)' }}>Behind the Code</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(226,232,240,0.5)', fontFamily:"'Cabinet Grotesk',sans-serif" }}>
            Passionate full-stack developer on a mission to craft exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

          {/* Left — Bio + Skills */}
          <motion.div className="space-y-10"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.div variants={sectionIn} transition={{ duration: 0.7 }}
              className="relative rounded-2xl p-8 space-y-5"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden rounded-tl-2xl">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-400 to-transparent" />
                <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-cyan-400 to-transparent" />
              </div>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(226,232,240,0.65)', fontFamily:"'Cabinet Grotesk',sans-serif" }}>
                Hi! I'm{' '}
                <span className="font-bold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#00d9f5,#7c3aed)' }}>Manu</span>
                , a full-stack web developer with over 3 years of experience crafting digital solutions that make a difference. I specialize in creating modern, responsive applications using cutting-edge technologies.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(226,232,240,0.5)', fontFamily:"'Cabinet Grotesk',sans-serif" }}>
                My journey started with curiosity about how websites work, evolving into a passion for seamless user experiences and robust backend systems. I believe great code is elegant, maintainable, and scalable.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div variants={sectionIn} transition={{ duration: 0.7 }} className="space-y-5">
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5" style={{ color: '#00d9f5' }} />
                <h3 className="font-display font-bold text-xl text-white">Technical Skills</h3>
              </div>

              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <motion.div key={skill.name}
                    initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-white/80" style={{ fontFamily:"'Syne',sans-serif" }}>{skill.name}</span>
                      <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'0.72rem', color: skill.color }}>{skill.level}%</span>
                    </div>
                    <div className="skill-track">
                      {/* Track glow */}
                      <div className="absolute inset-0 rounded-full" style={{ background: `${skill.color}10` }} />
                      <motion.div
                        className="h-full rounded-full relative overflow-hidden"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 + 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        style={{ background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})` }}
                      >
                        {/* Shimmer */}
                        <motion.div
                          className="absolute inset-0 w-1/3"
                          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
                          animate={{ x: ['-100%', '400%'] }}
                          transition={{ duration: 2, delay: i * 0.08 + 1.5, repeat: Infinity, repeatDelay: 3 }}
                        />
                      </motion.div>
                      {/* Dot cap */}
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2"
                        initial={{ left: 0 }}
                        whileInView={{ left: `calc(${skill.level}% - 6px)` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 + 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        style={{ background: skill.color, borderColor: 'var(--c-surface)', boxShadow: `0 0 8px ${skill.color}` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Rotating border ring */}
              <motion.div
                className="absolute -inset-[2px] rounded-3xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                  background: 'conic-gradient(from 0deg, #00d9f5, #7c3aed, #10b981, #f59e0b, #00d9f5)',
                  opacity: 0.6,
                }}
              />

              <div className="relative rounded-3xl p-8 text-center"
                style={{ background: 'var(--c-surface)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {/* Avatar */}
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'linear-gradient(135deg, #00d9f5, #7c3aed)' }}
                    animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  />
                  <div className="absolute inset-[3px] rounded-full flex items-center justify-center"
                    style={{ background: 'var(--c-surface2)' }}
                  >
                    <motion.span
                      className="font-display font-black text-5xl text-transparent bg-clip-text"
                      style={{ backgroundImage: 'linear-gradient(135deg,#00d9f5,#7c3aed)' }}
                      animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }}
                    >M</motion.span>
                  </div>
                  {/* Online badge */}
                  <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--c-surface)', border: '2px solid var(--c-surface)' }}
                  >
                    <span className="glow-dot w-2.5 h-2.5" />
                  </div>
                </div>

                <h3 className="font-display font-black text-2xl text-white mb-1">Manu</h3>
                <p className="text-sm font-semibold mb-1 text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg,#00d9f5,#7c3aed)' }}>
                  Full Stack Developer
                </p>
                <p style={{ fontFamily:"'DM Mono',monospace", fontSize:'0.72rem', color:'rgba(255,255,255,0.3)' }}>
                  Building the web, one line at a time
                </p>

                {/* Stars */}
                <div className="flex justify-center gap-1.5 my-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.svg key={i} viewBox="0 0 24 24" className="w-4 h-4"
                      initial={{ opacity: 0, scale: 0, rotate: -30 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.08, type: 'spring' }}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        fill="#f59e0b" stroke="#f59e0b" strokeWidth="1" />
                    </motion.svg>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {['React', 'Node.js', 'TypeScript', 'AWS'].map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>
              </div>

              {/* Floating corner icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl"
                animate={{ rotate: [0, 360], y: [0, -8, 0] }}
                transition={{ rotate: { duration: 9, repeat: Infinity, ease: 'linear' }, y: { duration: 3, repeat: Infinity } }}
                style={{ background: 'linear-gradient(135deg, #f59e0b, #f97316)', boxShadow: '0 0 20px rgba(245,158,11,0.4)' }}
              >
                <Rocket className="w-7 h-7 text-white" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xl"
                animate={{ rotate: [360, 0], x: [0, 8, 0] }}
                transition={{ rotate: { duration: 7, repeat: Infinity, ease: 'linear' }, x: { duration: 4, repeat: Infinity } }}
                style={{ background: 'linear-gradient(135deg, #10b981, #00d9f5)', boxShadow: '0 0 20px rgba(16,185,129,0.4)' }}
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {stats.map((stat, i) => (
            <motion.div key={i}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative rounded-2xl p-6 text-center group overflow-hidden cursor-default"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 0%, ${stat.glow} 0%, transparent 70%)` }}
              />
              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 relative"
                whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}
                style={{ background: `${stat.color}18`, border: `1px solid ${stat.color}30`, boxShadow: `0 0 20px ${stat.glow}` }}
              >
                <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
              </motion.div>
              <motion.div
                className="font-display font-black text-3xl mb-1 text-transparent bg-clip-text"
                style={{ backgroundImage: `linear-gradient(135deg, ${stat.color}, ${stat.color}aa)` }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.4, type: 'spring' }}
              >{stat.value}</motion.div>
              <div className="text-sm font-semibold" style={{ color: 'rgba(226,232,240,0.45)', fontFamily:"'Syne',sans-serif" }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;