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
    { name: 'Essential Wellness', price: '₹1499', image: '/images/general1.png' },
    { name: 'Total Care Basic', price: '₹2499', image: '/images/general2.png' },
    { name: 'Core Health Panel', price: '₹1999', image: '/images/general3.png' },
    { name: 'General Gold Plan', price: '₹2999', image: '/images/general4.png' },
  ],
  'Age-specific Checkup': [
    { name: 'Senior Shield 60+', price: '₹2199', image: '/images/age1.png' },
    { name: 'Adult Active 40-60', price: '₹1799', image: '/images/age2.png' },
    { name: 'Youth Vital 20-40', price: '₹1599', image: '/images/age3.png' },
  ],
  'Condition-specific Checkup': [
    { name: 'Cardio Care', price: '₹2899', image: '/images/cond1.png' },
    { name: 'Liver Pro Panel', price: '₹1999', image: '/images/cond2.png' },
    { name: 'Thyroid Focus', price: '₹999', image: '/images/cond3.png' },
    { name: 'Diabetic Wellness', price: '₹1899', image: '/images/cond4.png' },
  ],
  'Women Health Checkup': [
    { name: 'Complete Women Plus', price: '₹2999', image: '/images/women1.png' },
    { name: 'Fertility Focus', price: '₹2499', image: '/images/women2.png' },
    { name: 'Well Woman Basic', price: '₹1899', image: '/images/women3.png' },
  ],
  'Executive Health Checkup': [
    { name: 'Corporate Shield Basic', price: '₹3499', image: '/images/executive1.png' },
    { name: 'Leadership Wellness Elite', price: '₹4999', image: '/images/executive2.png' },
    { name: 'Manager Fit Plan', price: '₹3999', image: '/images/executive3.png' },
  ],
};

const HealthPackages = () => {
  const [activeCategory, setActiveCategory] = useState('General Health Checkup');

  return (
    <section id="health-packages" className="py-16 bg-white dark:bg-gray-950 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Health Checkup Packages
      </h2>

      {/* Top pill tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full shadow font-medium transition 
              ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border-blue-600 hover:bg-blue-100'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Package Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {packagesData[activeCategory].map((pkg, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
            {/* Image */}
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-40 object-cover"
            />
            {/* Text below image */}
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white">{pkg.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg mt-1 mb-4">{pkg.price}</p>
              <a
                href="#"
                className="text-blue-700 text-sm font-medium hover:underline"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthPackages;
