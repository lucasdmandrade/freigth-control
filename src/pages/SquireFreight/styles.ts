import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const FreightContainer = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const FreightHalt = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FreightHaltIcon = styled.img``;

export const FreightHaltDescription = styled.h2`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5em;

  color: #525252;
`;

export const Circle = styled.div`
  background-color: #7f265b;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const HoundedCircle = styled.div`
  border: 1px #7f265b solid;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
