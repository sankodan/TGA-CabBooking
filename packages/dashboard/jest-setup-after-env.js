/* eslint-disable no-undef */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-native/extend-expect'
import { NativeModules } from 'react-native';

configure({ adapter: new Adapter() })

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')
jest.mock('@react-native-firebase/auth', () => {
  return () => ({
    signOut: jest.fn(),
    onAuthStateChanged: jest.fn(() => {
      return {
        email: 'test@test.com',
        uid: '12345678abcdefg'
      }
    })
  })
})

jest.mock('redux-persist-filesystem-storage', () => {
  return {
    dirs:()=>{}
  }
});

jest.mock('redux-persist', () => {
  return {
    getItem:()=>{},
    persistReducer:()=> {
      return ()=>{}
    },
    persistStore:()=> {
      return ()=>{}
    }
  }
});

jest.mock('redux-persist/integration/react', () => ({
  PersistGate: props => props.children,
}));


NativeModules.RNCAsyncStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  mergeItem: jest.fn(),
  clear: jest.fn(),
  getAllKeys: jest.fn(),
  flushGetRequests: jest.fn(),
  multiGet: jest.fn(),
  multiSet: jest.fn(),
  multiRemove: jest.fn(),
  multiMerge: jest.fn(),
};

NativeModules.RNEncryptedStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  mergeItem: jest.fn(),
  clear: jest.fn(),
  getAllKeys: jest.fn(),
  flushGetRequests: jest.fn(),
  multiGet: jest.fn(),
  multiSet: jest.fn(),
  multiRemove: jest.fn(),
  multiMerge: jest.fn(),
};
