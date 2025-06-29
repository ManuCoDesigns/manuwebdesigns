import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Globe, Zap, Star, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Code, text: 'Clean Code', color: 'text-blue-600' },
    { icon: Smartphone, text: 'Mobile First', color: 'text-purple-600' },
    { icon: Globe, text: 'SEO Optimized', color: 'text-green-600' },
    { icon: Zap, text: 'Lightning Fast', color: 'text-yellow-600' }
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="floating-shapes">
          <motion.div
            className="shape w-72 h-72 bg-gradient-to-br from-primary-400 to-accent-400 -top-36 -left-36"
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div
            className="shape w-96 h-96 bg-gradient-to-br from-accent-400 to-primary-400 -bottom-48 -right-48"
            animate={{ 
              y: [0, 30, 0],
              rotate: [360, 180, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div
            className="shape w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-400 top-1/4 right-1/4"
            animate={{ 
              x: [0, 50, 0],
              y: [0, -50, 0],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-accent-100 px-4 py-2 rounded-full text-sm font-medium text-primary-700"
              >
                <Star className="h-4 w-4 text-yellow-500" />
                Award-Winning Developer
                <Sparkles className="h-4 w-4 text-accent-500" />
              </motion.div>

              <motion.h1 
                className="text-6xl lg:text-7xl font-display font-black leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <span className="text-gray-900">Crafting</span>
                <br />
                <motion.span 
                  className="text-gradient"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  Digital Magic
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-xl text-gray-600 leading-relaxed max-w-2xl font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Transforming visionary ideas into stunning digital experiences. 
                I create cutting-edge web applications that captivate users and drive extraordinary results.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="btn-primary group relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.button
                onClick={scrollToPortfolio}
                className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-primary-600 hover:text-primary-600 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Portfolio
              </motion.button>
            </motion.div>

            <motion.div 
              className="flex flex-wrap items-center gap-8 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className={`p-2 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg ${feature.color}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {feature.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              {/* Main Code Window */}
              <motion.div 
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm font-mono">ManuWebDesigns.tsx</div>
                </div>
                
                <div className="space-y-4 font-mono text-sm">
                  <motion.div 
                    className="text-blue-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <span className="text-purple-400">const</span> developer = {'{'}
                  </motion.div>
                  <motion.div 
                    className="text-green-400 ml-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    name: <span className="text-yellow-400">'Manu'</span>,
                  </motion.div>
                  <motion.div 
                    className="text-green-400 ml-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    skills: [<span className="text-yellow-400">'React'</span>, <span className="text-yellow-400">'Node.js'</span>, <span className="text-yellow-400">'AI'</span>],
                  </motion.div>
                  <motion.div 
                    className="text-green-400 ml-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                  >
                    passion: <span className="text-yellow-400">'Creating Magic'</span>,
                  </motion.div>
                  <motion.div 
                    className="text-green-400 ml-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                  >
                    <span className="text-blue-400">buildAmazingThings</span>: () ={'>'} <span className="text-yellow-400">true</span>
                  </motion.div>
                  <motion.div 
                    className="text-blue-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                  >
                    {'};'}
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl flex items-center justify-center"
                animate={{ 
                  rotate: [0, 360],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Zap className="h-12 w-12 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-xl flex items-center justify-center"
                animate={{ 
                  rotate: [360, 0],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Code className="h-10 w-10 text-white" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-xl flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <Globe className="h-8 w-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;