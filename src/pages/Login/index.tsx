import MainContainer from "../../components/MainContainer";
import TrucksImage from "../../assets/images/trucks-with-pink-background.png";
import Logo from "../../assets/icons/Logo";

import {
  AccountActions,
  FormInput,
  FormInputLabel,
  FormTitle,
  FormTitleContainer,
  ImageContainer,
  InputContainer,
  LoginButon,
  LoginContent,
  ResetPasswordButton,
  SaveAccountCheckbox,
  SaveAccountLabel,
  SaveAccountSection,
  Title,
  TitleContainer,
  TruckImage,
} from "./styles";

const Login = () => {
  return (
    <MainContainer>
      <ImageContainer>
        <TruckImage src={TrucksImage} />
      </ImageContainer>

      <LoginContent>
        <TitleContainer>
          <Title>TransCargo</Title>
          <Logo />
        </TitleContainer>

        <FormTitleContainer>
          <FormTitle>Conecte-se</FormTitle>
        </FormTitleContainer>

        <InputContainer>
          <FormInputLabel>Email</FormInputLabel>
          <FormInput type="email" />
        </InputContainer>

        <InputContainer>
          <FormInputLabel>Senha</FormInputLabel>
          <FormInput type="password" />
        </InputContainer>

        <AccountActions>
          <SaveAccountSection>
            <SaveAccountCheckbox type={"checkbox"} theme={"red"} />
            <SaveAccountLabel>Lembrar da conta</SaveAccountLabel>
          </SaveAccountSection>

          <ResetPasswordButton>Esqueci minha senha</ResetPasswordButton>
        </AccountActions>

        <LoginButon>Login</LoginButon>
      </LoginContent>
    </MainContainer>
  );
};

export default Login;
