import Header from "../../components/Header";
import { Button, Description, HomePageContainer, Logo, Title } from "./styles";

import LogoImage from "../../assets/images/Logo.png";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToRegisterPackage = useCallback(
    () => navigate("/formularios/pacote"),
    [navigate]
  );

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
      <Button onClick={goToRegisterPackage}>Cadastrar pacote</Button>
    </HomePageContainer>
  );
};

export default Home;
