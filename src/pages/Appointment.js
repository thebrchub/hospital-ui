import React from 'react';
import AppointmentCard from '../components/AppointmentCard';

const Appointments = () => {
  const appointments = [
    { doctor: 'Dr. Anjali Rao', time: '10:00 AM - 11:00 AM' },
    { doctor: 'Dr. Vikram Mehta', time: '11:30 AM - 12:30 PM' },
    { doctor: 'Dr. Neha Sharma', time: '2:00 PM - 3:00 PM' },
  ];

  const handleBookAppointment = (doctor) => {
    alert(`Booking confirmed with ${doctor}`);
  };

  return (
    <section className="px-6 py-12 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-center mb-6">Available Appointments</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {appointments.map((appt, idx) => (
          <AppointmentCard
            key={idx}
            doctor={appt.doctor}
            time={appt.time}
            onBook={() => handleBookAppointment(appt.doctor)}
          />
        ))}
      </div>
    </section>
  );
};

export default Appointments;
