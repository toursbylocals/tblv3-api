import { Listing, ProductType, Addons, Definitions } from '../listing'
import { getMongooseErrors } from '../../utils'

describe('Listing', () => {
  it('should not save if minimum information is not passed. (Product Type, Title, Description, Seller ID, Price)', () => {
    let listing = new Listing({})
    var error = listing.validateSync()

    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('productType')).toBe('Product type is required')
    expect(withCurrentError('title')).toBe('The title is required')
    expect(withCurrentError('description')).toBe('The description is required')
    expect(withCurrentError('sellerId')).toBe('Seller id is required')
    expect(withCurrentError('price')).toBe('The price is required')
  })
})

describe('ProductType Model', () => {
  it('should throw an error if the product, tickets or transportation is not specified', () => {
    let product = new ProductType({})
    var error = product.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('product')).toBe('Product is required')
    expect(withCurrentError('tickets')).toBe(
      'The number of tickets is required and needs to be greater than 0'
    )
    expect(withCurrentError('transportation')).toBe('The transportation type is required')
  })
})

describe('Addons', () => {
  it('should throw an error if addons are not provided', () => {
    let _addons = new Addons({})
    var error = _addons.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('addons')).toBe('Addons is required')
  })
})

describe('Definitions', () => {
  it('should throw an error if require field is not provided', () => {
    let _definitions = new Definitions({})
    var error = _definitions.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('type')).toBe('The type is tour is required')
  })
})
