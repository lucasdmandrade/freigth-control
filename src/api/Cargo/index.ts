import api from "../../axios";
import GetToken from "../../utils/GetToken";
import { CargoResponse } from "./types";

export const RegisterCargo = async (
  name: string,
  sizeX: number,
  sizeY: number,
  sizeZ: number,
  weight: number,
  typeId: number
) => {
  const data = { name, sizeX, sizeY, sizeZ, weight, typeId };

  const Authorization = `Bearer ${GetToken()}`;
  const config = {
    headers: {
      Authorization: Authorization,
      "Content-Type": "application/json",
    },
  };

  return await api.post("/cargo", data, config);
};

export const fetchCargo = async (id: number) => {
  const Authorization = `Bearer ${GetToken()}`;
  console.log(Authorization);

  const headers = {
    Authorization,
  };

  return await api.get<CargoResponse>(`/cargo/${id}`, undefined, headers);
};
