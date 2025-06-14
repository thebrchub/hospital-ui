// src/utils/apiClient.js
import { useAuth } from '../context/AuthContext';

export const useApiClient = () => {
  const { token, logout } = useAuth();

  const fetchWithAuth = async (url, options = {}) => {
    const headers = {
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (response.status === 401) {
      logout();
    }

    return response;
  };

  return fetchWithAuth;
};
