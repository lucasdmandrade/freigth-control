import api from "../../../axios";
import { LoginResponse } from "./types";

export const DoLogin = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  let data: LoginResponse = await api.post<LoginResponse>("/login", {
    username,
    password,
  });

  return data;
};
