import React from 'react';
import { render } from '@testing-library/react-native';
import Toast from '../Toast';


describe('Toast', () => {
    let toJSONObject;
    describe('Toast', () => {
        beforeEach(() => {
            jest.useFakeTimers()
            const { toJSON } = render(<Toast/>);
            toJSONObject = toJSON
        })

        it('Toast snapshot', () => {
            expect(toJSONObject()).toMatchSnapshot()
        })

        it('Toast snapshot', () => {
            const { toJSON } = render(<Toast type = {'error2'}/>);
            expect(toJSON()).toMatchSnapshot()
        })
    })
})