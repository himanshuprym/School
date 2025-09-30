import React from 'react';
import { ArrowRight, BookOpen, Star, Heart, Lightbulb, Sparkles, GraduationCap, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20">
          {/* Left Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left mb-12 lg:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start space-x-2 mb-6"
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">Since 1999 • CBSE Affiliated</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            >
              <span className="block">Shakti Shanti</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Academy
              </span>
              <span className="block text-2xl lg:text-4xl font-medium text-blue-200 mt-4">
                The Roots of Education
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-blue-100 text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Nurturing young minds with knowledge, creativity, and values since 1999. 
              Join our community of 1800+ students and experience excellence in education 
              with our dedicated team of 81 expert educators.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">1800+</div>
                <div className="text-blue-200 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">81</div>
                <div className="text-blue-200 text-sm">Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">25+</div>
                <div className="text-blue-200 text-sm">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">95%</div>
                <div className="text-blue-200 text-sm">Success Rate</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link 
                to="/apply-admission" 
                className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link 
                to="/about" 
                className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20 hover:border-white/40 shadow-xl"
              >
                <span>Learn More</span>
                <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex items-center justify-center relative"
          >
            {/* Central School Building */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="relative z-10"
            >
              <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-white/20 to-white/5 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl">
                <div className="text-center p-8">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
                  >
                    <GraduationCap className="w-20 h-20 lg:w-24 lg:h-24 text-white" />
                  </motion.div>
                  <div className="text-white">
                    <p className="font-bold text-2xl lg:text-3xl mb-2">Excellence</p>
                    <p className="text-blue-200 text-lg">in Education</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Achievement Icons */}
            <motion.div
              animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-16 left-12 lg:top-20 lg:left-16"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 transform rotate-12 shadow-2xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute top-32 right-16 lg:top-40 lg:right-20"
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full p-3 shadow-2xl">
                <Star className="w-6 h-6 text-white" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-20, 20, -20], rotate: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-20 left-20 lg:bottom-24 lg:left-24"
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-3 transform -rotate-12 shadow-2xl">
                <Award className="w-6 h-6 text-white" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [5, -20, 5], rotate: [0, -15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="absolute bottom-32 right-12 lg:bottom-40 lg:right-16"
            >
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-full p-4 shadow-2xl">
                <Users className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
import { ArrowRight, BookOpen, Star, Heart, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row min-h-[500px]">
          {/* Left Section - Yellow */}
          <div className="bg-yellow-400 flex-1 flex items-center justify-center p-8 lg:p-12">
            <div className="max-w-lg">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                The roots of education
              </h2>
              <p className="text-gray-800 text-sm lg:text-base mb-6 leading-relaxed">
                Nuturing young minds with knowledge, creativity, and values to help them grow into
                strong and confident futures.
              </p>
              <Link to="/apply-admission" className="group bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 shadow-lg">
                <span>Apply for Admission</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Right Section - Blue */}
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 flex-1 flex items-center justify-center relative overflow-hidden p-8 lg:p-12">
            {/* Student Image Area */}
            <div className="relative z-10">
              <div className="w-64 h-64 lg:w-80 lg:h-80 bg-white bg-opacity-10 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white border-opacity-20">
                <div className="text-center">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-yellow-400 text-lg lg:text-xl font-bold">👩‍🎓</span>
                    </div>
                  </div>
                  <div className="text-white">
                    <p className="font-bold text-base lg:text-lg mb-1">Happy Student</p>
                    <p className="text-blue-100 text-xs lg:text-sm">Ready to Learn</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-12 left-8 lg:top-16 lg:left-12 animate-bounce">
              <div className="bg-yellow-400 rounded-lg p-2 lg:p-3 transform rotate-12 shadow-lg">
                <BookOpen className="w-4 h-4 lg:w-6 lg:h-6 text-gray-900" />
              </div>
            </div>

            <div className="absolute top-24 right-12 lg:top-32 lg:right-16 animate-pulse">
              <div className="bg-yellow-400 rounded-full p-1.5 lg:p-2 shadow-lg">
                <Star className="w-4 h-4 lg:w-5 lg:h-5 text-gray-900" />
              </div>
            </div>

            <div className="absolute bottom-16 left-16 lg:bottom-20 lg:left-20 animate-bounce delay-300">
              <div className="bg-yellow-400 rounded-lg p-1.5 lg:p-2 transform -rotate-12 shadow-lg">
                <Heart className="w-4 h-4 lg:w-5 lg:h-5 text-gray-900" />
              </div>
            </div>

            <div className="absolute bottom-24 right-8 lg:bottom-32 lg:right-12 animate-pulse delay-500">
              <div className="bg-yellow-400 rounded-full p-2 lg:p-3 shadow-lg">
                <Lightbulb className="w-4 h-4 lg:w-6 lg:h-6 text-gray-900" />
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-16 left-16 lg:top-24 lg:left-24 w-32 h-32 lg:w-40 lg:h-40 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-16 right-16 lg:bottom-24 lg:right-24 w-24 h-24 lg:w-32 lg:h-32 border-2 border-yellow-400 rounded-full"></div>
              <div className="absolute top-32 right-32 lg:top-48 lg:right-40 w-16 h-16 lg:w-20 lg:h-20 bg-yellow-400 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;