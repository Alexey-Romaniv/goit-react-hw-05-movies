import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { lazy } from 'react';
const SearchPage = lazy(() =>
  import('../pages/SearchPage/SearchPage').then(module => ({
    ...module,
    default: module.SearchPage,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<SearchPage />} />
      </Route>
    </Routes>
  );
};
