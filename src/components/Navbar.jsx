import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md dark:bg-gray-800">
      <h1 className="text-xl font-bold text-blue-600 dark:text-white">HospitalCare</h1>

      <ul className="flex gap-6 text-gray-700 dark:text-gray-200 items-center">
        <li>
          <Link to="/" className="hover:text-blue-500">Home</Link>
        </li>
        <li><a href="#appointments" className="hover:text-blue-500">Appointments</a></li>
        <li><a href="#packages" className="hover:text-blue-500">Packages</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        <li>
          <Link
            to="/login"
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
