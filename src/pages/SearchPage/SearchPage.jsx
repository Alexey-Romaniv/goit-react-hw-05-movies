import { useFetchSearchingMovies } from 'hooks/useFetchSearchingMovies';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from '../../components/MoviesList/MoviesList';

export const SearchPage = () => {
  const { movies, isLoading, error, handleSubmit } = useFetchSearchingMovies();

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      {error && <p>Ooops! Something wrong</p>}
      {isLoading && <Loader />}
      {movies?.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
