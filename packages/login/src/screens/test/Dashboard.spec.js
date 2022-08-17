import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import Dashboard from '../Dashboard'
import { shallow } from 'enzyme'

describe('Dashboard', () => {
  let toJSONObject
  describe('clicking logoutButton', () => {
    beforeEach(() => {
      const { toJSON } = render(<Dashboard/>)
      toJSONObject = toJSON
      fireEvent.press(screen.getByTestId('logoutButton'))
    })

    it('Dashboard snapshot', () => {
      expect(toJSONObject()).toMatchSnapshot()
    })
  })
})
