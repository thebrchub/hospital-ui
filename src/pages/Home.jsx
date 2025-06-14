import React, { useState } from 'react';
import Hero from '../components/Hero';
import Specialities from '../components/Specialities';
import HealthPackages from '../components/HealthPackages';
import DoctorCard from '../components/DoctorCard';
import AppointmentForm from '../components/AppointmentForm';

const allDoctors = [
  {
    id: 1,
    name: 'Dr. Narender Manickavachakan',
    designation: 'Senior Consultant',
    specialization: 'Plastic Surgery',
    image: '/public/MaleDr.png',
  },
  {
    id: 2,
    name: 'Dr. Asha Reddy',
    designation: 'Consultant',
    specialization: 'Dermatology',
    image: '/images/dr-asha.jpg',
  },
  {
    id: 3,
    name: 'Dr. Anjali Rao',
    designation: 'Cardiology Specialist',
    specialization: 'Cardiology',
    image: '/images/dr-anjali.jpg',
  },
  {
    id: 4,
    name: 'Dr. Vikram Mehta',
    designation: 'Senior Dermatologist',
    specialization: 'Dermatology',
    image: '/images/dr-vikram.jpg',
  },
  {
    id: 5,
    name: 'Dr. Neha Sharma',
    designation: 'Pediatric Consultant',
    specialization: 'Pediatrics',
    image: '/images/dr-neha.jpg',
  },
  {
    id: 6,
    name: 'Dr. Aakash Jain',
    designation: 'Orthopedic Surgeon',
    specialization: 'Orthopedics',
    image: '/images/dr-aakash.jpg',
  },
  {
    id: 7,
    name: 'Dr. Kavita Reddy',
    designation: 'ENT Specialist',
    specialization: 'ENT',
    image: '/images/dr-kavita.jpg',
  },
];

const Home = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Our Specialities */}
      <Specialities />

      {/* Health Packages */}
      <HealthPackages />

      {/* Doctor Preview Section */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900" id="doctors">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Our Doctors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {allDoctors.slice(0, 5).map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBook={() => setSelectedDoctor(doctor)}
            />
          ))}
        </div>

        {/* Show All Doctors Button */}
        <div className="mt-8 text-center">
          <a
            href="/doctors"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Show All Doctors
          </a>
        </div>
      </section>

      {/* Appointment Modal */}
      {selectedDoctor && (
        <AppointmentForm
          doctor={selectedDoctor.name}
          onClose={() => setSelectedDoctor(null)}
        />
      )}
    </main>
  );
};

export default Home;
