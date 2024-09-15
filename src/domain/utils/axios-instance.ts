import axios from 'axios';
// import { API_URL } from "../../../env";

export const AxiosInstance = axios.create({
    baseURL: /* env.API_URL || */ 'http://localhost:3000',
});

AxiosInstance.interceptors.request.use();
AxiosInstance.interceptors.response.use();
