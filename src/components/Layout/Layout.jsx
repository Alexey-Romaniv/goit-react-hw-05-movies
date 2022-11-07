import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LinkNav, NavList } from './Layout.styled.js';

export const Layout = () => {
  return (
    <>
      <nav>
        <NavList>
          <li>
            <LinkNav to="/" end>
              Home
            </LinkNav>
          </li>
          <li>
            <LinkNav to="movies">Movies</LinkNav>
          </li>
        </NavList>
      </nav>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
