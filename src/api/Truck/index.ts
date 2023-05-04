import api from "../../axios";

export const RegisterTruck = async (
  model: string,
  plate: string,
  year: number,
  maxWeight: number,
  statusId: number
) => {
  let data = await api.post("/truck", {
    model,
    plate,
    year,
    maxWeight,
    statusId,
  });

  return data;
};
