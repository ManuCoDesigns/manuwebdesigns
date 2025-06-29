import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Star, Zap, Code, Globe, GraduationCap, Users, BookOpen } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'St. Mary\'s JSS School Website',
      description: 'Comprehensive educational institution website featuring student portal, academic programs, faculty profiles, and administrative systems. Built with modern web technologies for optimal performance.',
      image: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://stmarysjssweb.vercel.app/',
      githubUrl: '#',
      featured: true,
      color: 'from-emerald-500 to-teal-500',
      category: 'Education',
      icon: GraduationCap,
      metrics: ['500+ Students', '50+ Faculty', '100% Responsive']
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      color: 'from-blue-500 to-purple-500',
      category: 'E-Commerce',
      icon: Zap,
      metrics: ['300% Sales Increase', '10k+ Products', '99.9% Uptime']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      color: 'from-green-500 to-teal-500',
      category: 'Productivity',
      icon: Users,
      metrics: ['50+ Teams', 'Real-time Sync', '24/7 Support']
    },
    {
      title: 'Restaurant Website',
      description: 'Modern restaurant website with online ordering system, table reservations, and menu management.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      color: 'from-orange-500 to-red-500',
      category: 'Restaurant',
      icon: BookOpen
    },
    {
      title: 'Financial Dashboard',
      description: 'Comprehensive financial analytics dashboard with real-time data visualization and reporting features.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      color: 'from-purple-500 to-pink-500',
      category: 'Finance',
      icon: Zap
    },
    {
      title: 'Social Media Platform',
      description: 'Full-featured social media application with user profiles, posts, messaging, and content sharing.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      color: 'from-indigo-500 to-purple-500',
      category: 'Social',
      icon: Users
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform with course management, video streaming, quizzes, and progress tracking.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      color: 'from-cyan-500 to-blue-500',
      category: 'Education',
      icon: GraduationCap
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
    <section id="portfolio" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full opacity-20"
          animate={{ 
            y: [0, -40, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
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
            Featured <span className="text-gradient">Portfolio</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Showcasing my latest projects and creative solutions that drive real-world results
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div 
          className="space-y-16 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.filter(project => project.featured).map((project, index) => {
            const ProjectIcon = project.icon || Zap;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <motion.div 
                    className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-80 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Featured Badge */}
                      <motion.div
                        className="absolute top-6 left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 500, damping: 25 }}
                      >
                        <Star className="h-4 w-4" />
                        Featured Project
                      </motion.div>

                      {/* Category Badge */}
                      <motion.div
                        className={`absolute top-6 right-6 bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, type: "spring", stiffness: 500, damping: 25 }}
                      >
                        <ProjectIcon className="h-3 w-3" />
                        {project.category}
                      </motion.div>

                      {/* Floating Action Buttons */}
                      <motion.div
                        className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ y: 20 }}
                        whileHover={{ y: 0 }}
                      >
                        <motion.a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="h-5 w-5 text-gray-700" />
                        </motion.a>
                        <motion.a 
                          href={project.githubUrl}
                          className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="h-5 w-5 text-gray-700" />
                        </motion.a>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Project Content */}
                  <motion.div 
                    className={`space-y-6 ${!isEven ? 'lg:col-start-1' : ''}`}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div className="space-y-4">
                      <motion.h3 
                        className="text-4xl font-display font-black text-gray-900 group-hover:text-primary-600 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-lg text-gray-600 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        {project.description}
                      </motion.p>
                    </div>

                    {/* Metrics */}
                    {project.metrics && (
                      <motion.div 
                        className="grid grid-cols-3 gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        {project.metrics.map((metric, metricIndex) => (
                          <motion.div
                            key={metricIndex}
                            className="text-center p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          >
                            <div className="text-sm font-bold text-gray-900">{metric}</div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                    
                    <motion.div 
                      className="flex flex-wrap gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex} 
                          className={`bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                    
                    <motion.div 
                      className="flex gap-6 pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                    >
                      <motion.a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all group/btn"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Globe className="h-5 w-5" />
                        View Live Site
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="opacity-0 group-hover/btn:opacity-100 transition-opacity"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </motion.div>
                      </motion.a>
                      <motion.a 
                        href={project.githubUrl}
                        className="flex items-center gap-3 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-2xl font-semibold hover:border-primary-600 hover:text-primary-600 transition-all"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Code className="h-5 w-5" />
                        Source Code
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Other Projects */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.filter(project => !project.featured).map((project, index) => {
            const ProjectIcon = project.icon || Zap;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="relative overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className={`absolute top-3 right-3 bg-gradient-to-r ${project.color} text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1`}>
                      <ProjectIcon className="h-3 w-3" />
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-full text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      <motion.a 
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-primary-600 hover:text-primary-800 transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </motion.a>
                      <motion.a 
                        href={project.githubUrl}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </motion.a>
                    </div>
                  </div>
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
            className="group inline-flex items-center gap-3 text-primary-600 hover:text-primary-800 transition-colors font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="h-5 w-5" />
            Ready to start your project?
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;