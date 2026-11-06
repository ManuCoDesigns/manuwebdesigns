import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { X, Share2, Download, Link2, Check, Mail, MessageCircle, Send, Linkedin, Facebook, Smartphone } from 'lucide-react';

const STATUS_IMAGE = '/share/manu-status.jpg';
const STATUS_PREVIEW = '/share/manu-status-preview.webp';
const SHARE_TEXT = 'Check out ManuWebDesigns: school systems, websites, M-Pesa payments and data platforms, built in Kenya by Manu.';

const XLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2H21.5l-7.5 8.57L22.75 22h-6.87l-5.38-7.03L4.34 22H1.08l8.02-9.17L.75 2h7.04l4.86 6.43L18.24 2Zm-1.2 18h1.9L6.98 3.9H4.94L17.04 20Z" />
  </svg>
);

type Props = { onClose: () => void };

const ShareSheet: React.FC<Props> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const url = `${window.location.origin}/`;
  const enc = encodeURIComponent;
  const canNativeShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function';

  useEffect(() => {
    const prev = document.body.style.overflow;
    const prevFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); prevFocus?.focus(); };
  }, [onClose]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const t = document.createElement('textarea'); t.value = url; document.body.appendChild(t); t.select();
      document.execCommand('copy'); t.remove();
    }
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  const shareLink = async () => {
    try { await navigator.share({ title: 'ManuWebDesigns', text: SHARE_TEXT, url }); } catch { /* cancelled */ }
  };

  const download = () => {
    const a = document.createElement('a');
    a.href = STATUS_IMAGE; a.download = 'manuwebdesigns-status.jpg';
    document.body.appendChild(a); a.click(); a.remove();
  };

  // Shares the image itself, so it can go straight to WhatsApp Status / Instagram Stories.
  const postToStatus = async () => {
    setNote(null);
    try {
      const blob = await (await fetch(STATUS_IMAGE)).blob();
      const file = new File([blob], 'manuwebdesigns-status.jpg', { type: 'image/jpeg' });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], text: `${SHARE_TEXT} ${url}` });
        return;
      }
    } catch (e) {
      if ((e as DOMException)?.name === 'AbortError') return;
    }
    download();
    setNote('Image saved. Open WhatsApp → Status → add it from your gallery.');
  };

  const links = [
    { label: 'WhatsApp', icon: MessageCircle, color: '#25d366', href: `https://wa.me/?text=${enc(`${SHARE_TEXT} ${url}`)}` },
    { label: 'LinkedIn', icon: Linkedin, color: '#0a66c2', href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
    { label: 'Facebook', icon: Facebook, color: '#1877f2', href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}` },
    { label: 'X', icon: XLogo, color: '#e2e8f0', href: `https://twitter.com/intent/tweet?text=${enc(SHARE_TEXT)}&url=${enc(url)}` },
    { label: 'Telegram', icon: Send, color: '#26a5e4', href: `https://t.me/share/url?url=${enc(url)}&text=${enc(SHARE_TEXT)}` },
    { label: 'Email', icon: Mail, color: '#00d9f5', href: `mailto:?subject=${enc('ManuWebDesigns portfolio')}&body=${enc(`${SHARE_TEXT}\n\n${url}`)}` },
  ];

  return createPortal(
    <motion.div className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(4,7,16,0.75)', backdropFilter: 'blur(6px)' }} onClick={onClose} aria-hidden="true" />

      <motion.div role="dialog" aria-modal="true" aria-labelledby="share-title"
        className="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl"
        style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 -20px 60px -10px rgba(0,0,0,0.7)' }}
        initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 380, damping: 34 }}
      >
        <div className="sm:hidden mx-auto mt-3 w-10 h-1.5 rounded-full bg-white/20" />
        <div className="flex items-center justify-between px-6 pt-5">
          <div>
            <h2 id="share-title" className="font-display font-black text-xl text-white">Share my portfolio</h2>
            <p className="text-sm" style={{ color: 'rgba(226,232,240,0.6)' }}>Post it to your status or send it to someone.</p>
          </div>
          <button ref={closeRef} onClick={onClose} aria-label="Close share options"
            className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/15 text-white/80 hover:text-white hover:bg-white/10"
          ><X className="w-5 h-5" /></button>
        </div>

        <div className="grid sm:grid-cols-[200px_1fr] gap-6 p-6">
          {/* Status image */}
          <div className="flex sm:block gap-4 items-center">
            <img src={STATUS_PREVIEW} alt="Status image preview" width={360} height={640}
              className="w-28 sm:w-full rounded-2xl border border-white/10 flex-shrink-0" />
            <div className="sm:mt-3 space-y-2 flex-1">
              <button onClick={postToStatus} className="btn-primary w-full justify-center text-sm py-2.5">
                <Smartphone className="w-4 h-4 flex-shrink-0" /><span className="whitespace-nowrap">Post to status</span>
              </button>
              <button onClick={download}
                className="w-full inline-flex items-center justify-center gap-2 text-sm py-2.5 rounded-xl border border-white/15 text-white/85 hover:bg-white/5"
              ><Download className="w-4 h-4" />Download image</button>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="font-mono-custom uppercase mb-3" style={{ fontSize: '0.7rem', letterSpacing: '0.14em', color: 'rgba(226,232,240,0.55)' }}>Share the link</div>
            <div className="grid grid-cols-3 gap-2.5">
              {links.map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 py-3.5 rounded-2xl transition-colors hover:bg-white/[0.07]"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <span className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${l.color}22`, color: l.color }}>
                    <l.icon className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-semibold text-white/85">{l.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 p-1.5 pl-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Link2 className="w-4 h-4 flex-shrink-0" style={{ color: '#00d9f5' }} />
              <span className="flex-1 truncate text-sm font-mono-custom text-white/80">{url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
              <button onClick={copy} className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold"
                style={{ background: copied ? 'rgba(16,185,129,0.2)' : 'rgba(0,217,245,0.15)', color: copied ? '#34d399' : '#22d3ee' }}
              >{copied ? <><Check className="w-4 h-4" />Copied</> : 'Copy'}</button>
            </div>

            {canNativeShare && (
              <button onClick={shareLink}
                className="mt-3 w-full inline-flex items-center justify-center gap-2 text-sm py-2.5 rounded-xl border border-white/15 text-white/85 hover:bg-white/5"
              ><Share2 className="w-4 h-4" />More apps…</button>
            )}
            <p aria-live="polite" className="mt-3 text-sm min-h-[1.25rem]" style={{ color: '#34d399' }}>{note}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
};

export default ShareSheet;
