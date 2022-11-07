import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchingMovies } from '../utils/fetchSearchingMovies';

export const useFetchSearchingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  const handleSubmit = query => {
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (!searchQuery) return;
    setIsLoading(true);
    fetchSearchingMovies(searchQuery)
      .then(setMovies)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [searchQuery]);

  return { movies, isLoading, error, handleSubmit };
};
