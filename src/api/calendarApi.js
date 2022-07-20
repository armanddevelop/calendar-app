import axios from "axios";
import { getEnvVariables } from "../utils/getEnvVariables";

const { urlBase } = getEnvVariables();
export const calendarApi = axios.create({
  baseURL: urlBase,
});
//TODO: config interceptors
calendarApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token"),
  };
  return config;
});
