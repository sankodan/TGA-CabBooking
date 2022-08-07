import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-native/extend-expect';

configure({adapter: new Adapter()});

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('@react-native-firebase/auth', () => {
    return () => ({
      signOut: jest.fn(),
      onAuthStateChanged: jest.fn(() => {
        return {
          email: 'test@test.com',
          uid: '12345678abcdefg'
        };
      }),
    })
  })

  