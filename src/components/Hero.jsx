import React from 'react';

const Hero = () => {
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6">
      <h2 className="text-4xl font-bold mb-4">Book Appointments & Health Packages</h2>
      <p className="text-lg mb-6">Seamless health care access, just a click away.</p>
      <a href="#appointments" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
        Book Now
      </a>
    </section>
  );
};

export default Hero;
