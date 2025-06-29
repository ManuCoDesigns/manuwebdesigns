import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter, Heart, Star, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:bg-gray-700' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-blue-400' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="md:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="relative">
                <Code2 className="h-10 w-10 text-primary-400" />
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="h-4 w-4 text-yellow-400" />
                </motion.div>
              </div>
              <span className="text-2xl font-display font-bold text-gradient">
                ManuWebDesigns
              </span>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-8 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Transforming ideas into powerful digital experiences. 
              Full-stack web development services that drive results and exceed expectations.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              variants={containerVariants}
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    variants={itemVariants}
                    className={`bg-gray-800 p-4 rounded-2xl ${link.color} transition-all duration-300 shadow-lg hover:shadow-xl group`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5 group-hover:text-white transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors group flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary-400" />
              Contact Info
            </h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Mail className="h-4 w-4 text-white" />
                </motion.div>
                <motion.a 
                  href="mailto:hello@manuwebdesigns.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  hello@manuwebdesigns.com
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Phone className="h-4 w-4 text-white" />
                </motion.div>
                <motion.a 
                  href="tel:+15551234567" 
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  +1 (555) 123-4567
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <MapPin className="h-4 w-4 text-white" />
                </motion.div>
                <span className="text-gray-300">Available Worldwide</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.p 
            className="text-gray-400 text-sm"
            whileHover={{ scale: 1.05 }}
          >
            © {currentYear} ManuWebDesigns. All rights reserved.
          </motion.p>
          <motion.p 
            className="text-gray-400 text-sm mt-4 md:mt-0 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500" />
            </motion.span>
            by Manu
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;