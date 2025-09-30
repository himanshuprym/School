import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { Toaster } from 'react-hot-toast';
=======
>>>>>>> 4cc650e723a573cbd852d2ec4570084b885198d2
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LoginSection from './components/LoginSection';
import FeaturesSection from './components/FeaturesSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';
import About from './components/pages/About';
import Neev from './components/pages/NEEV';
import TeamSection from './components/TeamSection';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import ApplyAdmission from './components/pages/ApplyAdmission';
import Notices from './components/pages/Notices';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import SearchResults from './components/pages/SearchResults';


function App() {
  return (
<<<<<<< HEAD
    <>
      <Router>
        <div className="min-h-screen">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <LoginSection />
                  <FeaturesSection />
                  <StatsSection />
                </>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/neev" element={<Neev />} />
              <Route path="/team" element={<TeamSection />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/apply-admission" element={<ApplyAdmission />} />
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
              <Route path="/notices" element={<Notices />} />
              <Route path="/search" element={<SearchResults />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            color: '#fff',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
            style: {
              background: 'rgba(16, 185, 129, 0.95)',
              color: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
            style: {
              background: 'rgba(239, 68, 68, 0.95)',
              color: '#fff',
            },
          },
        }}
      />
    </>
=======
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <LoginSection />
                <FeaturesSection />
                <StatsSection />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/neev" element={<Neev />} />
            <Route path="/team" element={<TeamSection />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply-admission" element={<ApplyAdmission />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/search" element={<SearchResults />} />
            {/* Add more routes here as you create more pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
>>>>>>> 4cc650e723a573cbd852d2ec4570084b885198d2
  );
}

export default App;