import React from 'react';
import { render } from '@testing-library/react-native';

import AboutScreen from '../AboutUsScreen';
describe('AboutScreen', () => {
 let toJSONObject;
  describe('renders correctly', () => {
    beforeEach(() => {
      const { toJSON } = render(<AboutScreen />)
      toJSONObject = toJSON
    })
    it('AboutScreen snapshot', () => {
      expect(toJSONObject()).toMatchSnapshot()
    })
  })
})