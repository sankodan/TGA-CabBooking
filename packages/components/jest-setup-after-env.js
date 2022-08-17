import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-native/extend-expect'

configure({ adapter: new Adapter() })

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
