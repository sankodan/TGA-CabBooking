import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import AuthLoadingScreen from '../AuthLoadingScreen'
import { shallow } from 'enzyme'
import { logoutUser } from '@sankodan/com.cabbooking.core'

describe('AuthLoadingScreen', () => {
  let toJSONObject
  describe('AuthLoadingScreen', () => {
    const navigate = jest.fn()
    const popToTop = jest.fn()
    const push = jest.fn()
    const navigation = {
      navigate,
      reset: jest.fn(),
      popToTop,
      push
    }
    beforeEach(() => {
      const { toJSON } = render(<AuthLoadingScreen navigation = {navigation}/>)
      toJSONObject = toJSON
      logoutUser()
    })

    it('AuthLoadingScreen snapshot', () => {
      expect(toJSONObject()).toMatchSnapshot()
    })
  })
})
