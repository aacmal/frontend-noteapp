import axios from "axios";

const API_HOST_DEV = 'http://localhost:3001';
const API_ROOT_PATH = '/note';
export const BASE_URL = `${API_HOST_DEV}${API_ROOT_PATH}`;

export const getAllNotes = () => {
    axios.get(BASE_URL)
    .then((response) => {
        console.log(response)
        return response.data;
    })
    .catch((err) => {
        console.log(err);
        return;
    })
};