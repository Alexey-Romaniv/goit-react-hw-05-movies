import { useFetchCast } from 'hooks/useFetchCast';
import { Loader } from 'components/Loader/Loader';

export const Cast = () => {
  const { cast, isLoading, error } = useFetchCast();
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops! Something wrong</p>}
      {cast && (
        <ul>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <h2>{name}</h2>
              <h3>Haracter: {character}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
