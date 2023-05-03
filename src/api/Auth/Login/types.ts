interface Data {
  token: string;
}

export interface LoginResponse {
  code: number;
  message: string;
  data: Data;
}
