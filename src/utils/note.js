import { instance } from "./api"

export const getAllNotes = async () => {
    const data = await instance.get('/note')
    return data
}