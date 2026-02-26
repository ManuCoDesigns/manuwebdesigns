import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Database, Cloud, Zap, Shield, Code } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Frontend Development',
      description: 'Stunning, responsive interfaces that captivate users and drive engagement.',
      features: ['React / Vue / Angular', 'Responsive Design', 'Performance Optimized', 'SEO Friendly'],
      gradient: 'linear-gradient(135deg, #00d9f5, #7c3aed)',
      glow: 'rgba(0,217,245,0.2)',
      accent: '#00d9f5',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust server-side solutions with scalable architecture and secure APIs.',
      features: ['Node.js / Python', 'RESTful & GraphQL', 'Database Design', 'Authentication'],
      gradient: 'linear-gradient(135deg, #10b981, #00d9f5)',
      glow: 'rgba(16,185,129,0.2)',
      accent: '#10b981',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Progressive web apps that work seamlessly across all devices.',
      features: ['Progressive Web Apps', 'Cross-platform', 'Offline Support', 'App-like UX'],
      gradient: 'linear-gradient(135deg, #7c3aed, #f43f5e)',
      glow: 'rgba(124,58,237,0.2)',
      accent: '#7c3aed',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and automated deployment strategies.',
      features: ['AWS / Azure / GCP', 'CI/CD Pipelines', 'Containerization', 'Monitoring'],
      gradient: 'linear-gradient(135deg, #f97316, #f59e0b)',
      glow: 'rgba(249,115,22,0.2)',
      accent: '#f97316',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites with surgical code optimization.',
      features: ['Speed Optimization', 'Code Splitting', 'Caching Strategy', 'Core Web Vitals'],
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      glow: 'rgba(245,158,11,0.2)',
      accent: '#f59e0b',
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Hardened applications with ongoing support and proactive updates.',
      features: ['Security Audits', 'Regular Updates', 'Backup Solutions', 'Uptime Monitoring'],
      gradient: 'linear-gradient(135deg, #6366f1, #7c3aed)',
      glow: 'rgba(99,102,241,0.2)',
      accent: '#6366f1',
    },
  ];

  return (
    <section id="services" className="relative py-24 overflow-hidden" style={{ background: 'var(--c-bg)' }}>
      <div className="noise-overlay" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <motion.div className="absolute pointer-events-none rounded-full"
        style={{ width: 600, height: 600, top: '-10%', left: '-20%', background: 'radial-gradient(circle, rgba(0,217,245,0.06) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <div className="section-label justify-center mb-4">What I Do</div>
          <h2 className="font-display font-black mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', letterSpacing: '-0.02em' }}>
            Services That{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#00d9f5,#7c3aed)' }}>
              Drive Results
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(226,232,240,0.5)', fontFamily:"'Cabinet Grotesk',sans-serif" }}>
            Comprehensive web development solutions tailored to your unique business needs
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ staggerChildren: 0.09 }}
        >
          {services.map((service, i) => (
            <motion.div key={i}
              variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Hover glow bg */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${service.glow} 0%, transparent 60%)` }}
              />

              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: service.gradient }}
              />

              <div className="relative p-7">
                {/* Icon */}
                <motion.div
                  className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 overflow-hidden"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  style={{ background: `${service.accent}15`, border: `1px solid ${service.accent}25` }}
                >
                  <service.icon className="w-7 h-7 relative z-10" style={{ color: service.accent }} />
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: service.gradient, opacity: 0 }}
                  />
                </motion.div>

                {/* Number badge */}
                <div className="absolute top-6 right-6 font-display font-black text-5xl select-none pointer-events-none"
                  style={{ color: 'rgba(255,255,255,0.03)', lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                  style={{ backgroundImage: service.gradient, WebkitBackgroundClip: 'text' }}
                >
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(226,232,240,0.5)', fontFamily:"'Cabinet Grotesk',sans-serif" }}>
                  {service.description}
                </p>

                <ul className="space-y-2.5">
                  {service.features.map((feat, fi) => (
                    <motion.li key={fi}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 + fi * 0.08 }}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: 'rgba(226,232,240,0.6)', fontFamily:"'Cabinet Grotesk',sans-serif" }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: service.accent, boxShadow: `0 0 6px ${service.accent}` }}
                        whileHover={{ scale: 2 }}
                      />
                      {feat}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.button
            className="btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}
          >
            <Code className="w-4 h-4" />
            <span>Discuss Your Project</span>
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>→</motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;