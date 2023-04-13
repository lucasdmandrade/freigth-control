import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  background-color: #7f265b;
  opacity: 0.95;
  justify-content: flex-end;
  z-index: 999;
  &:hover:last-child {
    display: flex;
  }
`;

export const IconContainer = styled.figure`
  display: flex;
  align-items: center;
`;

export const NavigationContainer = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const LogoImg = styled.img`
  height: 100%;
`;

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
