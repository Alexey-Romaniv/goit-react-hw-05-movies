import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/HomePage/HomePage';

const SearchPage = lazy(() =>
  import('../pages/SearchPage/SearchPage').then(module => ({
    ...module,
    default: module.SearchPage,
  }))
);

const MoviePage = lazy(() =>
  import('../pages/MoviePage/MoviePage').then(module => ({
    ...module,
    default: module.MoviePage,
  }))
);

const Cast = lazy(() =>
  import('../pages/Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);

const Reviews = lazy(() =>
  import('../pages/Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<SearchPage />} />
        <Route path="movies/:movieId" element={<MoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />;
      </Route>
    </Routes>
  );
};
