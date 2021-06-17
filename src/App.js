import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PrivateRoute from 'Components/PrivateRoute'
import './App.css'

const Notes = React.lazy(() => import('Pages/Notes'))
const SignIn = React.lazy(() => import('Pages/SignIn'))

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PrivateRoute component={SignIn} path='/' exact type='public' />
          <PrivateRoute component={SignIn} path='/signin' type='public' />
          <PrivateRoute component={Notes} path='/notes' type='protected' />
        </Switch>{' '}
      </Suspense>
    </Router>
  )
}
