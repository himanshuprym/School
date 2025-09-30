import React from 'react';
import { BookOpen, Users, Award, Calendar, Bell, Shield, Laptop, Globe, Clock, Star, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import FeatureCard from './ui/FeatureCard';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'CBSE Excellence',
      description: 'Comprehensive CBSE curriculum with modern teaching methodologies and continuous assessment for holistic development.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
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
      </div>
    </section>
  );
};

export default FeaturesSection;