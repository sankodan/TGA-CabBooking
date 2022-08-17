import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import Checkout from '../Checkout'
import { shallow } from 'enzyme'

describe('Checkout', () => {
  let toJSONObject;
  describe('screen', () => {
    beforeEach(() => {
      const { toJSON } = render(<Checkout/>)
      toJSONObject = toJSON
    })

    it('Checkout snapshot', () => {
      expect(toJSONObject()).toMatchSnapshot()
    })
  })
})
