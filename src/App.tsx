import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';
import FloatingCVButton from './components/FloatingCVButton';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const CertificatesPage = lazy(() => import('./pages/CertificatesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));


import AutoScrollToTop from "./components/AutoScrollToTop";

function AnimatedRoutes() {
  const location = useLocation();

  return (
       <>
    <AutoScrollToTop />
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
     </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ScrollProgress />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          }
        >
          <main>
            <AnimatedRoutes />
          </main>
        </Suspense>

        <Footer />
        <WhatsAppButton />
        <FloatingCVButton />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
