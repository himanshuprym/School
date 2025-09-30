import React, { useEffect, useState } from 'react';
import { User, Lock, ChevronDown, LogIn, LogOut, GraduationCap, BookOpen, Users, Sparkles, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase, signInWithCredentials } from '../lib/supabase';
import toast from 'react-hot-toast';
import LoadingSpinner from './ui/LoadingSpinner';
import ModernCard from './ui/ModernCard';
import GlassCard from './ui/GlassCard';
import AnimatedBackground from './ui/AnimatedBackground';

// Minimal fallback users in case fetch fails
const FALLBACK_USERS = [
  {
    admissionId: 'himanshu123',
    teacherId: 'himanshu123',
    email: 'himanshu@gmail.com',
    password: '123',
    name: 'Himanshu',
    roles: ['student', 'teacher', 'admin'],
    dob: '2005-01-01',
    bloodGroup: 'B+',
    className: 'XII',
    section: 'A',
    profilePhoto: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
];

// Minimal fallback teachers
const FALLBACK_TEACHERS = [
  {
    teacherId: 'teacher001',
    password: 'abc',
    name: 'Teacher One',
    roles: ['teacher'],
    email: 'teacher.one@school.edu',
    profilePhoto: '/data/images/teacher_placeholder.jpg',
    classes: ['IX'],
    sections: ['A']
  }
];

const LoginSection: React.FC = () => {
  const [admissionId, setAdmissionId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('123');
  const [role, setRole] = useState('student');
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [users, setUsers] = useState<any[]>(FALLBACK_USERS);
  const [teachers, setTeachers] = useState<any[]>(FALLBACK_TEACHERS);
  const [dataError, setDataError] = useState('');
  const [loggedUser, setLoggedUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // load logged user from localStorage
    try {
      const raw = localStorage.getItem('loggedUser');
      if (raw) setLoggedUser(JSON.parse(raw));
    } catch (e) {
      // ignore
    }

    // listen for global auth changes so this component stays in sync
    const authHandler = (ev: Event) => {
      try {
        const ce = ev as CustomEvent;
        if (ce.detail) setLoggedUser(ce.detail);
        else setLoggedUser(null);
      } catch (e) {
        setLoggedUser(null);
      }
    };
    window.addEventListener('authChanged', authHandler as EventListener);

    // fetch users.json and teachers.json in parallel
    (async () => {
      try {
        const [uRes, tRes] = await Promise.all([
          fetch('/data/users.json'),
          fetch('/data/teachers.json')
        ]);

        if (!uRes.ok) throw new Error(`/data/users.json HTTP ${uRes.status}`);
        if (!tRes.ok) throw new Error(`/data/teachers.json HTTP ${tRes.status}`);

        const [uList, tList] = await Promise.all([uRes.json(), tRes.json()]);

        if (!Array.isArray(uList) || uList.length === 0) {
          console.warn('User data is empty or invalid.');
          setUsers(FALLBACK_USERS);
        } else setUsers(uList);

        if (!Array.isArray(tList) || tList.length === 0) {
          console.warn('Teacher data is empty or invalid.');
          setTeachers(FALLBACK_TEACHERS);
        } else setTeachers(tList);
      } catch (err) {
        console.warn('Could not load user/teacher data, using fallback.', err);
        setDataError('Could not load user/teacher data; using fallbacks.');
        setUsers(FALLBACK_USERS);
        setTeachers(FALLBACK_TEACHERS);
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      window.removeEventListener('authChanged', authHandler as EventListener);
    };
  }, []);

  const roles = [
    { value: 'student', label: 'Student', icon: GraduationCap, color: 'from-blue-500 to-blue-600' },
    { value: 'teacher', label: 'Teacher', icon: BookOpen, color: 'from-green-500 to-green-600' },
    { value: 'admin', label: 'Administrator', icon: Users, color: 'from-purple-500 to-purple-600' },
  ];

    try {
      localStorage.removeItem('loggedUser');
    } catch (e) {
      // ignore
    }
    e.preventDefault();
    toast.success('Logged out successfully');
    try {
      window.dispatchEvent(new CustomEvent('authChanged', { detail: null }));
    } catch (e) {
      // ignore
    }
    navigate('/');
  };

  const goToDashboard = () => {
    if (!loggedUser) return;
    if (loggedUser.loggedAs === 'teacher') {
      navigate('/teacher-dashboard', { state: { user: loggedUser } });
    } else {
      navigate('/student-dashboard', { state: { user: loggedUser } });
    }
  };

  const currentRole = roles.find(r => r.value === role);

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
    <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* Background decorations */}
      <AnimatedBackground variant="geometric" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
          >
            <Shield className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Access Your Portal
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Sign in to access your personalized dashboard and stay connected with your academic journey
          </motion.p>
        </motion.div>

        <div className="max-w-md mx-auto">
          {loggedUser ? (
            <GlassCard
              gradient="blue"
              blur="lg"
              onClick={goToDashboard}
              role="button"
              tabIndex={0}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              onClick={goToDashboard}
              role="button"
              tabIndex={0}
              className="group cursor-pointer transition-all duration-500 hover:scale-105 p-8"
            >
              <div className="flex items-center gap-6 relative">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                <div className="relative">
                  <motion.div 
                    className="w-20 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={loggedUser.profile_photo || '/assest/logo.png'} 
                      alt="profile" 
                      className="w-16 h-20 object-cover rounded-xl border-2 border-white/50 group-hover:border-white/80 transition-colors duration-300" 
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white shadow-lg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping opacity-75" />
                  </motion.div>
                </div>
                
                <div className="flex-1">
                  <motion.div 
                    className="text-sm font-medium mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Welcome back
                  </motion.div>
                  <motion.div 
                    className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {loggedUser.name}
                  </motion.div>
                  <motion.div 
                    className="text-sm text-gray-600 mb-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {loggedUser.loggedAs === 'teacher' 
                      ? `Teacher ID: ${loggedUser.teacher_id}` 
                      : `Class ${loggedUser.class_name} • ${loggedUser.section}`
                    }
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-medium border border-blue-200/50 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors duration-300">
                      {loggedUser.loggedAs === 'teacher' ? 'Teacher Portal' : 'Student Portal'}
                    </div>
                    <motion.button
                      onClick={handleLogout}
                      title="Logout"
                      className="p-2 rounded-full bg-red-50 hover:bg-red-100 text-red-600 transition-all duration-200 hover:scale-110"
                      whileHover={{ rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <LogOut className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </GlassCard>
          ) : (
            <GlassCard
              gradient="purple"
              blur="lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="p-8 lg:p-10"
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className={`w-20 h-20 bg-gradient-to-br ${currentRole?.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl relative overflow-hidden group`}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  {currentRole?.icon && <currentRole.icon className="w-10 h-10 text-white" />}
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                    Sign In
                  </span>
                </motion.h3>
                <motion.p 
                  className="text-gray-600 text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Choose your role and enter your credentials
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">I am a</label>
                  <motion.label 
                    className="block text-sm font-semibold text-gray-700 mb-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    I am a
                  </motion.label>
                  <div className="relative">
                    <motion.button
                      type="button"
                      onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                      className="w-full bg-white/50 backdrop-blur-sm border-2 border-gray-200/50 rounded-2xl px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 flex items-center justify-between hover:bg-white/70 hover:border-blue-300/50 group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-3">
                        {currentRole?.icon && (
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <currentRole.icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                          </motion.div>
                        )}
                        <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{currentRole?.label}</span>
                      </div>
                      <motion.div
                        animate={{ rotate: showRoleDropdown ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                      </motion.div>
                    </motion.button>
                    {showRoleDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-lg border-2 border-gray-200/50 rounded-2xl shadow-2xl z-10 overflow-hidden"
                      >
                        {roles.map((roleOption) => (
                          <motion.button
                            key={roleOption.value}
                            type="button"
                            onClick={() => {
                              setRole(roleOption.value);
                              setShowRoleDropdown(false);
                            }}
                            className="w-full text-left px-6 py-4 hover:bg-blue-50/80 transition-all duration-200 flex items-center gap-3 group"
                            whileHover={{ x: 5 }}
                          >
                            <roleOption.icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                            <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{roleOption.label}</span>
                          </motion.button>
                        ))}
                      </motion.div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {role === 'student' && (
                  <>
                    <div>
                      <motion.label 
                        className="block text-sm font-semibold text-gray-700 mb-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        Admission ID
                      </motion.label>
                      <div className="relative">
                        <motion.div
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <User className="w-5 h-5" />
                        </motion.div>
                        <motion.input
                          type="text"
                          value={admissionId}
                          onChange={e => setAdmissionId(e.target.value)}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70 focus:bg-white/80"
                          placeholder="Enter your Admission ID"
                          required
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                        />
                      </div>
                    </div>
                    <div>
                      <motion.label 
                        className="block text-sm font-semibold text-gray-700 mb-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        Password
                      </motion.label>
                      <div className="relative">
                        <motion.div
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <Lock className="w-5 h-5" />
                        </motion.div>
                        <motion.input
                          type="password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70 focus:bg-white/80"
                          placeholder="Enter your password"
                          required
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0 }}
                        />
                      </div>
                    </div>
                  </>
                )}

                {role === 'teacher' && (
                  <>
                    <div>
                      <motion.label 
                        className="block text-sm font-semibold text-gray-700 mb-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        Teacher ID
                      </motion.label>
                      <div className="relative">
                        <motion.div
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <User className="w-5 h-5" />
                        </motion.div>
                        <motion.input
                          type="text"
                          value={teacherId}
                          onChange={e => setTeacherId(e.target.value)}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70 focus:bg-white/80"
                          placeholder="Enter your Teacher ID"
                          required
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                        />
                      </div>
                    </div>
                    <div>
                      <motion.label 
                        className="block text-sm font-semibold text-gray-700 mb-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        Password
                      </motion.label>
                      <div className="relative">
                        <motion.div
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <Lock className="w-5 h-5" />
                        </motion.div>
                        <motion.input
                          type="password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70 focus:bg-white/80"
                          placeholder="Enter your password"
                          required
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0 }}
                        />
                      </div>
                    </div>
                  </>
                )}

                {role === 'admin' && (
                  <>
                    <div>
                      <motion.label 
                        className="block text-sm font-semibold text-gray-700 mb-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        Email Address
                      </motion.label>
                      <div className="relative">
                        <motion.div
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <User className="w-5 h-5" />
                        </motion.div>
                        <motion.input
                          type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70 focus:bg-white/80"
                          placeholder="Enter your email"
                          required
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                        />
                      </div>
                    </div>
                    <div>
                      <motion.label 
                        className="block text-sm font-semibold text-gray-700 mb-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        Password
                      </motion.label>
                      <div className="relative">
                        <motion.div
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <Lock className="w-5 h-5" />
                        </motion.div>
                        <motion.input
                          type="password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70 focus:bg-white/80"
                          placeholder="Enter your password"
                          required
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0 }}
                        />
                      </div>
                    </div>
                  </>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative w-full ${loading ? 'bg-gray-400 cursor-not-allowed' : `bg-gradient-to-r ${currentRole?.color} hover:shadow-2xl`} text-white py-5 rounded-2xl font-bold transition-all duration-500 shadow-xl flex items-center justify-center space-x-3 overflow-hidden group`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  {/* Animated background */}
                  {!loading && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </>
                  )}
                  
                  {loading ? (
                    <>
                      <LoadingSpinner size="sm" />
                      <span>Signing In...</span>
                    </>
                  ) : (
                    <>
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <LogIn className="w-6 h-6" />
                      </motion.div>
                      <span>Sign In</span>
                    </>
                  )}
                </motion.button>
              </form>

              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <GlassCard gradient="blue" className="p-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <p className="text-sm text-blue-800 font-semibold">Demo Credentials</p>
                    <Sparkles className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-xs text-blue-700 space-y-2">
                    <p><strong>Student:</strong> himanshu123 / 123</p>
                    <p><strong>Teacher:</strong> Avinash / abc</p>
                  </div>
                </GlassCard>
              </motion.div>
            </GlassCard>
          )}
import toast from 'react-hot-toast';
        </div>
      </div>
import LoadingSpinner from './ui/LoadingSpinner';
export default LoginSection;