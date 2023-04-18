import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import TruckForm from "../pages/forms/Truck";
import Home from "../pages/Home";
import Freight from "../pages/forms/Freight";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/formularios/caminhao" element={<TruckForm />} />
        <Route path="/formularios/pacote" element={<Freight />} />
        <Route path="/formularios/cliente" element={<Freight />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
