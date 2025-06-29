import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Database, Cloud, Zap, Shield, Code, Palette, Search, Headphones } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Frontend Development',
      description: 'Stunning, responsive interfaces that captivate users and drive engagement.',
      features: ['React/Vue/Angular', 'Responsive Design', 'Performance Optimization', 'SEO Friendly'],
      color: 'from-blue-500 to-cyan-500',
      delay: 0
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust server-side solutions with scalable architecture and secure APIs.',
      features: ['Node.js/Python', 'RESTful APIs', 'Database Design', 'Authentication'],
      color: 'from-green-500 to-emerald-500',
      delay: 0.1
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Progressive web apps that work seamlessly across all devices.',
      features: ['Progressive Web Apps', 'Cross-platform', 'Offline Support', 'App-like Experience'],
      color: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies.',
      features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Containerization', 'Monitoring'],
      color: 'from-orange-500 to-red-500',
      delay: 0.3
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites with optimized code and best practices.',
      features: ['Speed Optimization', 'Code Splitting', 'Caching Strategies', 'Core Web Vitals'],
      color: 'from-yellow-500 to-orange-500',
      delay: 0.4
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Secure applications with ongoing maintenance and updates.',
      features: ['Security Audits', 'Regular Updates', 'Backup Solutions', 'Monitoring'],
      color: 'from-indigo-500 to-purple-500',
      delay: 0.5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-30 -translate-x-1/2"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-accent-100 to-primary-100 rounded-full opacity-30 translate-x-1/2"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl font-display font-black text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive web development solutions tailored to your business needs
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <motion.div 
                    className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center text-sm text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: service.delay + featureIndex * 0.1 }}
                      >
                        <motion.div 
                          className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}
                          whileHover={{ scale: 1.5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Code className="h-5 w-5" />
              Discuss Your Project
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;