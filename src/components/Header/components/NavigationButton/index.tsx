import { NavArea, NavLink, NavLinkUnderline } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { FC } from "react";

const NavigationButton: FC<{ route: string; title: string }> = ({
  route,
  title,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <NavArea onClick={() => navigate(route)}>
      <NavLink to={route}>{title}</NavLink>
      <NavLinkUnderline isActive={location.pathname === route} />
    </NavArea>
  );
};

export default NavigationButton;
