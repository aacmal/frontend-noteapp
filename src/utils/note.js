import { instance } from "./api"

export const getAllNotes = async () => {
    const data = await instance.get('/note')
    return data
}

export const addNewNote = async (data) => {
    const res = await instance.post('/note', data)
    return res
}

export const deleteNote = async (id) => {
    const res = await instance.delete(`/note/${id}`)
    return res
}

export const moveNote = async (id, data) => {
    const res = await instance.put(`/note/${id}`, data)
    return res
}