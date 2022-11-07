import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px;
`;
export const Input = styled.input`
  width: 300px;
  padding: 6px 70px 6px 6px;
  font-size: 20px;
  background: #f4f4f4;
  border: 1px solid #c5c5c5;
  border-radius: 6px;

  order: 1;
  align-self: stretch;

  &:focus,
  &:hover {
    cursor: pointer;
    outline: 1px solid #4cc6f5;
  }
  &::placeholder {
    font: inherit;
  }
`;
export const Button = styled.button`
  padding: 6px;
  font-size: 20px;
  color: #ffffff;
  background: #4cc6f5;
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
