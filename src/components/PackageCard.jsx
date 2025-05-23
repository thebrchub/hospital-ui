import React from 'react';
import { motion } from 'framer-motion';

const PackageCard = ({ name, description, price }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{name}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{price}</div>

      <button
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={() => alert(`Booking package: ${name}`)}
      >
        Book Now
      </button>
    </motion.div>
  );
};

export default PackageCard;
