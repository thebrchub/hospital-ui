// DoctorCard.jsx
import React from 'react';

const DoctorCard = ({ doctor, onBook }) => {
  return (
    <div className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-300 dark:border-gray-600 flex flex-col items-center text-center">
      {/* Doctor Photo */}
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-32 h-32 object-cover rounded-full border-4 border-blue-900"
      />

      {/* Name */}
      <h3 className="mt-4 text-lg font-semi-bold text-blue-900 dark:text-white">
        {doctor.name}
      </h3>

      {/* Designation */}
      <p className="text-sm font-regular text-gray-700 dark:text-gray-300 mt-1">
        {doctor.designation}
      </p>

      {/* Specialization */}
      <p className="text-sm text-purple-700 font-semi-bold mt-1">
        {doctor.specialization}
      </p>

      {/* Book Button */}
      <button
        onClick={onBook}
        className="mt-4 bg-indigo-800 hover:bg-indigo-900 text-white text-sm font-regular px-4 py-2 rounded-md"
      >
        Book an Appointment
      </button>
    </div>
  );
};

export default DoctorCard;
