import Icon from "../../assets/icons/Logo";

import {
  Container,
  IconContainer,
  LogoImg,
  NavArea,
  NavigationContainer,
  NavLink,
  NavLinkUnderline,
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <IconContainer>
        <Icon height="80%" color="white" />
      </IconContainer>

      <NavigationContainer>
        <NavArea onClick={() => navigate("/")}>
          <NavLink to="/">Home</NavLink>
          <NavLinkUnderline isActive={location.pathname === "/"} />
        </NavArea>

        <NavArea onClick={() => navigate("/professional")}>
          <NavLink to="/formularios/caminhão">Cadastrar Caminhão</NavLink>
          <NavLinkUnderline isActive={location.pathname === "/professional"} />
        </NavArea>

        <NavArea onClick={() => navigate("/emulador")}>
          <NavLink to="/emulador">Emulador</NavLink>
          <NavLinkUnderline isActive={location.pathname === "/emulador"} />
        </NavArea>

        <NavArea onClick={() => navigate("/curriculum")}>
          <NavLink to="/curriculum">Currículo</NavLink>
          <NavLinkUnderline isActive={location.pathname === "/curriculum"} />
        </NavArea>
      </NavigationContainer>
    </Container>
  );
};

export default Header;
