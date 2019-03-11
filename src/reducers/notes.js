import {ADD_NOTE, DELETE_NOTE, EDIT_NOTE} from '../constants/actionType'

const optionsReducer = (state = [], action) => {
    switch(action.type){
        case ADD_NOTE:
            return [action.note, ...state]
        case DELETE_NOTE:
            return state.filter(note => note.id != action.id)
        case EDIT_NOTE:
            const updatedNotes = state.map((note) => {
                if(note.id === action.note.id){
                    return action.note
                }
                return note
            })
            return updatedNotes
        default:
            return state;
    }
}

export default optionsReducer;
