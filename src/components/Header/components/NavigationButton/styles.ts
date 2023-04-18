import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    hr {
      width: 1px;
      max-width: 1px;
      transition-duration: 0.6s;
      transform: scaleX(45);
    }
    cursor: pointer;
  }
`;

export const NavLink = styled(Link)`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Nunito Sans";
  text-decoration: none;
  color: white;
`;

export const NavLinkUnderline = styled.hr<{ isActive?: boolean }>`
  background-color: #fff;
  height: 1px;
  width: ${({ isActive }) => (isActive ? "45px" : 0)};
  font-family: "Nunito Sans";
  text-decoration: none;
  border: none;
  margin: 0;
`;
