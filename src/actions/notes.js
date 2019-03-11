import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../constants/actionType'
export const addNote = (note) => {
    return { type: ADD_NOTE, note }
}

export const deleteNote = (id) => {
    return { type: DELETE_NOTE, id }
}

export const editNote = (note) => {
    return { type: EDIT_NOTE, note }
}
