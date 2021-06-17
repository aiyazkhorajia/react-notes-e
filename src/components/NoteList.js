import React, { memo } from 'react'
import { ListGroup, CloseButton } from 'react-bootstrap'

const NoteList = memo(({ notes, onDelete, onEdit }) => {
  return (
    <ListGroup>
      {notes &&
        notes.map((note) => (
          <ListGroup.Item key={note.id} onClick={() => onEdit(note)}>
            {`${note.title.substring(0, 60)}`} <CloseButton onClick={() => onDelete(note.id)} />
          </ListGroup.Item>
        ))}
    </ListGroup>
  )
})

export default NoteList
