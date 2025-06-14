import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="relative h-[80vh] flex flex-col justify-center items-center text-center text-white px-6"
      style={{
        backgroundImage: "url('images/hero-illustration.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-gradient-to-r from-black-600/80 to-black-600/80 absolute inset-0 z-0" />

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4">Book Appointments & Health Packages</h2>
        <p className="text-lg mb-6">Seamless health care access, just a click away.</p>
        <a href="#appointments" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Book Now
        </a>
      </div>

      {/* Floating Tabs */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 bg-white p-3 rounded-full shadow-lg z-10">
        <Link to="/appointments" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">
          Book Appointment
        </Link>
        <a href="#doctors" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">
          Find Your Doctor
        </a>
        <a href="#eportal" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">
          E-Portal (Self Help)
        </a>
      </div>
    </section>
  );
};

export default Hero;
