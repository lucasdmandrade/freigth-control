import Icon from "../../assets/icons/Logo";

import { Container, IconContainer, NavigationContainer } from "./styles";
import NavigationButton from "./components/NavigationButton";

const Header = () => (
  <Container>
    <IconContainer>
      <Icon height="60%" color="white" />
    </IconContainer>

    <NavigationContainer>
      <NavigationButton route="/home" title="Home" />

      <NavigationButton route="/acompanhar-carga" title="Buscar Pedido" />

      <NavigationButton
        route="/formularios/caminhao"
        title="Cadastrar Caminhão"
      />

      <NavigationButton route="/formularios/pacote" title="Cadastrar Pacote" />

      <NavigationButton
        route="/formularios/cliente"
        title="Cadastrar Cliente"
      />
    </NavigationContainer>
  </Container>
);

export default Header;
