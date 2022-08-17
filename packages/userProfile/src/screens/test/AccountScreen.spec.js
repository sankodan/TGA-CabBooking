import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';

import AccountScreen from '../AccountScreen';
describe('AccountScreen', () => {
    const navigate = jest.fn()
    const popToTop = jest.fn()
    const push = jest.fn()
    const navigation = {
      navigate,
      goBack: jest.fn(),
      popToTop,
      push
    }
  let toJSONObject;
  describe('renders correctly', () => {
    beforeEach(() => {
      const { toJSON } = render(<AccountScreen navigation={navigation}/>)
      toJSONObject = toJSON
    })
    it('AccountScreen snapshot', () => {
      expect(toJSONObject()).toMatchSnapshot()
    })
  })
})