import axios, { AxiosInstance, AxiosResponse } from "axios";

interface ApiConfig {
  baseURL: string;
  headers?: object;
}

class Api {
  public client: AxiosInstance;

  constructor(config: ApiConfig) {
    this.client = axios.create(config);
  }

  async get<T>(url: string, params?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.client.get(url, { params });
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.client.post(
      url,
      data,
      config
    );
    return response.data;
  }

  async put<T>(url: string, data?: any, config?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.client.put(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.client.delete(url, config);
    return response.data;
  }
}

const api = new Api({
  baseURL: "http://localhost:8080",
});

export default api;
