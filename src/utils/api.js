import axios from "axios";

const API_HOST_DEV = 'http://localhost:3001';
const API_PRODUCTION_URL = 'https://backend-noteapp.acmal.me'
const API_ROOT_PATH = '/note';
export const BASE_URL = `${API_PRODUCTION_URL}`;

export const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})