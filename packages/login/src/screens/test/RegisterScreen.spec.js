import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import { shallow } from 'enzyme'
import RegisterScreen from '../RegisterScreen'

jest.mock('@sankodan/com.cabbooking.core/src/api/auth')

describe('RegisterScreen', () => {
  describe('clicking signup', () => {
    const messageText = 'test@test.com'
    const password = '1234567890'
    let onLoginPressed

    const navigate = jest.fn()
    const popToTop = jest.fn()
    const push = jest.fn()
    const navigation = {
      navigate,
      replace: jest.fn(),
      popToTop,
      push
    }

    const wrapper = shallow(<RegisterScreen navigation = {navigation}/>)

    beforeEach(() => {
      onLoginPressed = jest.fn().mockName('onLoginPressed')
      render(<RegisterScreen navigation = {navigation}/>)
      fireEvent.changeText(screen.getByTestId('name'), 'name')
      fireEvent.changeText(screen.getByTestId('email'), messageText)
      fireEvent.changeText(screen.getByTestId('password'), password)
      fireEvent.press(screen.getByTestId('signup'))
    })

    it('clears the message field', () => {
      expect(screen.getByTestId('email')).toHaveProp('value', messageText)
    })
  })

  describe('clicking signup', () => {
    const messageText = 'test@test.com'
    const password = '1234567890'
    let onLoginPressed

    const navigate = jest.fn()
    const popToTop = jest.fn()
    const push = jest.fn()
    const navigation = {
      navigate,
      replace: jest.fn(),
      popToTop,
      push
    }

    const wrapper = shallow(<RegisterScreen navigation = {navigation}/>)

    beforeEach(() => {
      onLoginPressed = jest.fn().mockName('onLoginPressed')
      render(<RegisterScreen navigation = {navigation}/>)
      fireEvent.changeText(screen.getByTestId('name'), 'name')
      fireEvent.changeText(screen.getByTestId('email'), messageText)
      fireEvent.changeText(screen.getByTestId('password'), password)
      fireEvent.press(screen.getByTestId('loginButton'))
    })

    it('clears the message field', () => {
      expect(screen.getByTestId('email')).toHaveProp('value', messageText)
    })
  })
}
)
