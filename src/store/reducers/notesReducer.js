import { SAVE_NOTE, DELETE_NOTE } from 'Store/constants'

const initialState = {
  loading: false,
  error: null,
  notes: [
    { id: 1, title: 'first note', body: 'first note body' },
    { id: 2, title: 'second note', body: 'second note body' },
    { id: 3, title: 'third note', body: 'third note body' },
    { id: 4, title: 'fourth note', body: 'fourth note body' }
  ]
}

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NOTE:
      let newNotes = [...state.notes]
      const i = newNotes.findIndex((_note) => _note.id === action.payload.id)
      if (i > -1) {
        newNotes[i] = action.payload
      } else {
        newNotes.push(action.payload)
      }

      return {
        ...state,
        loading: true,
        notes: newNotes
      }
    case DELETE_NOTE:
      return {
        ...state,
        loading: false,
        notes: state.notes.filter((n) => n.id !== action.payload)
      }
    default:
      return state
  }
}

export default notesReducer
