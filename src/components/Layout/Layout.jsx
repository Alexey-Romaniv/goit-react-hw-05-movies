import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkNav = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: red;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 12px;
  padding: 16px 24px;
  margin: 0 0 20px;
  list-style: none;
  font-size: 24px;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.4);
`;

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
    </>
  );
};
