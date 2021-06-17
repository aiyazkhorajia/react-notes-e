import React from 'react'
import Notes from 'Pages/Notes'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

describe('<Notes />', () => {
  let store, wrapper

  beforeEach(() => {
    store = configureStore([thunk])({
      notesData: {
        notes: [{ id: 1, title: 'test', body: 'test body' }]
      }
    })

    wrapper = shallow(
      <Provider store={store}>
        <Notes />
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
