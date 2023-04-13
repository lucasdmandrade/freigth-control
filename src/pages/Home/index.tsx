import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import { ImageContainer, Title } from "./styles";

const Home = () => {
  return (
    <MainContainer>
      <Header />
      <ImageContainer>
        <Title>Rápido e confiável, entregamos seu sonho em suas mãos!</Title>
      </ImageContainer>
    </MainContainer>
  );
};

export default Home;
