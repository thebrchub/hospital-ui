import React, { useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import AppointmentForm from '../components/AppointmentForm';

// Full doctor list
const doctorList = [
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
    designation: 'Senior Cardiologist',
    specialization: 'Cardiology',
    image: '/images/FemaleDr.png',
  },
  {
    id: 4,
    name: 'Dr. Vikram Mehta',
    designation: 'Skin Specialist',
    specialization: 'Dermatology',
    image: '/images/MaleDr.png',
  },
  {
    id: 5,
    name: 'Dr. Neha Sharma',
    designation: 'Child Specialist',
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

const Doctor = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <main className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-semi-bold text-center text-gray-800 dark:text-white mb-10">
        Meet Our Doctors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {doctorList.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onBook={() => setSelectedDoctor(doctor)}
          />
        ))}
      </div>

      {selectedDoctor && (
        <AppointmentForm
          doctor={selectedDoctor.name}
          onClose={() => setSelectedDoctor(null)}
        />
      )}
    </main>
  );
};

export default Doctor;
