import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import StartScreen from '../StartScreen'
import { shallow } from 'enzyme'

describe('StartScreen', () => {
  const navigate = jest.fn()
  const popToTop = jest.fn()
  const push = jest.fn()
  const navigation = {
    navigate,
    goBack: jest.fn(),
    popToTop,
    push
  }
  describe('clicking loginScreenButton', () => {
    let toJSONObject
    beforeEach(() => {
      const { toJSON } = render(<StartScreen navigation={navigation} />)
      toJSONObject = toJSON
      fireEvent.press(screen.getByTestId('loginScreenButton'))
    })

    it('Dashboard snapshot', () => {
      expect(toJSONObject()).toMatchSnapshot()
    })
  })

  describe('clicking RegisterScreenButton', () => {
    let toJSONObject
    beforeEach(() => {
      const { toJSON } = render(<StartScreen navigation={navigation} />)
      toJSONObject = toJSON
      fireEvent.press(screen.getByTestId('RegisterScreenButton'))
    })

    it('Dashboard snapshot', () => {
      expect(toJSONObject()).toMatchSnapshot()
    })
  })
})
