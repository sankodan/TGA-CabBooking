import React from 'react';
import { render } from '@testing-library/react-native';
import Paragraph from '../Paragraph';


describe('Paragraph', () => {
    let toJSONObject;
    describe('Paragraph', () => {
        beforeEach(() => {
            const { toJSON } = render(<Paragraph />);
            toJSONObject = toJSON
        })

        it('Paragraph snapshot', () => {
            expect(toJSONObject()).toMatchSnapshot()
        })
    })
})