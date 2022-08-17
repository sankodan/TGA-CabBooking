import React from 'react';
import { render } from '@testing-library/react-native';
import Logo from '../Logo';


describe('Logo', () => {
    let toJSONObject;
    describe('Logo', () => {
        beforeEach(() => {
            const { toJSON } = render(<Logo/>);
            toJSONObject = toJSON
        })

        it('Logo snapshot', () => {
            expect(toJSONObject()).toMatchSnapshot()
        })
    })
})