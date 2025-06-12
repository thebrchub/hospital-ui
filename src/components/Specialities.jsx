import React from 'react';
import { Heart, Brain, Lungs, Bone, Stethoscope, Syringe, Eye, Kidney, ShieldCheck, Baby } from 'lucide-react';

const specialities = [
  { icon: <Heart className="w-8 h-8 text-red-500" />, name: 'Cardiology' },
  { icon: <Lungs className="w-8 h-8 text-blue-500" />, name: 'Pulmonology' },
  { icon: <Kidney className="w-8 h-8 text-purple-500" />, name: 'Nephrology' },
  { icon: <Brain className="w-8 h-8 text-pink-500" />, name: 'Neurology' },
  { icon: <Bone className="w-8 h-8 text-yellow-600" />, name: 'Orthopedics' },
  { icon: <Eye className="w-8 h-8 text-teal-500" />, name: 'Ophthalmology' },
  { icon: <Stethoscope className="w-8 h-8 text-indigo-500" />, name: 'General Medicine' },
  { icon: <Syringe className="w-8 h-8 text-green-600" />, name: 'Anesthesiology' },
  { icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />, name: 'Immunology' },
  { icon: <Baby className="w-8 h-8 text-rose-500" />, name: 'Pediatrics' },
];

const Specialities = () => {
  return (
    <section id="specialities" className="py-16 bg-gray-50 dark:bg-gray-900 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Our Specialities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {specialities.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg hover:shadow-lg transition"
          >
            <div>{item.icon}</div>
            <div className="text-gray-700 dark:text-white font-medium text-lg">{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialities;
