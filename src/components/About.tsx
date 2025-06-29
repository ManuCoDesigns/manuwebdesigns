import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Clock, Heart, Code, Rocket, Star, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Projects Completed', value: '50+', color: 'from-yellow-400 to-orange-500' },
    { icon: Clock, label: 'Years Experience', value: '3+', color: 'from-blue-400 to-purple-500' },
    { icon: Heart, label: 'Happy Clients', value: '40+', color: 'from-pink-400 to-red-500' },
    { icon: Zap, label: 'Coffee Cups', value: '∞', color: 'from-green-400 to-teal-500' }
  ];

  const skills = [
    { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', level: 90, color: 'from-green-500 to-emerald-500' },
    { name: 'TypeScript', level: 88, color: 'from-blue-600 to-indigo-600' },
    { name: 'Python', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'MongoDB', level: 82, color: 'from-green-600 to-green-700' },
    { name: 'AWS', level: 80, color: 'from-orange-500 to-red-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full opacity-30"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full opacity-30"
          animate={{ 
            y: [0, -30, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
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
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Passionate full-stack developer with a mission to create exceptional digital experiences
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hi! I'm <span className="font-bold text-primary-600">Manu</span>, a passionate full-stack web developer with over 3 years of experience 
                crafting digital solutions that make a difference. I specialize in creating modern, 
                responsive web applications using cutting-edge technologies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey in web development started with a curiosity about how websites work, 
                and it has evolved into a deep passion for creating seamless user experiences 
                and robust backend systems. I believe great code is not just functional—it's elegant, 
                maintainable, and scalable.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-gray-900 flex items-center gap-3">
                <Code className="h-6 w-6 text-primary-600" />
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="bg-gradient-to-br from-primary-600 via-accent-600 to-primary-800 rounded-3xl p-8 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div 
                  className="bg-white rounded-2xl p-8 text-center relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mx-auto mb-6 flex items-center justify-center relative overflow-hidden"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <User className="h-16 w-16 text-white" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Manu</h3>
                  <p className="text-primary-600 font-semibold mb-2">Full Stack Developer</p>
                  <p className="text-sm text-gray-500">Building the web, one line at a time</p>
                  
                  <div className="flex justify-center gap-2 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl flex items-center justify-center"
                animate={{ 
                  rotate: [0, 360],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Rocket className="h-8 w-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl shadow-xl flex items-center justify-center"
                animate={{ 
                  rotate: [360, 0],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Code className="h-7 w-7 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div 
                  className={`bg-gradient-to-br ${stat.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:shadow-2xl transition-shadow`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="h-10 w-10 text-white" />
                </motion.div>
                <motion.div 
                  className="text-4xl font-display font-black text-gray-900 mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;