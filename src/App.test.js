import React from 'react'
import App from './App'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

describe('<App />', () => {
  let store, wrapper

  beforeEach(() => {
    store = configureStore([thunk])({
      signInData: {
        loading: false,
        error: null,
        isAuthenticated: false,
        user: null
      }
    })

    wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })

  describe('on mount', () => {
    it('should renders correctly', () => {
      expect(wrapper.exists()).toBe(true)
    })
  })
})
