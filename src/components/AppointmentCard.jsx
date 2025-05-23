import React from 'react';

const AppointmentCard = ({ doctor, time, onBook }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 w-full max-w-sm dark:bg-gray-700 dark:text-white">
      <h3 className="text-lg font-semibold">{doctor}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">Available: {time}</p>
      <button
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={onBook}
      >
        Book
      </button>
    </div>
  );
};

export default AppointmentCard;
