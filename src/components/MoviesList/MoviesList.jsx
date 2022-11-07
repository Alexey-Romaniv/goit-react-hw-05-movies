import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Li } from './MoviesList.styled.js';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' && <h1>Tranding today</h1>}
      <ul>
        {movies.map(({ id, title }) => (
          <Li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </Li>
        ))}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
