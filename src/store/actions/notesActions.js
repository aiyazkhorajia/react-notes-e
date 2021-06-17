import { SAVE_NOTE, DELETE_NOTE } from 'Store/constants'

export function saveNote(note) {
  return (dispatch) => {
    dispatch({ type: SAVE_NOTE, payload: note })
  }
}

export function deleteNote(id) {
  return (dispatch) => {
    dispatch({
      type: DELETE_NOTE,
      payload: id
    })
  }
}
