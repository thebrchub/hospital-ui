
import React, { useState } from 'react';

const categories = [
  'General Health Checkup',
  'Age-specific Checkup',
  'Condition-specific Checkup',
  'Women Health Checkup',
  'Executive Health Checkup',
];

const packagesData = {
  'General Health Checkup': [
    { name: 'Essential Wellness', price: '₹1499' },
    { name: 'Total Care Basic', price: '₹2499' },
    { name: 'Core Health Panel', price: '₹1999' },
    { name: 'General Gold Plan', price: '₹2999' },
  ],
  'Age-specific Checkup': [
    { name: 'Senior Shield 60+', price: '₹2199' },
    { name: 'Adult Active 40-60', price: '₹1799' },
    { name: 'Youth Vital 20-40', price: '₹1599' },
  ],
  'Condition-specific Checkup': [
    { name: 'Cardio Care', price: '₹2899' },
    { name: 'Liver Pro Panel', price: '₹1999' },
    { name: 'Thyroid Focus', price: '₹999' },
    { name: 'Diabetic Wellness', price: '₹1899' },
  ],
  'Women Health Checkup': [
    { name: 'Complete Women Plus', price: '₹2999' },
    { name: 'Fertility Focus', price: '₹2499' },
    { name: 'Well Woman Basic', price: '₹1899' },
  ],
  'Executive Health Checkup': [
    { name: 'Corporate Shield Basic', price: '₹3499' },
    { name: 'Leadership Wellness Elite', price: '₹4999' },
    { name: 'Manager Fit Plan', price: '₹3999' },
  ],
};

const HealthPackages = () => {
  const [activeCategory, setActiveCategory] = useState('General Health Checkup');

  return (
    <section id="health-packages" className="py-16 bg-white dark:bg-gray-950 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Health Checkup Packages
      </h2>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-6">
        {/* Sidebar */}
        <div className="md:w-1/4 flex md:flex-col gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-4 rounded-lg font-medium text-left transition border
                ${activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Package List */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {packagesData[activeCategory].map((pkg, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {pkg.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{pkg.price}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthPackages;
