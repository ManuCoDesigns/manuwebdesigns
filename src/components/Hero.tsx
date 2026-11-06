import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Globe, Zap, Sparkles, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  const cardRotateX = useTransform(springY, [-300, 300], [6, -6]);
  const cardRotateY = useTransform(springX, [-300, 300], [-6, 6]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const count = window.innerWidth < 768 ? 40 : 90;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    type P = { x: number; y: number; vx: number; vy: number; r: number; alpha: number; hue: number };
    const particles: P[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45, vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.6 + 0.4, alpha: Math.random() * 0.5 + 0.15,
      hue: Math.random() > 0.5 ? 190 : 270,
    }));
    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x = (p.x + p.vx + canvas.width) % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},90%,65%,${p.alpha})`; ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,217,245,${0.12 * (1 - dist / 90)})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      if (!reduceMotion && !document.hidden) raf = requestAnimationFrame(draw);
    };
    const onVisibility = () => { if (!document.hidden && !reduceMotion) { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); } };
    document.addEventListener('visibilitychange', onVisibility);
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - r.left - r.width / 2);
    mouseY.set(e.clientY - r.top - r.height / 2);
  };

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const features = [
    { icon: Code, label: 'Clean Code', color: '#00d9f5' },
    { icon: Smartphone, label: 'Mobile First', color: '#7c3aed' },
    { icon: Globe, label: 'SEO Ready', color: '#10b981' },
    { icon: Zap, label: 'Blazing Fast', color: '#f59e0b' },
  ];

  const codeLines = [
    { delay: 0.9, jsx: <><span style={{color:'#a78bfa'}}>const</span> <span style={{color:'#67e8f9'}}>developer</span> <span style={{color:'rgba(255,255,255,0.4)'}}>= {'{'}</span></> },
    { delay: 1.1, jsx: <><span className="pl-4" style={{color:'#6ee7b7'}}>name</span><span style={{color:'rgba(255,255,255,0.5)'}}>:</span> <span style={{color:'#fcd34d'}}>"Manu"</span><span style={{color:'rgba(255,255,255,0.5)'}}>,</span></> },
    { delay: 1.3, jsx: <><span className="pl-4" style={{color:'#6ee7b7'}}>stack</span><span style={{color:'rgba(255,255,255,0.5)'}}>: [</span><span style={{color:'#fcd34d'}}>"React"</span><span style={{color:'rgba(255,255,255,0.5)'}}>, </span><span style={{color:'#fcd34d'}}>"Supabase"</span><span style={{color:'rgba(255,255,255,0.5)'}}>, </span><span style={{color:'#fcd34d'}}>"FastAPI"</span><span style={{color:'rgba(255,255,255,0.5)'}}>],</span></> },
    { delay: 1.5, jsx: <><span className="pl-4" style={{color:'#6ee7b7'}}>base</span><span style={{color:'rgba(255,255,255,0.5)'}}>:</span> <span style={{color:'#fcd34d'}}>"Kenya → anywhere"</span><span style={{color:'rgba(255,255,255,0.5)'}}>,</span></> },
    { delay: 1.7, jsx: <span style={{color:'rgba(255,255,255,0.5)'}}>{'};'}</span> },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--c-bg)' }}
      onMouseMove={handleMouseMove}
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.7 }} />
      <div className="noise-overlay" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <motion.div className="absolute pointer-events-none rounded-full"
        style={{ width: 700, height: 700, top: '-20%', left: '-15%', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="absolute pointer-events-none rounded-full"
        style={{ width: 600, height: 600, bottom: '-15%', right: '-10%', background: 'radial-gradient(circle, rgba(0,217,245,0.10) 0%, transparent 70%)' }}
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div className="space-y-8"
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm"
            >
              <span className="glow-dot animate-pulse-glow" />
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'0.72rem', color:'rgba(255,255,255,0.5)', letterSpacing:'0.12em', textTransform:'uppercase' }}>
                Available for projects
              </span>
              <Sparkles className="w-3.5 h-3.5" style={{ color: '#f59e0b' }} />
            </motion.div>

            <h1 className="font-display font-black leading-[0.9] tracking-tighter" style={{ fontSize: 'clamp(3.2rem, 8vw, 6.5rem)' }}>
              <span className="sr-only">Manu, full-stack developer in Kenya: </span>
              {['Crafting', 'Digital', 'Magic.'].map((word, i) => (
                <span key={word} className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
                  <motion.span className="block"
                    initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      color: i === 2 ? 'transparent' : i === 0 ? '#fff' : 'rgba(255,255,255,0.88)',
                      backgroundImage: i === 2 ? 'linear-gradient(135deg,#00d9f5,#7c3aed)' : undefined,
                      WebkitBackgroundClip: i === 2 ? 'text' : undefined,
                      backgroundClip: i === 2 ? 'text' : undefined,
                    }}
                  >{word}</motion.span>
                </span>
              ))}
            </h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
              className="text-lg leading-relaxed max-w-md"
              style={{ color: 'rgba(226,232,240,0.5)', fontFamily:"'Cabinet Grotesk',sans-serif" }}
            >
              I build school management systems, data platforms and fast, mobile-first websites, and take them from idea to production.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.88 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button className="btn-primary" onClick={() => scrollTo('contact')}
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}
              >
                <span>Start Your Project</span>
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
              <motion.button className="btn-outline" onClick={() => scrollTo('portfolio')}
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}
              >
                View Portfolio
              </motion.button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
              className="flex flex-wrap gap-5 pt-2"
            >
              {features.map((f, i) => (
                <motion.div key={f.label}
                  initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.05 + i * 0.08 }}
                  whileHover={{ y: -3 }} className="flex items-center gap-2.5 cursor-default"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${f.color}14`, border: `1px solid ${f.color}30`, color: f.color }}
                  >
                    <f.icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold"
                    style={{ color: 'rgba(226,232,240,0.5)', fontFamily:"'Syne',sans-serif" }}
                  >{f.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — portrait + code card */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 1200 }}
            className="relative mx-auto w-full max-w-[440px] lg:max-w-none pb-16 lg:pb-0"
          >
            <motion.div style={{ rotateX: cardRotateX, rotateY: cardRotateY }} className="relative lg:ml-auto lg:w-[86%]">
              {/* gradient frame */}
              <div className="absolute -inset-[2px] rounded-[28px]"
                style={{ background: 'linear-gradient(145deg, rgba(0,217,245,0.7), rgba(124,58,237,0.5) 50%, rgba(16,185,129,0.5))' }}
              />
              <div className="absolute -inset-10 rounded-full blur-3xl opacity-40 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,217,245,0.35), transparent 65%)' }}
              />
              <div className="relative rounded-[26px] overflow-hidden aspect-[4/5]" style={{ background: '#0d1117' }}>
                <img
                  src="/images/manu-portrait-800.webp"
                  srcSet="/images/manu-portrait-480.webp 480w, /images/manu-portrait-800.webp 800w"
                  sizes="(min-width: 1024px) 480px, 90vw"
                  width={800} height={1000}
                  alt="Manu, full-stack developer, smiling in a white polo shirt"
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3" style={{ background: 'linear-gradient(to top, rgba(8,12,20,0.85), transparent)' }} />
                <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-3">
                  <div>
                    <div className="font-display font-black text-xl text-white leading-tight">Manu</div>
                    <div className="font-mono-custom" style={{ fontSize: '0.7rem', color: 'rgba(226,232,240,0.75)' }}>Full-stack developer · Bomet, Kenya</div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md"
                    style={{ background: 'rgba(16,185,129,0.18)', border: '1px solid rgba(16,185,129,0.4)' }}
                  >
                    <span className="glow-dot" />
                    <span className="font-display font-bold text-[11px]" style={{ color: '#34d399' }}>Available</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* floating code card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}
              className="absolute -bottom-2 left-0 sm:-left-6 lg:left-0 w-[78%] sm:w-[70%] lg:w-[62%] rounded-2xl overflow-hidden"
              style={{ background: 'rgba(13,17,23,0.92)', border: '1px solid rgba(0,217,245,0.25)', backdropFilter: 'blur(14px)', boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8)' }}
            >
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06]">
                {['#ff5f57', '#ffbd2e', '#28ca42'].map(c => <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
                <Terminal className="w-3 h-3 ml-auto" style={{ color: 'rgba(255,255,255,0.5)' }} />
                <span className="font-mono-custom" style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)' }}>developer.ts</span>
              </div>
              <div className="px-4 py-3 space-y-1" style={{ fontFamily: "'DM Mono',monospace", fontSize: '12px' }}>
                {codeLines.map((line, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: line.delay }}
                    className="whitespace-nowrap overflow-hidden text-ellipsis leading-relaxed"
                  >{line.jsx}</motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;