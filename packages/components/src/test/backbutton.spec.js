import React from 'react';
import { render } from '@testing-library/react-native';
import BackButton from '../BackButton';


describe('BackButton', () => {
    let toJSONObject;
    let sendHandler;
    describe('BackButton', () => {
        beforeEach(() => {
            sendHandler = jest.fn().mockName('sendHandler');
            const { toJSON } = render(<BackButton goBack={sendHandler} />);
            toJSONObject = toJSON
        })

        it('BackButton snapshot', () => {
            expect(toJSONObject()).toMatchSnapshot()
        })
    })
})