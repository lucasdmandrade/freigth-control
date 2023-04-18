import Form from "../../../components/Form";
import Header from "../../../components/Header";
import {
  Container,
  FormButton,
  FormFooter,
  FormHeader,
  FormInput,
  FormTitle,
  ImageContainer,
} from "./styles";

const User = () => {
  return (
    <Container>
      <Header />

      <ImageContainer>
        <Form>
          <FormHeader>
            <FormTitle>Cadastre sua carga</FormTitle>
          </FormHeader>

          <FormInput placeholder="Modelo" />
          <FormInput placeholder="Placa" />
          <FormInput placeholder="Ano" />
          <FormInput placeholder="Peso maximo" />

          <FormFooter>
            <FormButton>Cadastrar</FormButton>
          </FormFooter>
        </Form>
      </ImageContainer>
    </Container>
  );
};

export default User;
