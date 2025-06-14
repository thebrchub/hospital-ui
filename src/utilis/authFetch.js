// utils/authFetch.js
import { useAuth } from '../context/AuthContext';

export const authFetch = async (url, options = {}, logout) => {
  const token = localStorage.getItem('authToken');

  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  // If token expired or unauthorized
  if (response.status === 401) {
    logout(); // clear token and redirect
  }

  return response;
};
