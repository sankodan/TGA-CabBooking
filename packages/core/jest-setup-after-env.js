import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-native/extend-expect'
import { NativeModules } from 'react-native';

configure({ adapter: new Adapter() })

jest.mock('react-native-blob-util', () => {
  return {
    DocumentDir: () => {},
    polyfill: () => {},
    dirs:()=>{}
  }
});

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')
jest.mock('@react-native-firebase/auth', () => {
  return () => ({
    createUserAndRetrieveDataWithEmailAndPassword: jest.fn(() => Promise.resolve(true)),
    sendPasswordResetEmail: jest.fn((email) => {
      if (email)  Promise.resolve(true)
      else  throw new Error()
    }),
    createUserWithEmailAndPassword: jest.fn((email, password) => {
      if (email && password) Promise.resolve(true)
      else throw new Error()
    }),
    fetchSignInMethodsForEmail: jest.fn(() => Promise.resolve(true)),
    signOut: jest.fn(() => {
      Promise.resolve(false);
    }),
    onAuthStateChanged: jest.fn(),
    signInWithEmailAndPassword: jest.fn((email, password) => {
      if (email && password) {
       Promise.resolve(true)
      } else throw new Error()
    }),
    currentUser: {
      sendEmailVerification: jest.fn(() => Promise.resolve(true)),
      updateProfile:jest.fn()
    },
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
