import styled from "styled-components";

export const Button = styled.button<{
  width?: string;
}>`
  width: ${({ width }) => (width ? width : "250px")};
  background: #7f265b;
  border-radius: 6px;
  padding: 10px;

  border: none;

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  color: #ffffff;

  &:hover {
    cursor: pointer;
    filter: brightness(120%);
  }
`;
