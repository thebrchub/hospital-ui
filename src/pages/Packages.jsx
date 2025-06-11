import React from 'react';
import PackageList from '../components/PackageList';

const packages = [
  {
    name: "Basic Health Checkup",
    description: "Covers essential blood and organ tests.",
    price: "₹799",
    category: "Basic"
  },
  {
    name: "Full Body Checkup",
    description: "Complete analysis with advanced diagnostics.",
    price: "₹1999",
    category: "Advanced"
  },
  {
    name: "Senior Citizen Checkup",
    description: "Tailored for age-related concerns.",
    price: "₹1499",
    category: "Senior"
  },
];

const Packages = () => <PackageList packages={packages} />;

export default Packages;
