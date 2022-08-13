import React from 'react';
import { render } from '@testing-library/react-native';
import Button from '../Button';


describe('Button', () => {
    let toJSONObject;
    describe('Button', () => {
        beforeEach(() => {
            const { toJSON } = render(<Button/>);
            toJSONObject = toJSON
        })

        it('Button snapshot', () => {
            expect(toJSONObject()).toMatchSnapshot()
        })

        it('Button snapshot', () => {
            const { toJSON } = render(<Button mode = 'outlined'/>);
            expect(toJSON()).toMatchSnapshot()
        })
    })
})