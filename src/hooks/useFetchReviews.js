import { useState, useEffect } from 'react';
import { FetchReviews } from 'utils/fetchReviews';
import { useParams } from 'react-router-dom';

export const useFetchReviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    FetchReviews(`${movieId}/reviews`)
      .then(setReviews)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [movieId]);
  return { reviews, isLoading, error };
};
