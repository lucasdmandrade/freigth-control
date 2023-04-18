import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import TruckForm from "../pages/forms/Truck";
import Home from "../pages/Home";
import FreightForm from "../pages/forms/Freight";
import UserForm from "../pages/forms/User";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/formularios/caminhao" element={<TruckForm />} />
        <Route path="/formularios/pacote" element={<FreightForm />} />
        <Route path="/formularios/cliente" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
