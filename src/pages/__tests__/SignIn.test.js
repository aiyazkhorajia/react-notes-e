import React from 'react'
import SignIn from 'Pages/SignIn'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

describe('<SignIn />', () => {
  let store, wrapper

  beforeEach(() => {
    store = configureStore([thunk])({
      signInData: {
        isAuthenticated: false
      }
    })

    wrapper = shallow(
      <Provider store={store}>
        <SignIn />
      </Provider>
    )
  })

  describe('on mount', () => {
    it('should match with snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
    it('should renders correctly', () => {
      expect(wrapper.exists()).toBe(true)
    })
  })
})
