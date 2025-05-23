import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppointmentCard from './components/AppointmentCard';
import PackageList from './components/PackageList';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const dummyAppointments = [
    { doctor: 'Dr. Anjali Rao', time: '10:00 AM - 11:00 AM' },
    { doctor: 'Dr. Vikram Mehta', time: '11:30 AM - 12:30 PM' },
    { doctor: 'Dr. Neha Sharma', time: '2:00 PM - 3:00 PM' },
  ];

  const dummyPackages = [
    { title: 'Basic Health Check', price: '₹999', description: 'Blood, urine, ECG & consultation' },
    { title: 'Comprehensive Checkup', price: '₹2499', description: 'Full body test with reports' },
    { title: 'Diabetes Care', price: '₹799', description: 'Sugar, HbA1c, diet consultation' },
  ];

  const handleBookAppointment = (doctor) => {
    alert(`Booking confirmed with ${doctor}`);
  };
  const packages = [
  {
    name: 'Basic Health Checkup',
    description: 'Covers blood tests, sugar level, BP, and general consultation.',
    price: '₹999',
  },
  {
    name: 'Advanced Full Body Checkup',
    description: 'Includes all basic tests + ECG, liver & kidney profile.',
    price: '₹2499',
  },
  {
    name: 'Senior Citizen Package',
    description: 'Tailored for 60+ with bone density, eye, and heart screening.',
    price: '₹1999',
  },
];

    function App() {
      return (
        <div className="App">
          <PackageList packages={packages} />
        </div>
      );
    }

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <ThemeToggle />
      <Hero />

      {/* Appointment Section */}
      <section id="appointments" className="px-6 py-12 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center mb-6">Available Appointments</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {dummyAppointments.map((appt, idx) => (
            <AppointmentCard
              key={idx}
              doctor={appt.doctor}
              time={appt.time}
              onBook={() => handleBookAppointment(appt.doctor)}
            />
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <PackageList packages={dummyPackages} />

      {/* Footer */}
      <footer id="contact" className="text-center py-6 bg-white dark:bg-gray-800">
        <p>© 2025 HospitalCare. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
