import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, GraduationCap, Heart, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
=======
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  // Track logged in user role for portal link
>>>>>>> 4cc650e723a573cbd852d2ec4570084b885198d2
  const [portal, setPortal] = useState<{ label: string; to: string }>(
    { label: 'Student Portal', to: '/student-dashboard' }
  );

  useEffect(() => {
    try {
      const raw = localStorage.getItem('loggedUser');
      if (raw) {
        const user = JSON.parse(raw);
        if (user && user.loggedAs === 'teacher') {
          setPortal({ label: 'Teacher Portal', to: '/teacher-dashboard' });
        } else if (user && user.loggedAs === 'student') {
          setPortal({ label: 'Student Portal', to: '/student-dashboard' });
<<<<<<< HEAD
        }
      }
    } catch (e) {
      // ignore
    }
    
=======
        } else {
          setPortal({ label: 'Student Portal', to: '/student-dashboard' });
        }
      } else {
        setPortal({ label: 'Student Portal', to: '/student-dashboard' });
      }
    } catch (e) {
      setPortal({ label: 'Student Portal', to: '/student-dashboard' });
    }
    // Listen for login/logout events
>>>>>>> 4cc650e723a573cbd852d2ec4570084b885198d2
    const handler = () => {
      try {
        const raw = localStorage.getItem('loggedUser');
        if (raw) {
          const user = JSON.parse(raw);
          if (user && user.loggedAs === 'teacher') {
            setPortal({ label: 'Teacher Portal', to: '/teacher-dashboard' });
          } else if (user && user.loggedAs === 'student') {
            setPortal({ label: 'Student Portal', to: '/student-dashboard' });
<<<<<<< HEAD
=======
          } else {
            setPortal({ label: 'Student Portal', to: '/student-dashboard' });
>>>>>>> 4cc650e723a573cbd852d2ec4570084b885198d2
          }
        } else {
          setPortal({ label: 'Student Portal', to: '/student-dashboard' });
        }
      } catch (e) {
        setPortal({ label: 'Student Portal', to: '/student-dashboard' });
      }
    };
    window.addEventListener('authChanged', handler);
    return () => window.removeEventListener('authChanged', handler);
  }, []);
<<<<<<< HEAD

  const quickLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/team', label: 'Our Team' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/apply-admission', label: 'Admissions' },
    { to: '/neev', label: 'NEEV Program' },
    { to: '/contact', label: 'Contact' },
  ];

  const features = [
    { to: portal.to, label: portal.label },
    { to: '/notices', label: 'Notices' },
    { to: '/calendar', label: 'Academic Calendar' },
  ];

  const socialLinks = [
    { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
    { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* School Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Shakti Shanti Academy</h3>
                  <p className="text-blue-200 text-sm">The Roots of Education</p>
                </div>
              </div>
              
              <p className="text-blue-100 mb-6 leading-relaxed max-w-md">
                Nurturing young minds since 1999. We are committed to providing exceptional 
                education that prepares students for a bright future with modern facilities 
                and expert guidance.
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-blue-200 text-sm">Ami, Ambika Sthan, Dighwara, Saran, Bihar</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-blue-200 text-sm">+91 707096273</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-blue-200 text-sm">shaktishanti@ami.ac.in</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link 
                      to={link.to} 
                      className="text-blue-200 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-6 text-yellow-400">Student Portal</h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <motion.li 
                    key={feature.to}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link 
                      to={feature.to} 
                      className="text-blue-200 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {feature.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8">
                <a 
                  href="https://www.ssaami.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-200 hover:text-yellow-400 transition-colors duration-300 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Visit Official Website
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
=======
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* School Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <GraduationCap className="w-8 h-8 text-yellow-400" />
                <h3 className="text-xl font-bold">Shakti Shanti Academy</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed max-w-md text-sm">
                Nurturing young minds since 1999. We are committed to providing exceptional 
                education that prepares students for a bright future.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300 text-sm">Ami, Ambika Sthan, Dighwara, Saran, Bihar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300 text-sm">+91 707096273</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300 text-sm">shaktishanti@ami.ac.in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">About Us</Link></li>
                <li><Link to="/team" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Team</Link></li>
                <li><Link to="/gallery" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Gallery</Link></li>
                <li><Link to="/apply-admission" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Apply for Admission</Link></li>
                <li><Link to="/neev" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">NEEV</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Contact</Link></li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-base font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><Link to={portal.to} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">{portal.label}</Link></li>
                <li><Link to="/Notices" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Notice</Link></li>
                <li><Link to="/calendar" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Calendar</Link></li>
              </ul>
            </div>
>>>>>>> 4cc650e723a573cbd852d2ec4570084b885198d2
          </div>
        </div>

        {/* Bottom Section */}
<<<<<<< HEAD
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-blue-200 text-center lg:text-left"
            >
              <p className="flex items-center justify-center lg:justify-start gap-2">
                © 2025 Shakti Shanti Academy. Made with 
                <Heart className="w-4 h-4 text-red-400 animate-pulse" /> 
                for education.
              </p>
              <p className="text-sm mt-1">All rights reserved.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-200 hover:text-white hover:bg-yellow-400/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
=======
        <div className="border-t border-gray-800 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 sm:mb-0">
              © 2025 Shakti Shanti Academy. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="www.facebook.com" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="www.twitter.com" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="www.instagram.com" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="www.linkedin.com" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
>>>>>>> 4cc650e723a573cbd852d2ec4570084b885198d2
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;