import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import TruckForm from "../pages/forms/Truck";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/formularios/caminhão" element={<TruckForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
