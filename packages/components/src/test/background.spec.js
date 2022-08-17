import React from 'react';
import { render } from '@testing-library/react-native';
import Background from '../Background';


describe('Background', () => {
    let toJSONObject;
    describe('Background', () => {
        beforeEach(() => {
            const { toJSON } = render(<Background/>);
            toJSONObject = toJSON
        })

        it('Background snapshot', () => {
            expect(toJSONObject()).toMatchSnapshot()
        })
    })
})