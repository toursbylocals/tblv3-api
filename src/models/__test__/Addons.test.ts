import { Types } from 'mongoose'
import { getMongooseErrors } from '../../utils'
import { Addon } from '../listing'

describe('Addons', () => {
  it('should not create an addon without a supplier ID', () => {
    let addon = new Addon({})

    let error = addon.validateSync()
    let withCurrentError = getMongooseErrors(error)

    expect(withCurrentError('supplierId')).toBe(
      'The supplier id is required. Please provide a validade entry'
    )
  })

  it('should set rule as an empty array by default if there is no rule provided when adding an addon', () => {
    let addon = new Addon({
      supplierId: new Types.ObjectId()
    })

    expect(addon.rule).toEqual([])
  })

  it('should set type as an empty string by default if there is no type provided when adding an addon', () => {
    let addon = new Addon({
      supplierId: new Types.ObjectId()
    })

    expect(addon.type).toBe('')
  })
  it('should set price as 0 by default if there is no price provided when adding an addon', () => {
    let addon = new Addon({
      supplierId: new Types.ObjectId()
    })

    expect(addon.price).toBe(0)
  })

  it('should set type as an empty string by default if there is no type provided when adding an addon', () => {
    let addon = new Addon({
      supplierId: new Types.ObjectId(),
      rule: [{}]
    })

    expect(addon.rule[0].type).toBe('')
  })

  it('should set value as 0 by default if there is no value provided when adding an addon', () => {
    let addon = new Addon({
      supplierId: new Types.ObjectId(),
      rule: [{}]
    })

    expect(addon.rule[0].value).toBe(0)
  })
})
