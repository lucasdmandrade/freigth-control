import Logo from "../../assets/icons/Logo";
import { Divisor } from "../../components/Divisor/styles";

import Header from "../../components/Header";
import {
  Circle,
  Container,
  FreightContainer,
  FreightHalt,
  FreightHaltDescription,
  HoundedCircle,
} from "./styles";

const SquireFreight = () => {
  return (
    <Container>
      <Header />
      <FreightContainer>
        <FreightHalt>
          <Circle />
          <FreightHaltDescription>Teste</FreightHaltDescription>
        </FreightHalt>

        <Divisor width="50px" color="#525252" />

        <FreightHalt>
          <Logo width={80} height={80} />
          <FreightHaltDescription>Teste</FreightHaltDescription>
        </FreightHalt>

        <Divisor width="50px" color="#525252" />

        <FreightHalt>
          <HoundedCircle />
          <FreightHaltDescription>Teste</FreightHaltDescription>
        </FreightHalt>
      </FreightContainer>
    </Container>
  );
};

export default SquireFreight;
