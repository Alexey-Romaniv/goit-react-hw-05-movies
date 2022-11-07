import { useState, useEffect } from 'react';
import { fetchMovie } from 'utils/fetchMovie';
import { useParams } from 'react-router-dom';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetchMovie(movieId)
      .then(setMovie)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return { movie, isLoading, error };
};
