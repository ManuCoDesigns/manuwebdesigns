import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] z-[60] origin-left"
        style={{
          width: progressWidth,
          background: 'linear-gradient(90deg, #00d9f5, #7c3aed)',
        }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080c14]/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="relative w-9 h-9">
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  style={{ background: 'linear-gradient(135deg, #00d9f5, #7c3aed)' }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                />
                <div
                  className="absolute inset-[2px] rounded-[6px] flex items-center justify-center"
                  style={{ background: '#080c14' }}
                >
                  <span className="font-display font-black text-sm text-transparent bg-clip-text"
                    style={{ backgroundImage: 'linear-gradient(135deg,#00d9f5,#7c3aed)' }}>
                    M
                  </span>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-black text-base text-white tracking-tight">Manu</span>
                <span className="font-mono-custom text-[10px] text-white/30 tracking-widest">WebDesigns</span>
              </div>
            </motion.button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors group"
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.2 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    color: activeSection === item.id ? '#00d9f5' : 'rgba(226,232,240,0.6)',
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: 'rgba(0,217,245,0.08)', border: '1px solid rgba(0,217,245,0.15)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </motion.button>
              ))}

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="ml-4 btn-primary text-sm py-2.5 px-5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="flex items-center gap-2">
                  <span className="glow-dot w-1.5 h-1.5 flex-shrink-0" />
                  Hire Me
                </span>
              </motion.button>
            </nav>

            {/* Mobile Hamburger */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-colors"
              whileTap={{ scale: 0.92 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-white/[0.06] bg-[#080c14]/95 backdrop-blur-2xl"
            >
              <nav className="px-4 py-4 space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
                    style={{
                      color: activeSection === item.id ? '#00d9f5' : 'rgba(226,232,240,0.65)',
                      background: activeSection === item.id ? 'rgba(0,217,245,0.07)' : 'transparent',
                      fontFamily: "'Syne', sans-serif",
                    }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <div className="pt-2">
                  <button onClick={() => scrollToSection('contact')} className="w-full btn-primary justify-center">
                    <span className="flex items-center gap-2"><span className="glow-dot w-1.5 h-1.5" />Hire Me</span>
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;