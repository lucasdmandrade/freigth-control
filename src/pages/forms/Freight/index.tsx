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

const Freight = () => {
  return (
    <Container>
      <Header />

      <ContainerWithImage>
        <Form>
          <FormHeader>
            <FormTitle>Cadastre sua carga</FormTitle>
          </FormHeader>

          <FormInput placeholder="Nome" />
          <FormInput placeholder="Altura" />
          <FormInput placeholder="Largura" />
          <FormInput placeholder="Comprimento" />
          <FormInput placeholder="Peso" />
          <FormInput placeholder="Tipo de carga" />

          <FormFooter>
            <FormButton>Cadastrar</FormButton>
          </FormFooter>
        </Form>
      </ContainerWithImage>
    </Container>
  );
};

export default Freight;
