import {
    passwordValidator,
    nameValidator,
    emailValidator
  } from '../index'

  describe('Helper', () => {
    it('Helper methods vaild', () => {
        expect(passwordValidator('test12345')).toBeCalled
        expect(nameValidator('name')).toBeCalled
        expect(emailValidator("email@test.com")).toBeCalled
    })
  })

  describe('Helper methods error', () => {
    it('Helper methods error', () => {
        expect(passwordValidator('1234')).toBeCalled
        expect(passwordValidator('')).toBeCalled
        expect(nameValidator('')).toBeCalled
        expect(emailValidator("email.com")).toBeCalled
        expect(emailValidator("")).toBeCalled
    })
  })
