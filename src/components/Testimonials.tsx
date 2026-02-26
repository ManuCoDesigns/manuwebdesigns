import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Heart, ArrowRight, MessageCircle } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart',
      content: 'Manu delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and technical expertise is outstanding. Our sales increased by 300% after launch!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      accent: '#00d9f5',
      metric: '+300% Sales',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'InnovateCorp',
      content: 'Working with Manu was a game-changer for our project. The solution was delivered on time, within budget, and the code quality is absolutely top-notch. Highly recommended!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      accent: '#10b981',
      metric: 'On-time Delivery',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'Creative Studio',
      content: 'The website Manu created for us has significantly improved our online presence. Professional, responsive, and beautifully designed. Our client inquiries doubled!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150',
      accent: '#7c3aed',
      metric: '2x Inquiries',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'var(--c-bg)' }}>
      <div className="noise-overlay" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{ width: 500, height: 500, top: '20%', right: '-15%', background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <div className="section-label justify-center mb-4">Social Proof</div>
          <h2
            className="font-display font-black mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', letterSpacing: '-0.02em' }}
          >
            Client{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#f59e0b,#f97316)' }}>
              Success Stories
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(226,232,240,0.5)', fontFamily: "'Cabinet Grotesk',sans-serif" }}>
            Real results from real clients — hear what they say about working with me
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-5"
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${t.accent}18 0%, transparent 70%)` }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)` }}
              />

              <div className="relative p-7">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <motion.svg key={si} viewBox="0 0 24 24" className="w-4 h-4"
                        initial={{ opacity: 0, scale: 0, rotate: -30 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 + si * 0.07, type: 'spring' }}
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#f59e0b" />
                      </motion.svg>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.3 }}
                    className="px-2.5 py-1 rounded-full"
                    style={{ background: `${t.accent}18`, border: `1px solid ${t.accent}30` }}
                  >
                    <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '0.7rem', color: t.accent, letterSpacing: '0.05em' }}>
                      {t.metric}
                    </span>
                  </motion.div>
                </div>

                <div className="relative mb-7">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.2 }}
                    className="absolute -top-1 -left-1"
                  >
                    <Quote className="w-8 h-8" style={{ color: t.accent, opacity: 0.2 }} />
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.3 }}
                    className="text-sm leading-relaxed pl-5 relative z-10"
                    style={{ color: 'rgba(226,232,240,0.6)', fontFamily: "'Cabinet Grotesk',sans-serif" }}
                  >
                    "{t.content}"
                  </motion.p>
                </div>

                <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.06)' }} />

                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.45 }}
                  className="flex items-center gap-4"
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden"
                      style={{ boxShadow: `0 0 12px ${t.accent}40` }}
                    >
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" style={{ filter: 'saturate(0.8)' }} />
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 + 0.65, type: 'spring' }}
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: t.accent }}
                    >
                      <Heart className="w-2.5 h-2.5 text-white" />
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">{t.name}</h4>
                    <p style={{ fontFamily: "'DM Mono',monospace", fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)' }}>
                      {t.role} · {t.company}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-14 pt-10 border-t border-white/[0.06]"
        >
          <div className="flex -space-x-3">
            {testimonials.map((t, i) => (
              <motion.img key={i} src={t.avatar} alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
                style={{ filter: 'saturate(0.7)', zIndex: testimonials.length - i, boxShadow: '0 0 0 2px #080c14' }}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="w-4 h-4">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#f59e0b" />
                </svg>
              ))}
            </div>
            <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '0.9rem', color: 'rgba(226,232,240,0.55)' }}>
              <span className="font-bold text-white">5.0</span> average rating from{' '}
              <span className="font-bold text-white">40+</span> satisfied clients
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <motion.button
            className="btn-primary text-base px-8 py-4"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96 }}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Become My Next Success Story</span>
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.button>

          <motion.button
            className="btn-outline text-sm px-6 py-4"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            View My Work
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;