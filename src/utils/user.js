import { instance } from "./api"

// made user authentication api calls
export const login = async (email, password) => {
    const data = await instance.post('/auth/login', { email, password })
    return data
}

export const register = async (email, password) => {
    const data = await instance.post('/auth/register', { email, password })
    return data
}

export const logout = async () => {
    const data = await instance.get('/auth/logout')
    return data
}