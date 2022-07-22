import { Listing } from '../listing'
import { getMongooseErrors } from '../../utils'
import { faker } from '@faker-js/faker'
import { PRODUCT_TYPE } from '../../utils/constants'

describe('Listing Model', () => {
  it('should not create a listing if product type is not supported.', () => {
    let listing = new Listing({})

    let error = listing.validateSync()
    let withCurrentError = getMongooseErrors(error)

    expect(withCurrentError('productType')).toBe('Product type is required')

    listing = new Listing({
      productType: 'foo'
    })

    error = listing.validateSync()
    withCurrentError = getMongooseErrors(error)

    expect(withCurrentError('productType')).toBe(
      'foo is not a supported product type. Please check the supported product type.'
    )
  })

  it('should only create a listing based on a supported product.', () => {
    let listing = new Listing({
      productType: PRODUCT_TYPE.TOUR
    })

    let error = listing.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('productType')).not.toBeDefined()
  })

  it('should make sure title length is no more than 100 characters', () => {
    let listing = new Listing({
      title: faker.lorem.words(101)
    })

    console.log(listing)

    let error = listing.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('title')).toBe('The title cannot excede more than 100 characters')
  })

  it.skip('should only create description no more than 500 characters', () => {
    let listing = new Listing({
      description: new String(510)
    })

    let error = listing.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('description')).toBe(
      'The description cannot accede more than 500 characters'
    )
  })
})
