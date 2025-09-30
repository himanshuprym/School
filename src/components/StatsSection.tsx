<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { TrendingUp, Users, GraduationCap, Award, BookOpen, Calendar, Bell, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import StatCard from './ui/StatCard';
import AnimatedCounter from './ui/AnimatedCounter';

const StatsSection: React.FC = () => {
  const [stats, setStats] = useState({
    students: 1800,
    teachers: 81,
    notices: 25,
    events: 15
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [studentsRes, teachersRes, noticesRes, eventsRes] = await Promise.all([
          supabase.from('students').select('id', { count: 'exact' }),
          supabase.from('teachers').select('id', { count: 'exact' }),
          supabase.from('notices').select('id', { count: 'exact' }),
          supabase.from('events').select('id', { count: 'exact' })
        ]);

        setStats({
          students: studentsRes.count || 1800,
          teachers: teachersRes.count || 81,
          notices: noticesRes.count || 25,
          events: eventsRes.count || 15
        });
      } catch (error) {
        // Keep default values
      }
    };

    fetchStats();
  }, []);

  const statsData = [
    {
      number: stats.students,
      label: 'Active Students',
      description: 'Currently enrolled across all programs',
      icon: Users,
      isCounter: true,
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: stats.teachers,
      label: 'Expert Teachers',
      description: 'Qualified educators with advanced degrees',
      icon: GraduationCap,
      isCounter: true,
      color: 'from-green-500 to-green-600'
=======
import React from 'react';
import { TrendingUp } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      number: '1,800+',
      label: 'Active Students',
      description: 'Currently enrolled across all programs',
    },
    {
      number: '81+',
      label: 'Expert Teachers',
      description: 'Qualified educators with advanced degrees',
>>>>>>> 4cc650e723a573cbd852d2ec4570084b885198d2
    },
    {
      number: '95%',
      label: 'Success Rate',
      description: 'Students achieving their academic goals',
<<<<<<< HEAD
      icon: Award,
      isCounter: false,
      color: 'from-yellow-500 to-yellow-600'
=======
>>>>>>> 4cc650e723a573cbd852d2ec4570084b885198d2
    },
    {
      number: '25+',
      label: 'Years Excellence',
      description: 'Proven track record in education',
<<<<<<< HEAD
      icon: BookOpen,
      isCounter: false,
      color: 'from-purple-500 to-purple-600'
=======
>>>>>>> 4cc650e723a573cbd852d2ec4570084b885198d2
    },
  ];

  return (
<<<<<<< HEAD
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center mr-4 shadow-2xl"
            >
              <TrendingUp className="w-10 h-10 text-white" />
            </motion.div>
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Our Impact
              </h2>
              <p className="text-blue-200 text-lg">by the Numbers</p>
            </div>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            These statistics reflect our unwavering commitment to educational excellence 
            and the success of our students over 25+ years.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 group-hover:border-yellow-400/50 transition-all duration-500 shadow-2xl group-hover:shadow-yellow-500/20">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.isCounter && typeof stat.number === 'number' ? (
                    <AnimatedCounter end={stat.number} suffix="+" />
                  ) : (
                    stat.number
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-yellow-200 transition-colors duration-300">
                  {stat.label}
                </h3>
                
                <p className="text-blue-200 text-sm leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-center mb-4">
              <Bell className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              <AnimatedCounter end={stats.notices} suffix="+" />
            </div>
            <p className="text-blue-200">Active Notices</p>
          </div>
          
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              <AnimatedCounter end={stats.events} suffix="+" />
            </div>
            <p className="text-blue-200">Upcoming Events</p>
          </div>
          
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">CBSE</div>
            <p className="text-blue-200">Affiliated Board</p>
          </div>
        </motion.div>
=======
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-8 h-8 text-yellow-400 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Our Impact by Numbers
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            These statistics reflect our commitment to educational excellence and student success.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 group-hover:border-yellow-400 transition-colors duration-300">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
>>>>>>> 4cc650e723a573cbd852d2ec4570084b885198d2
      </div>
    </section>
  );
};

export default StatsSection;