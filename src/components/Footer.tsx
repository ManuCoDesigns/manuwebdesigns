import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, MessageCircle, ArrowUp, ArrowUpRight, Code2 } from 'lucide-react';
import { contact, socials as links } from '../data/site';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const nav = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Work', id: 'portfolio' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const socials = [
    { icon: Github, href: links.github, label: 'GitHub' },
    { icon: MessageCircle, href: links.whatsapp, label: 'WhatsApp' },
    { icon: Mail, href: links.email, label: 'Email' },
  ];

  const mono: React.CSSProperties = { fontFamily: "'DM Mono',monospace" };

  return (
    <footer className="relative overflow-hidden" style={{ background: '#040710', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(0,217,245,0.5) 30%, rgba(124,58,237,0.5) 70%, transparent 100%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* CTA band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative rounded-2xl p-6 sm:p-8 mb-12 overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{ background: 'linear-gradient(135deg, rgba(0,217,245,0.08), rgba(124,58,237,0.10))', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div>
            <div style={{ ...mono, fontSize: '0.7rem', color: '#00d9f5', letterSpacing: '0.14em', textTransform: 'uppercase' }} className="mb-2 flex items-center gap-2">
              <span className="glow-dot" /> Open for new projects
            </div>
            <h3 className="font-display font-black text-white" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.1rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Have a project in mind?
            </h3>
            <p className="text-sm mt-2" style={{ color: 'rgba(226,232,240,0.55)' }}>
              Tell me what you're building. I reply within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-transform hover:-translate-y-0.5"
              style={{ background: 'rgba(37,211,102,0.14)', border: '1px solid rgba(37,211,102,0.4)', color: '#4ade80' }}
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp me
            </a>
            <a href={links.email} className="btn-primary justify-center text-sm py-3 px-5">
              <Mail className="w-4 h-4" /><span>Send an email</span>
            </a>
          </div>
        </motion.div>

        {/* Main row */}
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr] mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <button onClick={() => scrollTo('home')} className="flex items-center gap-3" aria-label="Back to top">
              <div className="w-10 h-10 rounded-xl p-[2px]" style={{ background: 'linear-gradient(135deg, #00d9f5, #7c3aed)' }}>
                <div className="w-full h-full rounded-[10px] flex items-center justify-center" style={{ background: '#040710' }}>
                  <span className="font-display font-black text-base text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#00d9f5,#7c3aed)' }}>M</span>
                </div>
              </div>
              <div className="text-left">
                <div className="font-display font-black text-white text-lg leading-none">ManuWebDesigns</div>
                <div style={{ ...mono, fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', marginTop: 3 }}>FULL-STACK DEVELOPER</div>
              </div>
            </button>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(226,232,240,0.58)' }}>
              School systems, data platforms and fast, mobile-first websites, built in Kenya for clients anywhere.
            </p>
            <div className="flex gap-2.5">
              {socials.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-white"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(226,232,240,0.6)' }}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 style={{ ...mono, fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.14em' }} className="uppercase mb-4">Navigate</h4>
            <ul className="flex flex-wrap md:flex-col gap-x-5 gap-y-2.5">
              {nav.map(n => (
                <li key={n.id}>
                  <button onClick={() => scrollTo(n.id)} className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(226,232,240,0.6)' }}>
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ ...mono, fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.14em' }} className="uppercase mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={links.email} className="group inline-flex items-center gap-2.5 transition-colors hover:text-white" style={{ color: 'rgba(226,232,240,0.6)' }}>
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#00d9f5' }} />
                  <span className="break-all">{contact.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phoneTel}`} className="inline-flex items-center gap-2.5 transition-colors hover:text-white" style={{ color: 'rgba(226,232,240,0.6)' }}>
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: '#10b981' }} />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5" style={{ color: 'rgba(226,232,240,0.6)' }}>
                <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: '#a78bfa' }} />
                {contact.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ ...mono, fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }} className="text-center sm:text-left">
            © {year} ManuWebDesigns · Bomet, Kenya
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5" style={{ ...mono, fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>
              <Code2 className="w-3.5 h-3.5" style={{ color: '#00d9f5' }} />
              Designed & built by Manu
            </span>
            <button
              aria-label="Back to top"
              onClick={() => scrollTo('home')}
              className="inline-flex items-center gap-2 px-3.5 h-9 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{ ...mono, fontSize: '0.7rem', background: 'rgba(0,217,245,0.08)', border: '1px solid rgba(0,217,245,0.25)', color: '#00d9f5' }}
            >
              Back to top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
