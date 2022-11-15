import axios from "axios";

const API_DEV_URL = 'http://localhost:3001';
const API_PRODUCTION_URL = 'https://backend-noteapp.acmal.me'
let BASE_URL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    BASE_URL = `${API_DEV_URL}`;
} else {
    // production code
    BASE_URL = `${API_PRODUCTION_URL}`;
}

export const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})