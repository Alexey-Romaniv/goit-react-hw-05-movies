import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const InfoBox = styled.div`
  display: flex;
  padding: 24px;
`;
export const InfoText = styled.div`
  padding-left: 24px;
`;
export const AdditionalInfoBox = styled.div`
  padding: 16px;
  box-shadow: 1px 1px 4px rgba(126, 147, 255, 0.4);
`;

export const InfoLink = styled(NavLink)`
  font-size: 20px;
  &.active {
    color: red;
  }
`;

export const Li = styled.li`
  font-size: 20px;
  padding: 2px;
`;

export const Button = styled.button`
  margin-left: 24px;
  padding: 6px;
  font-size: 20px;
  border: 1px solid #c5c5c5;
  border-radius: 6px;

  order: 1;
  align-self: stretch;

  &:focus,
  &:hover {
    cursor: pointer;
    background: #29abdd;
  }
`;
