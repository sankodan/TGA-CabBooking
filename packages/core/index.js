import { theme } from './src/theme'
import { firebaseConfig } from './src/config/firebase'
import {
  signUpUser,
  logoutUser,
  loginUser,
  sendEmailWithPassword
} from './src/api/auth'
import {
  passwordValidator,
  nameValidator,
  emailValidator
} from './src/helpers'

module.exports = {
  theme,
  firebaseConfig,
  signUpUser,
  logoutUser,
  loginUser,
  sendEmailWithPassword,
  passwordValidator,
  nameValidator,
  emailValidator
}
