import { useFetchMovie } from 'hooks/useFetchMovie';
import { Loader } from 'components/Loader/Loader';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

export const MoviePage = () => {
  const { movie, isLoading, error } = useFetchMovie();

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops! Something wrong</p>}
      {movie && <MovieDetails movie={movie} />}
    </>
  );
};
