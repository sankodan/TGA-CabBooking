import {
    signUpUser,
    logoutUser,
    loginUser,
    sendEmailWithPassword
  } from '../index'

  describe('Auth', () => {
    it('Auth methods', () => {
        expect(signUpUser({name:"test", email:"test@tets.com", password:"test1234" })).toBeCalled
        expect(logoutUser()).toBeCalled
        expect(sendEmailWithPassword("email")).toBeCalled
        expect(loginUser({email:"test@tets.com", password:"test1234"})).toBeCalled
    })
  })

  describe('Auth error', () => {
    it('Auth methods error', () => {
        expect(signUpUser({name:"", email:null, password:null })).toBeCalled
        expect(sendEmailWithPassword(null)).toBeCalled
        expect(loginUser({ email:null, password:null })).toBeCalled
    })
  })
