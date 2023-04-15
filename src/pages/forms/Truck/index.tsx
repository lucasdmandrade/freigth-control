import Header from "../../../components/Header";
import {
  Container,
  FormButton,
  FormCard,
  FormFooter,
  FormHeader,
  FormInput,
  FormTitle,
  ImageContainer,
} from "./styles";

const Truck = () => {
  return (
    <Container>
      <Header />

      <ImageContainer>
        <FormCard>
          <FormHeader>
            <FormTitle>Cadastre seu caminhão</FormTitle>
          </FormHeader>

          <FormInput placeholder="Modelo" />
          <FormInput placeholder="Placa" />
          <FormInput placeholder="Ano" />
          <FormInput placeholder="Peso maximo" />

          <FormFooter>
            <FormButton>Cadastrar</FormButton>
          </FormFooter>
        </FormCard>
      </ImageContainer>
    </Container>
  );
};

export default Truck;
