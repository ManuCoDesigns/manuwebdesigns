import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const socials = [
    { icon: Github, href: '#', label: 'GitHub', accent: '#e2e8f0' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', accent: '#0ea5e9' },
    { icon: Twitter, href: '#', label: 'Twitter', accent: '#38bdf8' },
  ];

  const quickLinks = ['About', 'Services', 'Portfolio', 'Contact'];

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden" style={{ background: '#040710', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="noise-overlay" />
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(0,217,245,0.4) 30%, rgba(124,58,237,0.4) 70%, transparent 100%)' }}
      />

      <motion.div className="absolute pointer-events-none rounded-full"
        style={{ width: 500, height: 500, bottom: '-30%', left: '-10%', background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Main grid */}
        <motion.div
          className="grid md:grid-cols-4 gap-10 mb-12"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Brand */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="md:col-span-2 space-y-5"
          >
            <motion.button onClick={() => scrollTo('home')} className="flex items-center gap-3 group" whileHover={{ scale: 1.02 }}>
              <div className="relative w-10 h-10">
                <motion.div className="absolute inset-0 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #00d9f5, #7c3aed)' }}
                  animate={{ rotate: [0, 360] }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                />
                <div className="absolute inset-[2px] rounded-[10px] flex items-center justify-center"
                  style={{ background: '#040710' }}
                >
                  <span className="font-display font-black text-base text-transparent bg-clip-text"
                    style={{ backgroundImage: 'linear-gradient(135deg,#00d9f5,#7c3aed)' }}>M</span>
                </div>
              </div>
              <div>
                <div className="font-display font-black text-white text-lg leading-none">ManuWebDesigns</div>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'0.65rem', color:'rgba(255,255,255,0.3)', letterSpacing:'0.12em', marginTop:'2px' }}>Full Stack Developer</div>
              </div>
            </motion.button>

            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(226,232,240,0.4)', fontFamily:"'Cabinet Grotesk',sans-serif" }}>
              Transforming ideas into powerful digital experiences. Full-stack web development services that drive results and exceed expectations.
            </p>

            <div className="flex gap-3">
              {socials.map((s, i) => (
                <motion.a key={i} href={s.href} aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  whileHover={{ scale: 1.1, y: -3, borderColor: s.accent, backgroundColor: `${s.accent}12`, color: s.accent }}
                  whileTap={{ scale: 0.92 }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <s.icon className="w-4 h-4" style={{ color: 'rgba(226,232,240,0.5)' }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <h3 className="font-display font-bold text-sm text-white mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li key={link}
                  initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                >
                  <motion.button
                    onClick={() => scrollTo(link.toLowerCase())}
                    className="group flex items-center gap-2.5 text-sm transition-colors"
                    style={{ color: 'rgba(226,232,240,0.4)', fontFamily:"'Cabinet Grotesk',sans-serif" }}
                    whileHover={{ x: 6 }}
                  >
                    <motion.span
                      className="w-1 h-1 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: '#00d9f5', boxShadow: '0 0 6px #00d9f5' }}
                    />
                    <span className="group-hover:text-white transition-colors">{link}</span>
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <h3 className="font-display font-bold text-sm text-white mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
              Contact
            </h3>
            <div className="space-y-4">
              {[
                { icon: Mail, value: 'manuwebdesigns@gmail.com', href: 'mailto:manuwebdesigns@gmail.com', accent: '#00d9f5' },
                { icon: Phone, value: '+254 714 749 123', href: 'tel:+254 714 749 123', accent: '#10b981' },
                { icon: MapPin, value: 'Available Worldwide', href: '#', accent: '#7c3aed' },
              ].map((item, i) => (
                <motion.a key={i} href={item.href}
                  initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.accent}15`, border: `1px solid ${item.accent}20`, color: item.accent }}
                  >
                    <item.icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs transition-colors group-hover:text-white"
                    style={{ color: 'rgba(226,232,240,0.45)', fontFamily:"'Cabinet Grotesk',sans-serif" }}>
                    {item.value}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p style={{ fontFamily:"'DM Mono',monospace", fontSize:'0.72rem', color:'rgba(255,255,255,0.25)' }}>
            © {year} ManuWebDesigns — All rights reserved
          </p>
          <div className="flex items-center gap-2">
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'0.72rem', color:'rgba(255,255,255,0.25)' }}>Made with</span>
            <motion.span animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 1.2, repeat: Infinity }}>
              <Heart className="w-3.5 h-3.5" style={{ color: '#f43f5e' }} />
            </motion.span>
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'0.72rem', color:'rgba(255,255,255,0.25)' }}>by Manu</span>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={() => scrollTo('home')}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{ background: 'rgba(0,217,245,0.1)', border: '1px solid rgba(0,217,245,0.2)', color: '#00d9f5' }}
            whileHover={{ scale: 1.1, y: -3, boxShadow: '0 0 16px rgba(0,217,245,0.3)' }}
            whileTap={{ scale: 0.92 }}
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;