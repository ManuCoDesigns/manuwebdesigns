import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2 } from 'lucide-react';
import ShareSheet from './components/ShareSheet';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [shareOpen, setShareOpen] = useState(false);
  const openShare = () => setShareOpen(true);

  // Deep links like /#portfolio: scroll once the page has rendered.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('share') === '1') setShareOpen(true);
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const t = setTimeout(() => document.getElementById(id)?.scrollIntoView(), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.main
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Header onShare={openShare} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer onShare={openShare} />

      {/* Floating share button */}
      <motion.button
        onClick={openShare}
        aria-label="Share this portfolio"
        className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-2xl flex items-center justify-center text-white"
        style={{ background: 'linear-gradient(135deg,#00d9f5,#7c3aed)', boxShadow: '0 12px 30px -8px rgba(0,217,245,0.55)' }}
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 2 }}
        whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
      >
        <Share2 className="w-5 h-5" />
      </motion.button>

      <AnimatePresence>
        {shareOpen && <ShareSheet onClose={() => setShareOpen(false)} />}
      </AnimatePresence>
    </motion.main>
  );
}

export default App;