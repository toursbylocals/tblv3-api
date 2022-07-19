import User from '../user'

describe('User Model', () => {
  it('should throw an error if require field is not provided', () => {
    let user = new User()
    var error = user.validateSync()
    expect(error!.errors['firstName'].message).toBe('Path `firstName` is required.')
    expect(error!.errors['lastName'].message).toBe('Path `lastName` is required.')
    expect(error!.errors['email'].message).toBe('Path `email` is required.')
    expect(error!.errors['phone'].message).toBe('Path `phone` is required.')
  })

  it('should initialize null if description is not passed', () => {
    expect(new User().description).toBeNull()
  })

  it('should make sure that description length is lower than 280', () => {
    const user = new User({
      description:
        'foo bar. foo bar. foo bar. foo bar. foo bar. foo bar. foo bar. foo bar.foo bar. foo bar. foo bar. foo bar. foo bar. foo bar. foo bar. foo bar.foo bar. foo bar. foo bar. foo bar. foo bar. foo bar. foo bar. foo bar.foo bar. foo bar. foo bar. foo bar. foo bar. foo bar. foo bar. foo bar.foo bar. foo bar. foo bar. foo bar. foo bar. foo bar. foo bar. foo bar.foo bar. foo bar. foo bar. foo bar. foo bar. foo bar. foo bar. foo bar.foo bar. foo bar. foo bar. foo bar.'
    })
    expect(user.description.length).not.toBeLessThanOrEqual(280)
  })

  it('should default location to null if location is not passed', () => {
    const user = new User({})
    expect(user.location?.city).toBeNull()
    expect(user.location?.country).toBeNull()
  })

  it('should throw an error if status does not match enum', () => {
    let user = new User({
      status: 'FOO'
    })

    var error = user.validateSync()
    expect(error!.errors['status'].message).toBe(
      '`FOO` is not a valid enum value for path `status`.'
    )
  })

  it.only('should make sure password is strong', () => {
    const validPw = new User({ password: [{ app: 'MARKETPLACE', password: '@lphA1234!' }] })
    const invalidPw = new User({ passwords: [{ app: 'KITCHEN', password: 'foo' }] })

    const errorInvalidPw = invalidPw.validateSync()
    const noErrorCase = validPw.validateSync()

    expect(errorInvalidPw!.errors['passwords.0.password'].message).toBe(
      'This password "foo" is not strong enough.'
    )

    expect(noErrorCase!.errors['passwords.0.password']).not.toBeDefined()
  })

  it('should make sure email address is valid', () => {
    let user = new User({
      email: 'jsuh@'
    })
    var error = user.validateSync()
    expect(error!.errors['email'].message).toBe('This email is not valid.')
  })
})
