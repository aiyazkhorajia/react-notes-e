import React, { useCallback, memo, useState } from 'react'
import { Container, Row, Col, Card, Form, Button, ListGroup, CloseButton } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { saveNote, deleteNote, signOut } from 'Store/actions'
import NoteList from 'Components/NoteList'

const Notes = () => {
  const dispatch = useDispatch()
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9)
  }
  const { notes } = useSelector((state) => state.notesData)
  const [validated, setValidated] = useState(false)
  const [id, setId] = useState(generateId())
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setValidated(true)
    if (id && title && body) {
      dispatch(saveNote({ id, title, body }))
      setId(generateId())
      setTitle('')
      setBody('')
    }
  }
  const handleDelete = useCallback((id) => {
    dispatch(deleteNote(id))
  })

  const onEditHandler = useCallback((note) => {
    setId(note.id)
    setTitle(note.title)
    setBody(note.body)
  })

  return (
    <Container>
      <Card className='notes-container m-3'>
        <Card.Header as='h5'>
          G Notes
          <Button className='float-right' onClick={() => dispatch(signOut())}>
            Logout
          </Button>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col lg={4} md={12}>
              <NoteList notes={notes} onDelete={handleDelete} onEdit={onEditHandler} />
            </Col>
            <Col lg={8} md={12}>
              <hr className='d-lg-none d-block'></hr>
              <h3 className='pt-2'>Add/Edit Note</h3>
              <Form noValidate validated={validated}>
                <Form.Group className='mb-3'>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Body</Form.Label>
                  <Form.Control
                    required
                    as='textarea'
                    rows={3}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </Form.Group>
                <Button variant='primary' type='submit' onClick={(e) => handleSubmit(e)}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Notes
