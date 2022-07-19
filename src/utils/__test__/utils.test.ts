import { getMongooseErrors } from '../index'

describe('getMongooseErrors', () => {
  it('should return undefined when no errors', () => {
    const withError = getMongooseErrors(null)
    expect(withError('foo')).toBeUndefined()
  })

  it('should return the error when a field is passed', () => {
    const fakeError = {
      errors: {
        foo: {
          message: 'Test Message'
        }
      }
    }

    const withError = getMongooseErrors(fakeError)
    expect(withError('foo')).toBe('Test Message')
  })
})
