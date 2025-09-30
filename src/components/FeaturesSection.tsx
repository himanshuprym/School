import React from 'react';
import { BookOpen, Users, Award, Calendar, Bell, Shield, Laptop, Globe, Clock, Star, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import FeatureCard from './ui/FeatureCard';
import { BookOpen, Users, Award, Calendar, Bell, Shield } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'CBSE Excellence',
      description: 'Comprehensive CBSE curriculum with modern teaching methodologies and continuous assessment for holistic development.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      title: 'Academic Excellence',
      description: 'Comprehensive curriculum designed to nurture critical thinking and creativity.',
      color: 'bg-blue-500',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Team of 81 dedicated educators including IITians and NEET-qualified teachers committed to student success.',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
    },
    {
      icon: Target,
      title: 'NEEV Program',
      description: 'Specialized foundation program for JEE and NEET preparation starting from Class 8 with expert guidance.',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
    {
      icon: Laptop,
      title: 'Smart Learning',
      description: 'Technology-enabled classrooms with interactive learning tools and digital resources for enhanced education.',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
    },
    {
      icon: Award,
      title: '95% Success Rate',
      description: 'Proven track record of academic excellence with students achieving outstanding results in board exams.',
      color: 'bg-gradient-to-br from-red-500 to-red-600',
      description: 'Experienced educators dedicated to student success and personal growth.',
      color: 'bg-green-500',
    },
    {
      icon: Award,
      title: 'Achievement Focus',
      description: 'Celebrating student accomplishments and fostering a culture of excellence.',
      color: 'bg-purple-500',
    },
    {
      icon: Calendar,
      title: 'Flexible Learning',
      description: 'Adaptable schedules and learning methods to fit every student\'s needs.',
      color: 'bg-orange-500',
    },
    {
      icon: Bell,
      title: 'Live Updates',
      description: 'Real-time notifications and announcements to keep everyone informed.',
      color: 'bg-red-500',
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Secure and nurturing campus environment where students can learn, grow, and develop their full potential.',
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
    },
    {
      icon: Globe,
      title: 'Holistic Development',
      description: 'Focus on overall personality development through sports, cultural activities, and leadership programs.',
      color: 'bg-gradient-to-br from-teal-500 to-teal-600',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock academic support and guidance through our digital platform and dedicated faculty.',
      color: 'bg-gradient-to-br from-pink-500 to-pink-600',
    },
    {
      icon: Zap,
      title: 'Modern Facilities',
      description: 'State-of-the-art infrastructure with well-equipped labs, library, and sports facilities for comprehensive learning.',
      color: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
      description: 'Secure and nurturing environment where students can thrive and learn.',
      color: 'bg-indigo-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
          >
            <Star className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Shakti Shanti Academy
            </span>
            ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            With 25+ years of educational excellence, we provide a comprehensive learning experience 
            that prepares students for success in an ever-changing world.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl text-white max-w-4xl mx-auto">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-3xl font-bold mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Join our community of 1800+ students and experience the difference of quality education 
              with modern facilities and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/apply-admission"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply for Admission
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </motion.div>
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Choose Shakti Shanti Academy?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive educational experience that prepares students for success 
            in an ever-changing world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;