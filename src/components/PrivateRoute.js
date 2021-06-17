import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ErrorBoundary from 'Components/ErrorBoundary'

const PrivateRoute = ({ component: Component, type, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.signInData)
  if (type === 'public' && isAuthenticated) {
    return <Redirect to='/notes' />
  } else if (type === 'protected' && !isAuthenticated) {
    return <Redirect to='/signin' />
  } else {
    return (
      // Show the component only if user is authenticated else redirect back to signin page
      <ErrorBoundary>
        <Route {...rest} render={(props) => <Component {...props} />} />
      </ErrorBoundary>
    )
  }
}

export default PrivateRoute
