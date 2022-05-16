import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 24px;
  background-color: #f0fdf9;
  padding: 14px 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #099268;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 2px 5px #000000;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 5px 5px #000000;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`;
