import api from "../../axios";
import GetToken from "../../utils/GetToken";

export const RegisterUser = async (
  name: string,
  username: string,
  email: string,
  password: string,
  cellphone: string,
  cpfCnpj: string,
  roleId: number
) => {
  const data = { name, username, email, password, cellphone, cpfCnpj, roleId };

  const Authorization = `Bearer ${GetToken()}`;
  const config = {
    headers: {
      Authorization: Authorization,
      "Content-Type": "application/json",
    },
  };

  return await api.post("/user", data, config);
};
