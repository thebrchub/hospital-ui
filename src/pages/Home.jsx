import React, { useState } from 'react';
import Hero from '../components/Hero';
import Specialities from '../components/Specialities';
import DoctorCard from '../components/DoctorCard';
import AppointmentForm from '../components/AppointmentForm';

const doctorList = [
  {
    id: 1,
    name: 'Dr. Narender Manickavachakan',
    designation: 'Senior Consultant',
    specialization: 'Plastic Surgery',
    image: '/images/dr-narender.jpg', // Place this image in your public/images folder
  },
  {
    id: 2,
    name: 'Dr. Asha Reddy',
    designation: 'Consultant',
    specialization: 'Dermatology',
    image: '/images/dr-asha.jpg',
  },
  // Add more doctors if needed
];

const Home = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <main>
      <Hero />
      <Specialities />

      {/* Doctor Section */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Our Doctors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {doctorList.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBook={() => setSelectedDoctor(doctor)}
            />
          ))}
        </div>
      </section>

      {/* Appointment Form Modal */}
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
