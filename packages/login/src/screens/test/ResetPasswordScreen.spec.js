import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import ResetPasswordScreen from '../ResetPasswordScreen'
import { shallow } from 'enzyme'

describe('ResetPasswordScreen', () => {
  const navigate = jest.fn()
  const popToTop = jest.fn()
  const push = jest.fn()
  const navigation = {
    navigate,
    goBack: jest.fn(),
    popToTop,
    push
  }
  describe('clicking resetPasswordEmailButton', () => {
    let toJSONObject
    beforeEach(() => {
      const { toJSON } = render(<ResetPasswordScreen navigation={navigation} />)
      toJSONObject = toJSON
      fireEvent.changeText(screen.getByTestId('emailAddress'), 'test@test.com')
      fireEvent.press(screen.getByTestId('resetPasswordEmailButton'))
    })

    it('ResetPasswordScreen snapshot', () => {
      expect(toJSONObject()).toMatchSnapshot()
    })

    it('clears the message field', () => {
      expect(screen.getByTestId('emailAddress')).toHaveProp('value', 'test@test.com')
    })
  })

  describe('clicking resetPasswordEmailButton', () => {
    let toJSONObject
    beforeEach(() => {
      const { toJSON } = render(<ResetPasswordScreen navigation={navigation} />)
      toJSONObject = toJSON
      fireEvent.changeText(screen.getByTestId('emailAddress'), 'test')
      fireEvent.press(screen.getByTestId('resetPasswordEmailButton'))
    })

    it('ResetPasswordScreen snapshot', () => {
      expect(toJSONObject()).toMatchSnapshot()
    })

    it('clears the message field', () => {
      expect(screen.getByTestId('emailAddress')).toHaveProp('value', 'test')
    })
  })
})
