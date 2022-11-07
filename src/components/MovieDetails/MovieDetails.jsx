import PropTypes from 'prop-types';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  InfoBox,
  AdditionalInfoBox,
  InfoLink,
  InfoText,
  Button,
  Li,
} from './MovieDetails.styled.js';

export const MovieDetails = ({ movie }) => {
  const { poster_path, title, vote_average, overview, genresName } = movie;
  const location = useLocation();
  const navigation = useNavigate();
  const currentLocation = location?.state?.from;
  return (
    <>
      <Button
        type="button"
        onClick={() => navigation(location.state?.from ?? '/')}
      >
        Go back
      </Button>
      <InfoBox>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <InfoText>
          <h2>{title}</h2>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genresName}</p>
        </InfoText>
      </InfoBox>
      <AdditionalInfoBox>
        <h3>Additional information</h3>
        <ul>
          <Li>
            <InfoLink to="cast" state={{ from: currentLocation }}>
              Cast
            </InfoLink>
          </Li>
          <Li>
            <InfoLink to="reviews" state={{ from: currentLocation }}>
              Reviews
            </InfoLink>
          </Li>
        </ul>
      </AdditionalInfoBox>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};
