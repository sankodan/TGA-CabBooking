import React from 'react';
import { render } from '@testing-library/react-native';
import TextInput from '../TextInput';


describe('TextInput', () => {
    let toJSONObject;
    describe('TextInput', () => {
        beforeEach(() => {
            jest.useFakeTimers()
            const { toJSON } = render(<TextInput  errorText = {null} description = {null}/>);
            toJSONObject = toJSON
        })

        it('TextInput snapshot', () => {
            expect(toJSONObject()).toMatchSnapshot()
        })

        it('TextInput snapshot', () => {
            const { toJSON } = render(<TextInput errorText = {null} description = 'dest'/>);
            expect(toJSON()).toMatchSnapshot()
        })
        it('TextInput snapshot', () => {
            const { toJSON } = render(<TextInput errorText = {'error'} description = {null}/>);
            expect(toJSON()).toMatchSnapshot()
        })
    })
})