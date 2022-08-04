import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';
import  LoginScreen from '../LoginScreen'

jest.mock('@sankodan/com.cabbooking.core/src/api/auth')

describe('LoginScreen', () => {
  describe('clicking send', () => {
    const messageText = 'test@test.com';
    const password = '1234567890';
    let onLoginPressed;

    const navigate = jest.fn();
    const popToTop = jest.fn();
    const push = jest.fn();
    const navigation = {
      navigate,
      goBack: jest.fn(),
      popToTop,
      push
    };

    const wrapper = shallow(<LoginScreen navigation = {navigation}/>);


    beforeEach(() => {
      onLoginPressed = jest.fn().mockName('onLoginPressed');
      render(<LoginScreen navigation = {navigation}/>);
      fireEvent.changeText(screen.getByTestId('emailText'), messageText);
      fireEvent.changeText(screen.getByTestId('passwordText'), password);
      fireEvent.press(screen.getByTestId('loginButton'));
    });

    it('clears the message field', () => {
      expect(screen.getByTestId('emailText')).toHaveProp('value', messageText);
    });
  });
  

  describe('worng password send', () => {
    const messageText = 'test@test.com';
    const password = 'test12345678';
    let onLoginPressed;

    const navigate = jest.fn();
    const popToTop = jest.fn();
    const push = jest.fn();
    const navigation = {
      navigate,
      goBack: jest.fn(),
      popToTop,
      push,
      replace: jest.fn(),
    };

    const wrapper = shallow(<LoginScreen navigation = {navigation}/>);


    beforeEach(() => {
      onLoginPressed = jest.fn().mockName('onLoginPressed');
      let { toJSON } = render(<LoginScreen navigation = {navigation}/>);
      fireEvent.changeText(screen.getByTestId('emailText'), messageText);
      fireEvent.changeText(screen.getByTestId('passwordText'), password);
      fireEvent.press(screen.getByTestId('loginButton'));
      expect(toJSON()).toMatchSnapshot()
    });

    it('clears the message field', () => {

      expect(screen.getByTestId('emailText')).toHaveProp('value', messageText);
    });
  });
  describe('worng password send', () => {
    const messageText = 'test@test.com';
    const password = '123';
    let onLoginPressed;

    const navigate = jest.fn();
    const popToTop = jest.fn();
    const push = jest.fn();
    const navigation = {
      navigate,
      goBack: jest.fn(),
      popToTop,
      push,
      replace: jest.fn(),
    };

    const wrapper = shallow(<LoginScreen navigation = {navigation}/>);


    beforeEach(() => {
      onLoginPressed = jest.fn().mockName('onLoginPressed');
      render(<LoginScreen navigation = {navigation}/>);
      fireEvent.changeText(screen.getByTestId('emailText'), messageText);
      fireEvent.changeText(screen.getByTestId('passwordText'), password);
      fireEvent.press(screen.getByTestId('loginButton'));
      
    });

    it('clears the message field', () => {
      expect(screen.getByTestId('emailText')).toHaveProp('value', messageText);
    });
  });

  describe('click Reset Password', () => {
    const messageText = 'test@test.com';
    const password = '123';
    let onLoginPressed;

    const navigate = jest.fn();
    const popToTop = jest.fn();
    const push = jest.fn();
    const navigation = {
      navigate,
      goBack: jest.fn(),
      popToTop,
      push,
      replace: jest.fn(),
    };

    const wrapper = shallow(<LoginScreen navigation = {navigation}/>);


    beforeEach(() => {
      onLoginPressed = jest.fn().mockName('onLoginPressed');
      render(<LoginScreen navigation = {navigation}/>);
      fireEvent.changeText(screen.getByTestId('emailText'), messageText);
      fireEvent.changeText(screen.getByTestId('passwordText'), password);
      fireEvent.press(screen.getByTestId('ResetPasswordScreen'));
    });

    it('clears the message field', () => {
      expect(screen.getByTestId('emailText')).toHaveProp('value', messageText);
    });
  });

  describe('click RegisterScreen', () => {
    const messageText = 'test@test.com';
    const password = '123';

    const navigate = jest.fn();
    const popToTop = jest.fn();
    const push = jest.fn();
    const navigation = {
      navigate,
      goBack: jest.fn(),
      popToTop,
      push,
      replace: jest.fn(),
    };

    const wrapper = shallow(<LoginScreen navigation = {navigation}/>);


    beforeEach(() => {
      render(<LoginScreen navigation = {navigation}/>);
      fireEvent.changeText(screen.getByTestId('emailText'), messageText);
      fireEvent.changeText(screen.getByTestId('passwordText'), password);
      fireEvent.press(screen.getByTestId('RegisterScreen'));
    });

    it('clears the message field', () => {
      expect(screen.getByTestId('emailText')).toHaveProp('value', messageText);
    });
  });

  describe('click RegisterScreen', () => {
    const messageText = 'test@test.com';
    const password = '123';

    const navigate = jest.fn();
    const popToTop = jest.fn();
    const push = jest.fn();
    const navigation = {
      navigate,
      goBack: jest.fn(),
      popToTop,
      push,
      replace: jest.fn(),
    };

    const wrapper = shallow(<LoginScreen navigation = {navigation}/>);


    beforeEach(() => {
      render(<LoginScreen navigation = {navigation}/>);
      fireEvent.changeText(screen.getByTestId('emailText'), messageText);
      fireEvent.changeText(screen.getByTestId('passwordText'), password);
      fireEvent.press(screen.getByTestId('onDismiss'));
    });

    it('clears the message field', () => {
      expect(screen.getByTestId('emailText')).toHaveProp('value', messageText);
    });
  });


});
