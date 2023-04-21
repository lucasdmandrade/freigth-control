import Logo from "../../assets/icons/Logo";
import Circle from "../../assets/icons/Circle";
import CheckedCircle from "../../assets/icons/CheckedCircle";
import { Divisor } from "../../components/Divisor/styles";

import Header from "../../components/Header";
import {
  Container,
  FreightContainer,
  FreightHalt,
  FreightHaltDescription,
} from "./styles";

const SquireFreight = () => {
  return (
    <Container>
      <Header />
      <FreightContainer>
        <FreightHalt>
          <CheckedCircle width={50} height={50} />
          <FreightHaltDescription>Teste</FreightHaltDescription>
        </FreightHalt>

        <Divisor width="50px" color="#525252" />

        <FreightHalt>
          <Logo width={80} height={80} />
          <FreightHaltDescription>Teste</FreightHaltDescription>
        </FreightHalt>

        <Divisor width="50px" color="#525252" />

        <FreightHalt>
          <Circle width={50} height={50} />
          <FreightHaltDescription>Teste</FreightHaltDescription>
        </FreightHalt>
      </FreightContainer>
    </Container>
  );
};

export default SquireFreight;
