
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ravi Kumar',
    feedback: 'The doctors were very attentive and the whole process was smooth. I felt truly cared for.',
    rating: 5,
  },
  {
    name: 'Sunita Desai',
    feedback: 'Quick appointments and great care! The staff was polite and professional.',
    rating: 4,
  },
  {
    name: 'Amit Joshi',
    feedback: 'Excellent facilities and experienced doctors. Would highly recommend to family and friends.',
    rating: 5,
  },
  {
    name: 'Meera Patel',
    feedback: 'The consultation was seamless and the health checkup packages are really worth it!',
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        What Our Patients Say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-700 dark:text-gray-300 mb-4">"{t.feedback}"</p>
            <div className="flex items-center justify-between">
              <span className="font-semi-bold text-gray-900 dark:text-white">{t.name}</span>
              <div className="flex">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
