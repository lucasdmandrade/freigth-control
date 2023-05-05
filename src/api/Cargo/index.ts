import api from "../../axios";
import GetTOken from "../../utils/GetToken";

export const RegisterCargo = async (
  name: string,
  sizeX: number,
  sizeY: number,
  sizeZ: number,
  weight: number,
  typeId: number
) => {
  const data = { name, sizeX, sizeY, sizeZ, weight, typeId };

  const Authorization = `Bearer ${GetTOken()}`;
  const config = {
    headers: {
      Authorization: Authorization,
      "Content-Type": "application/json",
    },
  };

  return await api.post("/cargo", data, config);
};
