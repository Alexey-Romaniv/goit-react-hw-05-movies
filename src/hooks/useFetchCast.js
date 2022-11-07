import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchCast } from 'utils/fetchCasts';

export const useFetchCast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    FetchCast(`${movieId}/credits`)
      .then(setCast)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [movieId]);
  return { cast, isLoading, error };
};
