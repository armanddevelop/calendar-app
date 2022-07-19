import axios from "axios";
import { getEnvVariables } from "../utils/getEnvVariables";

const { urlBase } = getEnvVariables();
export const calendarApi = axios.create({
  baseURL: urlBase,
});
//TODO: config interceptors
