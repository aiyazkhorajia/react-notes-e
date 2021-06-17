import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Form, Button, Spinner } from 'react-bootstrap'
import { signIn } from 'Store/actions'

const SignInForm = () => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.signInData)
  const [validated, setValidated] = useState(false)
  const [email, setEmail] = useState('eve.holt@reqres.in')
  const [password, setPassword] = useState('cityslicka')
  const handleSubmit = (e) => {
    e.preventDefault()
    setValidated(true)
    if (email && password) {
      dispatch(signIn({ email, password }))
    }
  }
  return (
    <Card body>
      <div className='form-items'>
        <h3>Sign In</h3>
        <Form className='pt-3' noValidate validated={validated}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant='primary' type='submit' onClick={(e) => handleSubmit(e)}>
            Submit {loading && <Spinner animation='grow' variant='light' size='sm' />}
          </Button>

          {!!error && (
            <div className='alert alert-danger' role='alert'>
              Error: {error}
            </div>
          )}
        </Form>
      </div>
    </Card>
  )
}

export default SignInForm
