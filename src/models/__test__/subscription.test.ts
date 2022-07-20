import { getMongooseErrors } from '../../utils'
import Subscriptions from '../subscriptions'

describe('Subscriptions Model', () => {
  it('should provide the category', () => {
    let subscriptions = new Subscriptions({})

    let error = subscriptions.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('category')).toBe('Subscription category is required.')
  })
})
