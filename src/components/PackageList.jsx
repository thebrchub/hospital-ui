import React from 'react';
import PackageCard from './PackageCard';

const PackageList = ({ packages }) => {
  return (
    <section id="packages" className="px-6 py-12 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">Health Checkup Packages</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, idx) => (
          <PackageCard key={idx} {...pkg} />
        ))}
      </div>
    </section>
  );
};

export default PackageList;
