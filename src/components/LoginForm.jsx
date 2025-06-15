import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from || '/';
  const savedFormData = location.state?.formData || null;

  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = {
      userName: email,
      password,
    };

    try {
      setLoading(true);
      const response = await fetch('https://hospital-app-deploy.onrender.com/v1/auth/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        toast.success('Login successful!');
        login(data.token); // ✅ store token using context

        setTimeout(() => {
          // Redirect after login with form data if present
          navigate(redirectTo, {
            state: savedFormData ? { restoredForm: savedFormData } : {},
            replace: true,
          });
        }, 1500);
      } else {
        toast.error(data?.message || 'Login failed');
      }
    } catch (error) {
      setLoading(false);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-800 dark:to-gray-900">
      <ToastContainer />
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Hospital Login</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
          <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-400">
            Don’t have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline dark:text-blue-400">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
