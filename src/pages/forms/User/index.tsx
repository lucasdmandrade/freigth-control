import Form from "../../../components/Form";
import Header from "../../../components/Header";
import {
  Container,
  FormButton,
  FormFooter,
  FormHeader,
  FormInput,
  FormTitle,
  ContainerWithImage,
} from "./styles";

const User = () => {
  return (
    <Container>
      <Header />

      <ContainerWithImage>
        <Form>
          <FormHeader>
            <FormTitle>Cadastre novo cliente</FormTitle>
          </FormHeader>

          <FormInput placeholder="Nome" />
          <FormInput placeholder="Usuario" />
          <FormInput placeholder="Email" />
          <FormInput type={"password"} placeholder="Senha" />
          <FormInput type={"tel"} placeholder="Numero de telefone" />
          <FormInput placeholder="CPF/CNPJ" />
          <FormInput placeholder="Tipo de usuario" />

          <FormFooter>
            <FormButton>Cadastrar</FormButton>
          </FormFooter>
        </Form>
      </ContainerWithImage>
    </Container>
  );
};

export default User;
