import { Listing } from '../listing'
import { getMongooseErrors } from '../../utils'
import { faker } from '@faker-js/faker'
import { PRODUCT_TYPE } from '../../utils/constants'
import { Types } from 'mongoose'
import { STATUSES } from '../user'

const dummylist = {
  productType: PRODUCT_TYPE.TOUR,
  supplierId: new Types.ObjectId()
}

describe('Listing Model', () => {
  it('should create a listing only if product type is supplied and supported, and the supplierId is supplied.', () => {
    let listing = new Listing({})

    let error = listing.validateSync()
    let withCurrentError = getMongooseErrors(error)

    expect(withCurrentError('productType')).toBe('Product type is required')
    expect(withCurrentError('supplierId')).toBe(
      'The Supplier ID must be specified. Please add a valid seller ID.'
    )

    listing = new Listing({
      productType: 'foo'
    })

    error = listing.validateSync()
    withCurrentError = getMongooseErrors(error)

    expect(withCurrentError('productType')).toBe(
      'foo is not a supported product type. Please check the supported product type.'
    )
  })

  it('should make sure the length of title is no more than 100 characters', () => {
    let listing = new Listing({
      title: faker.lorem.words(101)
    })

    let error = listing.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('title')).toBe(
      'Make sure the title length does not exceed 100 characters'
    )
  })

  it('should only create description no less than 300 and no more than 500 characters', () => {
    let listing = new Listing({
      description: faker.lorem.words(200)
    })
    let error = listing.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('description')).toBe(
      'Make sure the description is not less than 300 characters and no more than 500 characters.'
    )
  })

  it('make sure to set the title as an empty string by default if there is no title provided', () => {
    let listing = new Listing({ ...dummylist })
    expect(listing.title).toBe('')
  })

  it('make sure to set the description as empty string by default if there is no description provided', () => {
    let listing = new Listing({ ...dummylist })
    expect(listing.description).toBe('')
  })

  it('make sure to set the price as 0 by default if there is no price provided', () => {
    let listing = new Listing({ ...dummylist })
    expect(listing.price).toBe(0)
  })

  it('make sure to set the addons as empty array by default if there is no addon added', () => {
    let listing = new Listing({ ...dummylist })
    expect(listing.addons).toEqual([])
  })

  it('make sure to set the location country as Canada and location city as Vancouver by default if there is no location information provided', () => {
    let listing = new Listing({ ...dummylist, location: {} })
    expect(listing.location.country).toBe('Canada')
    expect(listing.location.city).toBe('Vancouver')
  })

  it('make sure to set the start time as when the listing creates by default if there is no start time provided', () => {
    let listing = new Listing({ ...dummylist })
    expect(listing.startTime).toBeDefined()
  })

  it('make sure to set the status as inactive by default if it has not been approved yet', () => {
    let listing = new Listing({ ...dummylist })
    expect(listing.status).toBe(STATUSES.INACTIVE)
  })

  it('make sure to set the promo codes as an empty array if there are no promo codes added', () => {
    let listing = new Listing({ ...dummylist })
    expect(listing.promoCodes).toEqual([])
  })

  it('make sure to set the category as empty array if there is no category provided', () => {
    let listing = new Listing({ ...dummylist })
    expect(listing.category).toEqual([])
  })

  it('make sure to add only the supported category', () => {
    let listing = new Listing({ ...dummylist, category: ['FOO'] })

    let error = listing.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('category.0')).toBe('FOO is not a supported category.')
  })

  it('make sure to set the trait as empty array if there is no trait provided', () => {
    let listing = new Listing({ ...dummylist })
    expect(listing.trait).toEqual([])
  })

  it('make sure to add only the supported trait', () => {
    let listing = new Listing({ ...dummylist, trait: ['BAR'] })

    let error = listing.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('trait.0')).toBe('BAR is not a supported trait.')
  })
})
