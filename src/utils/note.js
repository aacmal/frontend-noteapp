import { instance } from "./api"

export const getAllNotes = async () => {
    const data = await instance.get('/note')
    return data
}

export const addNewNote = async (data) => {
    const res = await instance.post('/note', data)
    return res
}