import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => {
  return {
    isEmail(): boolean {
      return true
    }
  }
})

describe('EmailValidator Adapter', () => {
  test('Should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const is_Valid = sut.isValid('invalid_email@mail.com')
    expect(is_Valid).toBe(false)
  })
  test('Should return true if validator returns true', () => {
    const sut = new EmailValidatorAdapter()
    const is_Valid = sut.isValid('valid_email@mail.com')
    expect(is_Valid).toBe(true)
  })
})
