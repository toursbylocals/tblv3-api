import User from '../user'
import { faker } from '@faker-js/faker'
import { SQUADS, ROLES } from '../../utils/constants'
import { getMongooseErrors } from '../../utils'

const dummyUser = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: { current: faker.internet.email() },
  phone: faker.phone.number('501-###-###'),
  passwords: [{ app: 'MARKETPLACE', password: '@Edd1e123!10' }],
  squads: [{ name: SQUADS.CUSTOMER, role: ROLES.USER }]
}

describe('User Model', () => {
  it('should not save if minimum information is not passed. (firstName, lastName, email, phone, password)', () => {
    let user = new User()

    let error = user.validateSync()

    let withCurrentError = getMongooseErrors(error)

    expect(withCurrentError('firstName')).toBe('Path `firstName` is required.')
    expect(withCurrentError('lastName')).toBe('Path `lastName` is required.')
    expect(withCurrentError('email.current')).toBe('Current email is required.')
    expect(withCurrentError('phone')).toBe('Path `phone` is required.')
    expect(withCurrentError('passwords')).toBe('Password is required.')
  })

  it('should make sure that when user signs up, they should confirm their email.', () => {
    const user = new User(dummyUser)

    expect(user.email.confirmed).toBe(false)
  })

  it('should make sure description follow the guidelines', () => {
    let user = new User(dummyUser)
    expect(new User().description).toBeNull()

    user = new User({
      ...dummyUser,
      description: faker.lorem.sentence(501)
    })

    const error = user.validateSync()
    const withErrors = getMongooseErrors(error)

    expect(withErrors('description')).toBe('Description should be less than 500 chars.')
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

    let error = user.validateSync()
    let withErrors = getMongooseErrors(error)

    expect(withErrors('status')).toBe('FOO is not a supported app.')
  })

  it('should make sure password is strong', () => {
    let user = new User({
      ...dummyUser
    })
    let error = user.validateSync()
    let withErrors = getMongooseErrors(error)

    expect(withErrors('passwords.0.password')).not.toBeDefined()

    let newUser = new User({ ...dummyUser, passwords: [{ app: 'KITCHEN', password: 'foo' }] })

    error = newUser.validateSync()
    withErrors = getMongooseErrors(error)

    expect(withErrors('passwords.0.password')).toBe('This password "foo" is not strong enough.')
  })

  it('should make sure email address is valid', () => {
    let user = new User({
      email: { current: 'jsuh@' }
    })
    var error = user.validateSync()
    let withErrors = getMongooseErrors(error)
    expect(withErrors('email.current')).toBe('This is not a valid email.')
  })

  it('should make sure that default spoken language is english', () => {
    const user = new User(dummyUser)

    expect(user.languages[0]).toBe('english')
  })

  it('should make sure that every user signed up must be part of a squad', () => {
    const user = new User({ ...dummyUser, squads: [] })

    const error = user.validateSync()

    const withErrors = getMongooseErrors(error)

    expect(withErrors('squads')).toBe('User should be part of at least one squad.')
  })
})
