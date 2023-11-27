import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Storage from '../utils/storage';
import { LOCAL_STORAGE_KEYS } from '../utils/constants';

function useService(callback) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const executeService = async (...args) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const serviceResult = await callback(...args);
      
      setResult(serviceResult);
      setLoading(false);
    } catch (error) {
      if (error?.response?.status === 401) {
        Storage.remove(LOCAL_STORAGE_KEYS.LOGGED_IN);
        Storage.remove(LOCAL_STORAGE_KEYS.ROLE);
        Storage.remove(LOCAL_STORAGE_KEYS.USER_DATA);
        Storage.remove(LOCAL_STORAGE_KEYS.IS_TRUSTED);
        navigate('/');
      }
      setError(error);
      setLoading(false);
    }
  };

  return { executeService, loading, error, result };
}

export default useService;
