import Supplier from '../supplier'
import { getMongooseErrors } from '../../utils'
import { faker } from '@faker-js/faker'
import { Types } from 'mongoose'

const dummySupplier = {
  supplierType: new Types.ObjectId(),
  name: faker.name.firstName + ' ' + faker.name.lastName,
  owner: {
    userId: new Types.ObjectId(),
    verified: {
      status: false,
      provider: false,
      verificationId: new Types.ObjectId()
    }
  }
}

describe('Supplier Model', () => {
  it('should not create a Supplier Account if minimum requirement is not supplied ', () => {
    let supplier = new Supplier()
    let error = supplier.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('supplierType')).toBe('Supplier type is required.')
    expect(withCurrentError('name')).toBe('Supplier name is required.')
    expect(withCurrentError('owner')).toBe('Owner is required.')
  })

  it('should fulfil all required fields if adding an owner', () => {
    let supplier = new Supplier({
      ...dummySupplier,
      owner: {}
    })

    let error = supplier.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('owner.userId')).toBe('UserId of the owner is required.')
    expect(typeof supplier.owner.verified).toBe('object')
  })

  it('should set verified status false, provider NOT_VERIFIED and verificationId null as default if there is no verificationId input', () => {
    let supplier = new Supplier({
      ...dummySupplier,
      owner: {}
    })

    expect(supplier.owner.verified.status).toBeFalsy()
    expect(supplier.owner.verified.provider).toBe('NOT_VERIFIED')
    expect(supplier.owner.verified.verificationId).toBeNull()
  })

  it('should fulfil the required fields if adding a payout method', () => {
    let supplier = new Supplier({
      ...dummySupplier,
      payoutMethods: [{}]
    })

    let error = supplier.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('payoutMethods.0.method')).toBe('Payout method name is required.')
  })

  it('should not be able to create payment method if it is not supported by our system', () => {
    let supplier = new Supplier({
      ...dummySupplier,
      payoutMethods: [
        {
          method: 'Credit Card'
        }
      ]
    })

    let error = supplier.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('payoutMethods.0.method')).toBe(
      'Credit Card is not a supported payout method. Please check the payout method list'
    )
  })

  it('should fulfil the required fields if adding a payout method field', () => {
    let supplier = new Supplier({
      ...dummySupplier,
      payoutMethods: [
        {
          method: 'paypal',
          fields: [{}]
        }
      ]
    })

    let error = supplier.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('payoutMethods.0.fields.0.fieldName')).toBe(
      'Payout method fieldName is required.'
    )
    expect(withCurrentError('payoutMethods.0.fields.0.value')).toBe(
      'Payout method value is required.'
    )
  })

  it('should fulfil the required fields if adding a member', () => {
    let supplier = new Supplier({
      ...dummySupplier,
      members: [{}]
    })

    let error = supplier.validateSync()

    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('members.0.userId')).toBe('UserId of the member is required.')
    expect(supplier.members[0].role).toBe('user')
  })

  it('should set bio to empty string if there is no bio typed', () => {
    let supplier = new Supplier({})

    expect(supplier.bio).toEqual('')
  })

  it('should set attributes to empty array if there is no attribute added', () => {
    let supplier = new Supplier({})

    expect(supplier.attributes).toEqual([])
  })

  it('should set payoutMethod to empty array if there is no payoutMethod chosen', () => {
    let supplier = new Supplier({})

    expect(supplier.payoutMethods).toEqual([])
  })

  it('should set null if there is no currency chosen', () => {
    let supplier = new Supplier({})

    expect(supplier.currency).toBeNull()
  })

  it('should set prefered payment method as paypal as default', () => {
    let supplier = new Supplier({})

    expect(supplier.preferredPayoutMethod).toEqual('paypal')
  })

  it('should set rating factors to zero if there is no rating calculated', () => {
    let supplier = new Supplier({})

    expect(supplier.rating.one).toEqual(0)
    expect(supplier.rating.two).toEqual(0)
    expect(supplier.rating.three).toEqual(0)
    expect(supplier.rating.four).toEqual(0)
    expect(supplier.rating.five).toEqual(0)
  })

  it('should set by default a placeholder for media, type of png, url of placeholder.png', () => {
    let supplier = new Supplier({})

    expect(supplier.media.type).toEqual('png')
    expect(supplier.media.url).toEqual('placeholder.png')
  })

  it('should not create the supplier if the media is not supported', () => {
    let supplier = new Supplier({
      media: {
        type: '123'
      }
    })

    let error = supplier.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('media.type')).toBe(
      '123 is not a supported media. Please check the supported media type. (.png, .mp4, .jpeg, .jpg)'
    )
  })

  it('should set bestTimeToContact as empty if there is no user input', () => {
    let supplier = new Supplier({})

    expect(supplier.bestTimeToContact).toEqual('')
  })

  it('should set responseRate to 0 if there is no responseRate entered', () => {
    let supplier = new Supplier({})

    expect(supplier.responseRate).toEqual(2)
  })

  it('should set commission to 0.75 if there is no commission base entered', () => {
    let supplier = new Supplier({})

    expect(supplier.commissionBase).toEqual(0.75)
  })

  it('should set supplier as not onboarded as default', () => {
    let supplier = new Supplier({})

    expect(supplier.onboarded).toBeFalsy()
  })

  it('should set members to empty array if there is no member added', () => {
    let supplier = new Supplier({})

    expect(supplier.members).toEqual([])
  })

  it('should have a bio no more than 500 charecters', () => {
    let supplier1 = new Supplier({
      ...dummySupplier,
      bio: '12345'
    })

    let supplier2 = new Supplier({
      ...dummySupplier,
      bio: 'a'.repeat(510)
    })

    let error1 = supplier1.validateSync()
    expect(error1).toBeUndefined()

    let error2 = supplier2.validateSync()
    let withCurrentError = getMongooseErrors(error2)
    expect(withCurrentError('bio')).toBe('Bio should not be more than 500 characters')
  })

  it('should prevent to set commission over 75%', () => {
    let supplier1 = new Supplier({
      ...dummySupplier,
      commissionBase: 0.8
    })

    let supplier2 = new Supplier({
      ...dummySupplier,
      commissionBase: 0.3
    })

    let error1 = supplier1.validateSync()
    let withCurrentError = getMongooseErrors(error1)
    expect(withCurrentError('commissionBase')).toBe('Commission base should not be higher than 75%')

    let error2 = supplier2.validateSync()
    expect(error2).toBeUndefined()
  })
})
