import React, { useState } from 'react';
import PackageCard from './PackageCard';
import PackageFilter from './PackageFilter';
import { motion } from 'framer-motion';

const PackageList = ({ packages }) => {
  const [category, setCategory] = useState('All');

  const filteredPackages =
    category === 'All' ? packages : packages.filter((p) => p.category === category);

  return (
    <section id="packages" className="px-6 py-12 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Health Checkup Packages
      </h2>

      <PackageFilter selected={category} onSelect={setCategory} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPackages.map((pkg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <PackageCard {...pkg} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PackageList;
