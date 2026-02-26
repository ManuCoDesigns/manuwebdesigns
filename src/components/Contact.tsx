import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, Zap, Star } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const templateParams = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  try {
    // 1️⃣ Send Email
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID!,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
    );

    // 2️⃣ Open WhatsApp
    const phoneNumber = "254714749123"; // ← PUT YOUR NUMBER (no +, no spaces)

    const whatsappMessage = `
New Website Message:

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );

    // 3️⃣ Success animation
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3500);

    // 4️⃣ Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });

  } catch (error) {
    console.error("Error sending message:", error);
    alert("Something went wrong. Please try again.");
  }
};

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'manuwebdesigns@gmail.com', href: 'mailto:manuwebdesigns@gmail.com', accent: '#00d9f5' },
    { icon: Phone, label: 'Phone', value: '+254 714 749 123', href: 'tel:+254 714 749 123', accent: '#10b981' },
    { icon: MapPin, label: 'Location', value: 'Available Worldwide', href: '#', accent: '#7c3aed' },
  ];

  const benefits = [
    { icon: Zap, text: 'Fast turnaround times', accent: '#f59e0b' },
    { icon: Star, text: 'Competitive pricing', accent: '#00d9f5' },
    { icon: CheckCircle, text: 'Ongoing support', accent: '#10b981' },
    { icon: MessageCircle, text: 'Modern technologies', accent: '#7c3aed' },
  ];

  const inputStyle = (name: string) => ({
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    fontSize: '0.9rem',
    fontFamily: "'Cabinet Grotesk', sans-serif",
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused === name ? 'rgba(0,217,245,0.5)' : 'rgba(255,255,255,0.08)'}`,
    color: '#e2e8f0',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxShadow: focused === name ? '0 0 20px rgba(0,217,245,0.1)' : 'none',
  });

  return (
    <section id="contact" className="relative py-24 overflow-hidden" style={{ background: 'var(--c-surface)' }}>
      <div className="noise-overlay" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <motion.div className="absolute pointer-events-none rounded-full"
        style={{ width: 600, height: 600, bottom: '-20%', right: '-15%', background: 'radial-gradient(circle, rgba(0,217,245,0.07) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div className="absolute pointer-events-none rounded-full"
        style={{ width: 500, height: 500, top: '-10%', left: '-15%', background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)' }}
        animate={{ scale: [1.1, 1, 1.1] }} transition={{ duration: 22, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <div className="section-label justify-center mb-4">Get In Touch</div>
          <h2 className="font-display font-black mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', letterSpacing: '-0.02em' }}>
            Let's Build{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#00d9f5,#7c3aed)' }}>
              Something Amazing
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(226,232,240,0.5)', fontFamily:"'Cabinet Grotesk',sans-serif" }}>
            Ready to transform your vision into reality? Let's discuss how I can help bring your project to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left — Info */}
          <motion.div className="space-y-8"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              <h3 className="font-display font-bold text-2xl text-white mb-4 flex items-center gap-3">
                <MessageCircle className="w-6 h-6" style={{ color: '#00d9f5' }} />
                Let's Work Together
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(226,232,240,0.55)', fontFamily:"'Cabinet Grotesk',sans-serif" }}>
                I'm always excited to work on new projects and help businesses grow through innovative web solutions. Whether you need a simple website or a complex application, I'm here to make your vision a reality.
              </p>
            </motion.div>

            {/* Contact info */}
            <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="space-y-4"
            >
              {contactInfo.map((info, i) => (
                <motion.a key={i} href={info.href}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 group p-4 rounded-2xl transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${info.accent}40`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    style={{ background: `${info.accent}15`, border: `1px solid ${info.accent}25`, color: info.accent }}
                  >
                    <info.icon className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'0.68rem', color:'rgba(255,255,255,0.3)', textTransform:'uppercase', letterSpacing:'0.12em' }}>{info.label}</div>
                    <div className="font-semibold text-sm mt-0.5 transition-colors" style={{ color: 'rgba(226,232,240,0.75)', fontFamily:"'Cabinet Grotesk',sans-serif" }}>{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Why me card */}
            <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-[1px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,217,245,0.4), transparent)' }}
              />
              <h4 className="font-display font-bold text-base text-white mb-5 flex items-center gap-2">
                <Star className="w-4 h-4" style={{ color: '#f59e0b' }} />
                Why Choose Me?
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((b, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2.5 group cursor-default"
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${b.accent}15`, border: `1px solid ${b.accent}25`, color: b.accent }}
                    >
                      <b.icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-medium" style={{ color: 'rgba(226,232,240,0.55)', fontFamily:"'Cabinet Grotesk',sans-serif" }}>{b.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden p-8"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-[1px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,217,245,0.5), transparent)' }}
              />

              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0,217,245,0.12)', border: '1px solid rgba(0,217,245,0.2)', color: '#00d9f5' }}
                >
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">Start Your Project</h3>
                  <p style={{ fontFamily:"'DM Mono',monospace", fontSize:'0.68rem', color:'rgba(255,255,255,0.3)' }}>Usually respond within 24h</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {(['name', 'email'] as const).map((field) => (
                    <div key={field}>
                      <label style={{ display:'block', marginBottom:'6px', fontSize:'0.75rem', fontWeight:600, fontFamily:"'Syne',sans-serif", color:'rgba(226,232,240,0.5)', textTransform:'uppercase', letterSpacing:'0.08em' }}>
                        {field === 'name' ? 'Full Name *' : 'Email *'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field} value={formData[field]}
                        onChange={handleChange} required
                        placeholder={field === 'name' ? 'Your name' : 'your@email.com'}
                        style={inputStyle(field)}
                        onFocus={() => setFocused(field)}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ display:'block', marginBottom:'6px', fontSize:'0.75rem', fontWeight:600, fontFamily:"'Syne',sans-serif", color:'rgba(226,232,240,0.5)', textTransform:'uppercase', letterSpacing:'0.08em' }}>
                    Subject *
                  </label>
                  <input
                    type="text" name="subject" value={formData.subject}
                    onChange={handleChange} required placeholder="Web Development Project"
                    style={inputStyle('subject')}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div>
                  <label style={{ display:'block', marginBottom:'6px', fontSize:'0.75rem', fontWeight:600, fontFamily:"'Syne',sans-serif", color:'rgba(226,232,240,0.5)', textTransform:'uppercase', letterSpacing:'0.08em' }}>
                    Project Details *
                  </label>
                  <textarea
                    name="message" rows={5} value={formData.message}
                    onChange={handleChange} required
                    placeholder="Tell me about your project vision, goals, and requirements..."
                    style={{ ...inputStyle('message'), resize: 'none' }}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full btn-primary justify-center py-4 text-base disabled:opacity-60"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.span key="sent" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-2.5"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <span>Message Sent!</span>
                      </motion.span>
                    ) : (
                      <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-2.5"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                        <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>→</motion.span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;