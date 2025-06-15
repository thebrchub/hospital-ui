import React, { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import AppointmentForm from '../components/AppointmentForm';

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    fetch('https://hospital-app-deploy.onrender.com/v1/public/doctor')
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((error) => {
        console.error('Failed to fetch doctors:', error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-white mb-6">Meet Our Doctors</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {doctors.map((doc) => (
          <DoctorCard
            key={doc.id}
            doctor={doc}
            onBook={() => setSelectedDoctor(doc)}
          />
        ))}
      </div>

      {selectedDoctor && (
        <AppointmentForm
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}
    </div>
  );
};

export default Doctor;
