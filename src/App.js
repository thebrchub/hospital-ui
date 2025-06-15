import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { AuthProvider } from './context/AuthContext';

// Page Components
import Home from './pages/Home';
import Appointments from './pages/Appointment';
import Packages from './pages/Packages';
import Doctor from './pages/Doctors';

function App() {
  // 👇 Global polling logic here
  useEffect(() => {
    const pollBackend = () => {
      fetch('https://hospital-app-deploy.onrender.com/v1/public/hello')
        .then((res) => res.json())
        .then((data) => console.log('[Polling]', data))
        .catch((err) => console.error('[Polling Error]', err));
    };

    pollBackend(); // initial call
    const interval = setInterval(pollBackend, 10000); // every 10s

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <Router>
      <AuthProvider>
        <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white min-h-screen">
          <Navbar />
          <ThemeToggle />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctor />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>

          <footer className="text-center py-6 bg-white dark:bg-gray-800">
            <p>© 2025 HospitalCare. All rights reserved.</p>
          </footer>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
