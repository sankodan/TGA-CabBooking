import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';

import BookingHistoryScreen from '../BookingHistoryScreen';
describe('BookingHistoryScreen', () => {
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
      const { toJSON } = render(<BookingHistoryScreen navigation={navigation}/>)
      toJSONObject = toJSON
    })
    it('BookingHistoryScreen snapshot', () => {
      expect(toJSONObject()).toMatchSnapshot()
    })
  })
})