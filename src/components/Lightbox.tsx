import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Shot } from '../data/site';

type Props = {
  title: string;
  shots: Shot[];
  startIndex: number;
  accent: string;
  onClose: () => void;
};

const Lightbox: React.FC<Props> = ({ title, shots, startIndex, accent, onClose }) => {
  const [index, setIndex] = useState(startIndex);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const shot = shots[index];

  const go = useCallback((dir: 1 | -1) => setIndex(i => (i + dir + shots.length) % shots.length), [shots.length]);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    const prevFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus();
    };
  }, [go, onClose]);

  // Preload neighbours for instant switching
  useEffect(() => {
    [1, -1].forEach(d => { const img = new Image(); img.src = shots[(index + d + shots.length) % shots.length].src; });
  }, [index, shots]);

  return createPortal(
    <motion.div
      role="dialog" aria-modal="true" aria-label={`${title} screenshots`}
      className="fixed inset-0 z-[100] flex flex-col"
      style={{ background: 'rgba(4,7,16,0.94)', backdropFilter: 'blur(10px)' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3" onClick={e => e.stopPropagation()}>
        <div className="min-w-0">
          <div className="font-display font-bold text-white text-sm sm:text-base truncate">{title}</div>
          <div className="font-mono-custom" style={{ fontSize: '0.7rem', color: 'rgba(226,232,240,0.6)' }}>
            {index + 1} / {shots.length}
          </div>
        </div>
        <button ref={closeRef} onClick={onClose} aria-label="Close screenshots"
          className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/15 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        ><X className="w-5 h-5" /></button>
      </div>

      {/* Image stage */}
      <div className="relative flex-1 min-h-0 flex items-center justify-center px-3 sm:px-16">
        <AnimatePresence mode="wait">
          <motion.figure key={shot.src}
            initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full flex flex-col items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <img src={shot.src} alt={shot.caption}
              className={`max-h-[calc(100%-3rem)] object-contain rounded-xl ${shot.kind === 'phone' ? 'max-w-[min(360px,90%)]' : 'max-w-full'}`}
              style={{ border: `1px solid ${accent}40`, boxShadow: `0 30px 80px -20px ${accent}55` }}
            />
            <figcaption className="mt-3 text-center text-sm px-4" style={{ color: 'rgba(226,232,240,0.8)' }}>{shot.caption}</figcaption>
          </motion.figure>
        </AnimatePresence>

        {shots.length > 1 && (
          <>
            <button onClick={e => { e.stopPropagation(); go(-1); }} aria-label="Previous screenshot"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full hidden sm:flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors"
            ><ChevronLeft className="w-5 h-5" /></button>
            <button onClick={e => { e.stopPropagation(); go(1); }} aria-label="Next screenshot"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full hidden sm:flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors"
            ><ChevronRight className="w-5 h-5" /></button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      <div className="px-4 py-3 overflow-x-auto" onClick={e => e.stopPropagation()}>
        <div className="flex gap-2 justify-start sm:justify-center min-w-max mx-auto">
          {shots.map((s, i) => (
            <button key={s.src} onClick={() => setIndex(i)} aria-label={`Show screenshot ${i + 1}: ${s.caption}`}
              aria-current={i === index}
              className={`relative rounded-lg overflow-hidden flex-shrink-0 transition-all ${s.kind === 'phone' ? 'w-9 h-14' : 'w-20 h-12'}`}
              style={{ outline: i === index ? `2px solid ${accent}` : '1px solid rgba(255,255,255,0.12)', opacity: i === index ? 1 : 0.55 }}
            >
              <img src={s.kind === 'desktop' ? s.src.replace(/\.webp$/, '-sm.webp') : s.src} alt="" loading="lazy" className="w-full h-full object-cover object-top" />
            </button>
          ))}
        </div>
        <p className="sm:hidden text-center mt-2" style={{ fontSize: '0.7rem', color: 'rgba(226,232,240,0.5)' }}>Swipe to browse</p>
      </div>
    </motion.div>,
    document.body,
  );
};

export default Lightbox;
