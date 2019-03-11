import * as actions from './notes'
import * as types from '../constants/actionType'

describe('actions', () => {
  it('should create an action to add a note', () => {
    const note = { id: '24re', title: 'test title', text: 'text test' }
    const expectedAction = {
      type: types.ADD_NOTE,
      note: note
    }
    expect(actions.addNote(note)).toEqual(expectedAction)
  })
  it('should create an action to edit a note', () => {
    const note = { id: '24re', title: 'test title', text: 'text test' }
    const expectedAction = {
      type: types.EDIT_NOTE,
      note: note
    }
    expect(actions.editNote(note)).toEqual(expectedAction)
  })
  it('should create an action to delete a note', () => {
    const id = '3dj4'
    const expectedAction = {
      type: types.DELETE_NOTE,
      id: id
    }
    expect(actions.deleteNote(id)).toEqual(expectedAction)
  })
})