import styled from "styled-components";

import Check from "../../assets/icons/check.svg";

export const Container = styled.div`
  display: flex;
`;

export const ImageContainer = styled.figure`
  display: flex;
  width: 60vw;
  height: 100vh;
  overflow: hidden;
`;

export const TruckImage = styled.img`
  width: 100%;
`;

export const LoginContent = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 40vw;
  height: 100vh;
`;

export const TitleContainer = styled.header`
  display: flex;
  margin-bottom: 75px;
`;

export const Title = styled.h1`
  font-size: 3em;
  color: #7f265b;

  font-weight: 700;

  font-family: "Nunito Sans";
`;

export const LoginLogo = styled.img`
  width: 13vw;
`;

export const LoginForm = styled.main`
  display: flex;
`;

export const FormTitleContainer = styled.header`
  display: flex;
  margin-bottom: 36px;
`;

export const FormTitle = styled.h2`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;

  color: #525252;
`;

export const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 12px;
`;

export const FormInputLabel = styled.label`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #828282;
  margin-bottom: 4px;
`;

export const FormInput = styled.input`
  padding: 13px 10px;

  border: 1px solid #ded2d9;
  border-radius: 5px;

  width: 100%;
`;

export const AccountActions = styled.section`
  display: flex;
  width: 80%;

  justify-content: space-between;

  margin-bottom: 32px;
`;

export const SaveAccountSection = styled.section`
  display: flex;
  align-items: center;
`;

export const SaveAccountCheckbox = styled.input.attrs({ type: "checkbox" })`
  -webkit-appearance: none;
  width: 16px;
  height: 16px;

  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  outline: none;

  &:checked {
    background-color: #7f265b;
    background-image: url("${Check}");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const SaveAccountLabel = styled.label`
  color: #a1a1a1;
  font-size: 12px;
`;

export const LoginButon = styled.button`
  width: 80%;
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

export const ResetPasswordButton = styled.button`
  color: #7f265b;
  border-radius: 6px;
  background-color: transparent;
  padding: 5px;

  border: none;
`;
