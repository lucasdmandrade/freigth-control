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
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DoLogin } from "../../api/Auth/Login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const goTo = useCallback(() => {
    DoLogin(username, password)
      .then((response) => {
        if (response.code === 200) navigate("/home");
      })
      .catch((error) => console.log("error", error.message));
  }, [navigate, password, username]);

  return (
    <MainContainer>
      <ImageContainer>
        <TruckImage src={TrucksImage} alt="TrasnCargo logo" />
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
          <FormInput
            type="email"
            onChange={({ target }) => setUsername(target.value)}
          />
        </InputContainer>

        <InputContainer>
          <FormInputLabel>Senha</FormInputLabel>
          <FormInput
            type="password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </InputContainer>

        <AccountActions>
          <SaveAccountSection>
            <SaveAccountCheckbox type={"checkbox"} theme={"red"} />
            <SaveAccountLabel>Lembrar da conta</SaveAccountLabel>
          </SaveAccountSection>

          <ResetPasswordButton>Esqueci minha senha</ResetPasswordButton>
        </AccountActions>

        <LoginButon onClick={goTo}>Login</LoginButon>
      </LoginContent>
    </MainContainer>
  );
};

export default Login;
