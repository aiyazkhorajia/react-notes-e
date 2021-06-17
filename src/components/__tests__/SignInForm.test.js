import React from 'react'
import SignInForm from 'Components/SignInForm'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

describe('<SignInForm />', () => {
  let store, wrapper

  beforeEach(() => {
    store = configureStore([thunk])({
      signInData: {
        isAuthenticated: false
      }
    })

    wrapper = mount(
      <Provider store={store}>
        <SignInForm />
      </Provider>
    )
  })

  describe('on mount', () => {
    it('should renders correctly', () => {
      expect(wrapper.exists()).toBe(true)
    })
    it('should renders form inputs', () => {
      expect(wrapper.find('input').length).toEqual(2)
      expect(wrapper.find('Button').length).toEqual(1)
    })
    it('should change email field value', () => {
      const email = 'test@me.in'
      const input = wrapper.find('input').first()
      input.simulate('change', { target: { value: email } })
      wrapper.update()
      expect(wrapper.find('input').first().prop('value')).toEqual(email)
    })
    it('should change password field value', () => {
      const password = 'Test1234**'
      const pwdInput = wrapper.find("input[type='password']").first()
      pwdInput.simulate('change', { target: { value: password } })
      wrapper.update()
      expect(wrapper.find("input[type='password']").first().prop('value')).toEqual(password)
    })
    // it('should submit the form', () => {
    //   const e = { preventDefault: () => {} }
    //   jest.spyOn(e, 'preventDefault')
    //   const btn = wrapper.find('Button').first()
    //   const spyOnSubmit = jest.spyOn(btn.props(), 'onClick')
    //   wrapper.find('Button').first().props().onClick()
    //   expect(spyOnSubmit).toHaveBeenCalled()
    // })
  })
})
