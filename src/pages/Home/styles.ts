import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const Logo = styled.img`
  width: 200px;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 24px;
  text-align: center;
  max-width: 500px;
`;

export const Button = styled.button`
  font-size: 24px;
  font-weight: bold;
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  background-color: #7f265b;
  color: #fff;
  cursor: pointer;
  margin-top: 50px;
`;
