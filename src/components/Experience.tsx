import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, MessageCircle } from 'lucide-react';
import { experience } from '../data/site';

const process = [
  { step: '01', title: 'Understand', text: 'We talk through the problem, the users and what success looks like.' },
  { step: '02', title: 'Design', text: 'I map out the data, the screens and a clear plan before writing code.' },
  { step: '03', title: 'Build & ship', text: 'Working versions early and often, deployed so you can try them.' },
  { step: '04', title: 'Support', text: 'Fixes, updates and improvements after launch, so the product keeps working.' },
];

const Experience: React.FC = () => (
  <section id="experience" className="relative py-24 overflow-hidden" style={{ background: 'var(--c-bg)' }}>
    <div className="noise-overlay" />
    <div className="absolute inset-0 grid-bg pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
      >
        <div className="section-label justify-center mb-4">Experience</div>
        <h2 className="font-display font-black mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', letterSpacing: '-0.02em' }}>
          Where I{' '}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#f59e0b,#f97316)' }}>Build & Lead</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(226,232,240,0.5)' }}>
          Developer, technical lead and educator. I build software for the people I work alongside every day.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Timeline */}
        <div className="lg:col-span-3 relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px" style={{ background: 'linear-gradient(to bottom, rgba(0,217,245,0.4), rgba(124,58,237,0.2), transparent)' }} />
          <div className="space-y-6">
            {experience.map((e, i) => (
              <motion.div key={e.role}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-5 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--c-bg)', border: `2px solid ${e.accent}`, boxShadow: `0 0 14px ${e.accent}55` }}
                >
                  <Briefcase className="w-3.5 h-3.5" style={{ color: e.accent }} />
                </div>
                <div className="rounded-2xl p-6 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-display font-bold text-lg text-white">{e.role}</h3>
                    <span className="font-mono-custom" style={{ fontSize: '0.7rem', color: e.accent }}>{e.period}</span>
                  </div>
                  <p className="text-sm mb-3" style={{ color: 'rgba(226,232,240,0.5)' }}>{e.org}</p>
                  <ul className="space-y-1.5">
                    {e.points.map(p => (
                      <li key={p} className="text-sm flex gap-2" style={{ color: 'rgba(226,232,240,0.68)' }}>
                        <span style={{ color: e.accent }}>▸</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How I work */}
        <motion.div className="lg:col-span-2"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <div className="lg:sticky lg:top-28 rounded-2xl p-7"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <h3 className="font-display font-bold text-xl text-white mb-6">How I Work</h3>
            <div className="space-y-5">
              {process.map(p => (
                <div key={p.step} className="flex gap-4">
                  <span className="font-display font-black text-2xl text-transparent bg-clip-text flex-shrink-0"
                    style={{ backgroundImage: 'linear-gradient(135deg,#00d9f5,#7c3aed)' }}>{p.step}</span>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">{p.title}</h4>
                    <p className="text-sm" style={{ color: 'rgba(226,232,240,0.5)' }}>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <motion.button className="btn-primary w-full justify-center mt-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="w-4 h-4" /><span>Let's Talk</span><ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Experience;
