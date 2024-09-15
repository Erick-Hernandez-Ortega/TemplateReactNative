import axios from 'axios';
// import { API_URL } from "../../../env";

export const AxiosInstance = axios.create({
    baseURL: /* env.API_URL || */ 'https://jsonplaceholder.typicode.com',
});

AxiosInstance.interceptors.request.use();
AxiosInstance.interceptors.response.use();
