import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

// Page Components
import Home from './pages/Home';
import Appointments from './pages/Appointment';
import Packages from './pages/Packages';
import Doctor from './pages/Doctors';

function App() {
  return (
    <Router>
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

        {/* Footer visible on all pages */}
        <footer className="text-center py-6 bg-white dark:bg-gray-800">
          <p>© 2025 HospitalCare. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
