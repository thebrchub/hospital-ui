import React from 'react';

const PackageCard = ({ name, description, price }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{name}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{price}</div>
    </div>
  );
};

export default PackageCard;
