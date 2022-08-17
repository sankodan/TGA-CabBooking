import React from 'react';
import { render } from '@testing-library/react-native';
import Header from '../Header';


describe('Header', () => {
    let toJSONObject;
    describe('Header', () => {
        beforeEach(() => {
            const { toJSON } = render(<Header/>);
            toJSONObject = toJSON
        })

        it('Header snapshot', () => {
            expect(toJSONObject()).toMatchSnapshot()
        })
    })
})