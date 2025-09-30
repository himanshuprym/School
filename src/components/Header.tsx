import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, LogOut, GraduationCap, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedUser, setLoggedUser] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('loggedUser');
      if (raw) setLoggedUser(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
    const handler = (ev: Event) => {
      const ce = ev as CustomEvent;
      if (ce.detail) setLoggedUser(ce.detail);
      else setLoggedUser(null);
    };
    window.addEventListener('authChanged', handler as EventListener);
    return () => window.removeEventListener('authChanged', handler as EventListener);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedUser');
    setLoggedUser(null);
    navigate('/');
    window.dispatchEvent(new CustomEvent('authChanged', { detail: null }));
  };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/team', label: 'Team' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/notices', label: 'Notices' },
    { path: '/neev', label: 'NEEV' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.div 
              className="flex-shrink-0 flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <img 
                  src="/assest/logo.png" 
                  alt="Logo" 
                  className="h-12 w-12 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300" 
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div className="ml-3">
                <h1 className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Shakti Shanti Academy
                </h1>
                <p className={`text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-blue-200'
                }`}>
                  The Roots of Education
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className={`h-5 w-5 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-400' : 'text-white/70'
                }`} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') { navigate(`/search?q=${encodeURIComponent(searchQuery)}`); } }}
                placeholder="Search..."
                className={`block w-full pl-10 pr-3 py-3 rounded-2xl leading-5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                  isScrolled 
                    ? 'bg-gray-100 border border-gray-200 text-gray-900 placeholder-gray-500 hover:bg-white' 
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 hover:bg-white/20'
                }`}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? isScrolled
                      ? 'text-yellow-600 bg-yellow-50'
                      : 'text-yellow-400 bg-white/10'
                    : isScrolled
                      ? 'text-gray-700 hover:text-yellow-600 hover:bg-gray-100'
                      : 'text-white/90 hover:text-yellow-400 hover:bg-white/10'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                  />
                )}
              </Link>
            ))}

            {/* User Actions */}
            <div className="flex items-center space-x-3 ml-4">
              {loggedUser && (
                <>
                  <Link
                    to="/notices"
                    className={`p-2 rounded-xl transition-all duration-300 ${
                      isScrolled
                        ? 'text-gray-600 hover:text-yellow-600 hover:bg-gray-100'
                        : 'text-white/90 hover:text-yellow-400 hover:bg-white/10'
                    }`}
                  >
                    <Bell className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={handleLogout}
                    title="Logout"
                    className={`p-2 rounded-xl transition-all duration-300 ${
                      isScrolled
                        ? 'text-red-600 hover:bg-red-50'
                        : 'text-white/90 hover:text-red-400 hover:bg-white/10'
                    }`}
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:text-yellow-600 hover:bg-gray-100'
                  : 'text-white hover:text-yellow-400 hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-lg rounded-2xl mt-4 shadow-xl border border-gray-200/50">
                {/* Mobile Search */}
                <div className="mb-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={mobileSearchQuery}
                      onChange={e => setMobileSearchQuery(e.target.value)}
                      onKeyDown={e => { if (e.key === 'Enter') { setIsMenuOpen(false); navigate(`/search?q=${encodeURIComponent(mobileSearchQuery)}`); } }}
                      placeholder="Search..."
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                </div>
                
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-yellow-600 bg-yellow-50'
                        : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                {loggedUser && (
                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center gap-2 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors duration-300"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;