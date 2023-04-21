import Logo from "../../assets/icons/Logo";
import Check from "../../assets/icons/Check";
import CheckedCircle from "../../assets/icons/CheckedCircle";
import { Divisor } from "../../components/Divisor/styles";

import Header from "../../components/Header";
import {
  Container,
  FreightContainer,
  FreightHalt,
  FreightHaltDescription,
  FreightHaltStops,
  FreightSearchContainer,
  SearchInput,
} from "./styles";

const SquireFreight = () => {
  return (
    <Container>
      <Header />
      <FreightSearchContainer>
        <SearchInput placeholder="Digite o código do pedido" />
      </FreightSearchContainer>

      <FreightContainer>
        <FreightHalt>
          <Check width={50} height={50} checked />
          <FreightHaltStops>Franca (SP)</FreightHaltStops>
        </FreightHalt>

        <Divisor width="50px" color="#525252" />

        <FreightHalt>
          <Logo width={80} height={50} />
          <FreightHaltStops>Ribeirão Preto (SP)</FreightHaltStops>
        </FreightHalt>

        <Divisor width="50px" color="#525252" />

        <FreightHalt>
          <Check width={50} height={50} />
          <FreightHaltStops>Campinas (SP)</FreightHaltStops>
        </FreightHalt>
      </FreightContainer>
      <FreightHaltDescription>
        Seu pedido saiu de Franca (SP) dia 25/04 as 16:45, passou por Ribeirão
        Preto (SP) dia 26/04 as 9:20 e esta a caminho de Campinas (SP)
      </FreightHaltDescription>
    </Container>
  );
};

export default SquireFreight;
