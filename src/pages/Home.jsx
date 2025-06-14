import React, { useState } from 'react';
import Hero from '../components/Hero';
import Specialities from '../components/Specialities';
import HealthPackages from '../components/HealthPackages';
import DoctorCard from '../components/DoctorCard';
import AppointmentForm from '../components/AppointmentForm';
import Testimonials from '../components/Testimonials';
import Blogs from '../components/Blogs';


const allDoctors = [
  {
    id: 1,
    name: 'Dr. Narender Murthy',
    designation: 'Senior Consultant',
    specialization: 'Plastic Surgery',
    image: '/images/MaleDr.png',
  },
  {
    id: 2,
    name: 'Dr. Asha Reddy',
    designation: 'Consultant',
    specialization: 'Dermatology',
    image: '/images/FemaleDr.png',
  },
  {
    id: 3,
    name: 'Dr. Anjali Rao',
    designation: 'Cardiology Specialist',
    specialization: 'Cardiology',
    image: '/images/FemaleDr.png',
  },
  {
    id: 4,
    name: 'Dr. Vikram Mehta',
    designation: 'Senior Dermatologist',
    specialization: 'Dermatology',
    image: '/images/MaleDr.png',
  },
  {
    id: 5,
    name: 'Dr. Neha Sharma',
    designation: 'Pediatric Consultant',
    specialization: 'Pediatrics',
    image: '/images/FemaleDr.png',
  },
  {
    id: 6,
    name: 'Dr. Aakash Jain',
    designation: 'Orthopedic Surgeon',
    specialization: 'Orthopedics',
    image: '/images/MaleDr.png',
  },
  {
    id: 7,
    name: 'Dr. Kavita Reddy',
    designation: 'ENT Specialist',
    specialization: 'ENT',
    image: '/images/FemaleDr.png',
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
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
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
      <Testimonials />

      <Blogs />
    </main>
  );
};

export default Home;
