import Header from "../../components/Header";
import { Button, Description, HomePageContainer, Logo, Title } from "./styles";

import LogoImage from "../../assets/images/Logo.png";

const Home: React.FC = () => {
  return (
    <HomePageContainer>
      <Header />
      <Logo src={LogoImage} alt="TransCargo Logo" />
      <Title>Transporte de carga seguro e confiável</Title>
      <Description>
        A TransCargo é uma empresa de transporte de carga que oferece soluções
        seguras e confiáveis para atender às necessidades logísticas dos nossos
        clientes em todo o mundo.
      </Description>
      <Button>Entre em contato</Button>
    </HomePageContainer>
  );
};

export default Home;
