import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const FreightSearchContainer = styled.section`
  display: flex;
  height: 20vh;
  align-items: center;
  justify-content: center;

  margin-top: 80px;

  min-width: 10em;
`;

export const SearchInput = styled.input`
  padding: 13px 10px;

  border: 1px solid #ded2d9;
  border-radius: 5px;

  height: 1em;
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

export const FreightHaltStops = styled.h2`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5em;

  margin-top: 10px;

  color: #525252;
  max-width: 10em;
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

export const FreightHaltDescription = styled.h2`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2em;
  text-align: center;

  margin: 100px;

  color: #525252;
`;
