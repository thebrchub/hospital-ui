import React, { useState } from 'react';
import AppointmentCard from '../components/AppointmentCard';
import AppointmentForm from '../components/AppointmentForm'; // ⬅️ Import form component
import { FaClinicMedical, FaUserMd } from 'react-icons/fa';

const Appointment = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [doctorDetails, setDoctorDetails] = useState(null); // for passing complete doctor info

  const specialities = ['Cardiology', 'Dermatology', 'Pediatrics', 'Orthopedics', 'ENT'];

  const doctorData = [
    { name: 'Dr. Anjali Rao', speciality: 'Cardiology', time: '09:00 AM - 04:00 PM' },
    { name: 'Dr. Vikram Mehta', speciality: 'Dermatology', time: '09:00 AM - 04:00 PM' },
    { name: 'Dr. Neha Sharma', speciality: 'Pediatrics', time: '09:00 AM - 04:00 PM' },
    { name: 'Dr. Aakash Jain', speciality: 'Orthopedics', time: '09:00 AM - 04:00 PM' },
    { name: 'Dr. Kavita Reddy', speciality: 'ENT', time: '09:00 AM - 04:00 PM' },
  ];

  const handleBookAppointment = (doctorName) => {
    const doctorInfo = doctorData.find(doc => doc.name === doctorName);
    setDoctorDetails(doctorInfo);
    setShowForm(true);
  };

  const filteredDoctors = selectedSpeciality
    ? doctorData.filter((doc) => doc.speciality === selectedSpeciality)
    : doctorData;

  const filteredAppointments = doctorData.filter((doc) => {
    if (selectedDoctor) return doc.name === selectedDoctor;
    if (selectedSpeciality) return doc.speciality === selectedSpeciality;
    return true;
  });

  return (
    <div className="px-6 py-12 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Request for an Appointment
      </h1>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-gray-700 shadow rounded-xl p-6 mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Speciality */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-full text-blue-600">
            <FaClinicMedical />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
              Select a Speciality
            </label>
            <select
              value={selectedSpeciality}
              onChange={(e) => {
                setSelectedSpeciality(e.target.value);
                setSelectedDoctor('');
              }}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            >
              <option value="">-- Select Speciality --</option>
              {specialities.map((spec, idx) => (
                <option key={idx} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Doctor */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-full text-blue-600">
            <FaUserMd />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
              Select a Doctor
            </label>
            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              disabled={!selectedSpeciality}
            >
              <option value="">-- Select Doctor --</option>
              {filteredDoctors.map((doc, idx) => (
                <option key={idx} value={doc.name}>{doc.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Appointment Cards */}
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Available Appointments</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {filteredAppointments.map((appt, idx) => (
          <AppointmentCard
            key={idx}
            doctor={appt.name}
            time={appt.time}
            onBook={() => handleBookAppointment(appt.name)}
          />
        ))}
      </div>

      {/* Appointment Form */}
      {showForm && doctorDetails && (
        <AppointmentForm
          doctor={doctorDetails.name}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default Appointment;
