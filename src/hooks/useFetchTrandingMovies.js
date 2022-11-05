import { useState, useEffect } from 'react';
import { getMovies } from '../utils/fetchApi';

export const useFetchTrandingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovies()
      .then(setMovies)
      .catch(setError)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { movies, error, isLoading };
};
