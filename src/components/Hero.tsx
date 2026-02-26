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
    const ctx = canvas.getContext('2d')!;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    type P = { x: number; y: number; vx: number; vy: number; r: number; alpha: number; hue: number };
    const particles: P[] = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45, vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.6 + 0.4, alpha: Math.random() * 0.5 + 0.15,
      hue: Math.random() > 0.5 ? 190 : 270,
    }));
    let raf: number;
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
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
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
    { delay: 1.1, jsx: <><span className="pl-5" style={{color:'#6ee7b7'}}>name</span><span style={{color:'rgba(255,255,255,0.3)'}}>:</span> <span style={{color:'#fcd34d'}}>"Manu"</span><span style={{color:'rgba(255,255,255,0.3)'}}>,</span></> },
    { delay: 1.3, jsx: <><span className="pl-5" style={{color:'#6ee7b7'}}>stack</span><span style={{color:'rgba(255,255,255,0.3)'}}>: [</span><span style={{color:'#fcd34d'}}>"React"</span><span style={{color:'rgba(255,255,255,0.3)'}}>, </span><span style={{color:'#fcd34d'}}>"Node"</span><span style={{color:'rgba(255,255,255,0.3)'}}>, </span><span style={{color:'#fcd34d'}}>"AI"</span><span style={{color:'rgba(255,255,255,0.3)'}}>],</span></> },
    { delay: 1.5, jsx: <><span className="pl-5" style={{color:'#6ee7b7'}}>exp</span><span style={{color:'rgba(255,255,255,0.3)'}}>:</span> <span style={{color:'#fcd34d'}}>"3+ years"</span><span style={{color:'rgba(255,255,255,0.3)'}}>,</span></> },
    { delay: 1.7, jsx: <><span className="pl-5" style={{color:'#a78bfa'}}>build</span><span style={{color:'rgba(255,255,255,0.3)'}}>: () =&gt;</span> <span style={{color:'#67e8f9'}}>✦ magic</span></> },
    { delay: 1.9, jsx: <span style={{color:'rgba(255,255,255,0.5)'}}>{'};'}</span> },
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

            <div className="overflow-hidden space-y-0">
              {['Crafting', 'Digital', 'Magic.'].map((word, i) => (
                <motion.div key={word} initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h1 className="font-display font-black leading-[0.88] tracking-tighter"
                    style={{
                      fontSize: 'clamp(3.8rem, 8vw, 6.5rem)',
                      color: i === 2 ? 'transparent' : i === 0 ? '#fff' : 'rgba(255,255,255,0.88)',
                      backgroundImage: i === 2 ? 'linear-gradient(135deg,#00d9f5,#7c3aed)' : undefined,
                      WebkitBackgroundClip: i === 2 ? 'text' : undefined,
                      WebkitTextFillColor: i === 2 ? 'transparent' : undefined,
                    }}
                  >{word}</h1>
                </motion.div>
              ))}
            </div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
              className="text-lg leading-relaxed max-w-md"
              style={{ color: 'rgba(226,232,240,0.5)', fontFamily:"'Cabinet Grotesk',sans-serif" }}
            >
              Transforming visionary ideas into stunning digital experiences. Full-stack web applications that captivate users & drive extraordinary results.
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

          {/* Right - Code Card */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 1200 }}
          >
            <motion.div style={{ rotateX: cardRotateX, rotateY: cardRotateY }} className="relative">
              <div className="absolute -inset-[1px] rounded-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(0,217,245,0.4), rgba(124,58,237,0.3), rgba(0,217,245,0.1))' }}
              />
              <div className="relative rounded-2xl overflow-hidden" style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div className="flex gap-2">
                    {['#ff5f57', '#ffbd2e', '#28ca42'].map((c, i) => (
                      <motion.div key={i} className="w-3 h-3 rounded-full cursor-pointer" style={{ background: c }} whileHover={{ scale: 1.3 }} />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <Terminal className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.2)' }} />
                    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'0.72rem', color:'rgba(255,255,255,0.25)' }}>developer.config.ts</span>
                  </div>
                </div>

                <div className="px-6 py-6 space-y-2 min-h-[220px]" style={{ fontFamily:"'DM Mono',monospace", fontSize:'13px' }}>
                  {codeLines.map((line, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: line.delay }}
                      className="flex items-baseline gap-5"
                    >
                      <span className="text-xs w-3 text-right flex-shrink-0 select-none" style={{ color: 'rgba(255,255,255,0.15)' }}>{i + 1}</span>
                      <span className="leading-relaxed">{line.jsx}</span>
                    </motion.div>
                  ))}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }}
                    className="flex items-baseline gap-5"
                  >
                    <span className="text-xs w-3 text-right select-none" style={{ color: 'rgba(255,255,255,0.15)' }}>7</span>
                    <span className="inline-block w-[7px] h-[14px] rounded-sm animate-blink" style={{ background: '#00d9f5' }} />
                  </motion.div>
                </div>

                <div className="grid grid-cols-3 border-t border-white/[0.06]">
                  {[{ v: '50+', l: 'Projects' }, { v: '3+', l: 'Years' }, { v: '40+', l: 'Clients' }].map((s, i) => (
                    <motion.div key={s.l} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2 + i * 0.1 }}
                      className="text-center py-4 border-r border-white/[0.05] last:border-r-0 hover:bg-white/[0.02] transition-colors cursor-default"
                    >
                      <div className="font-display font-black text-xl text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(135deg,#00d9f5,#7c3aed)' }}>{s.v}</div>
                      <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'0.65rem', color:'rgba(255,255,255,0.3)', letterSpacing:'0.12em', textTransform:'uppercase', marginTop:'2px' }}>{s.l}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="absolute -top-5 -right-5 rounded-2xl px-4 py-2.5 flex items-center gap-2.5"
                animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
                style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', backdropFilter: 'blur(12px)' }}
              >
                <span className="glow-dot" />
                <span className="font-display font-bold text-xs" style={{ color: '#10b981' }}>Live & Available</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-5 -left-5 rounded-2xl px-4 py-2.5 flex items-center gap-2.5"
                animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
                style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)', backdropFilter: 'blur(12px)' }}
              >
                <Zap className="w-3.5 h-3.5" style={{ color: '#f59e0b' }} />
                <span className="font-display font-bold text-xs" style={{ color: 'rgba(226,232,240,0.7)' }}>Lightning Fast</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        >
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'0.65rem', color:'rgba(255,255,255,0.2)', letterSpacing:'0.2em', textTransform:'uppercase' }}>Scroll</span>
          <motion.div className="w-px h-14 origin-top"
            style={{ background: 'linear-gradient(to bottom, rgba(0,217,245,0.5), transparent)' }}
            animate={{ scaleY: [0.2, 1, 0.2], opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;