import api from "../../axios";
import GetTOken from "../../utils/GetToken";

export const RegisterTruck = async (
  model: string,
  plate: string,
  year: number,
  maxWeight: number,
  statusId: number
) => {
  const Authorization = `Bearer ${GetTOken()}`;
  console.log(test);
  let data = await api.post(
    "/truck",
    {
      model,
      plate,
      year,
      maxWeight,
      statusId,
    },
    {
      headers: {
        Authorization: Authorization,
        "Content-Type": "application/json",
      },
    }
  );

  return data;
};
