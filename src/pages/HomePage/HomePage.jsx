import { useFetchTrandingMovies } from 'hooks/useFetchTrandingMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

export const HomePage = () => {
  const { movies, error, isLoading } = useFetchTrandingMovies();
  return (
    <>
      {error && <p>Oops!</p>}
      {isLoading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </>
  );
};
