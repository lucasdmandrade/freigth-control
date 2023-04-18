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
