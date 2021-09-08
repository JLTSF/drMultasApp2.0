import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1",
});
// Responsavel por fazer a chamada a API e criar um arquivo JSON
