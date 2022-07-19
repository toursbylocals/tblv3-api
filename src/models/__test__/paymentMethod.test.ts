import { Types } from 'mongoose'
import PaymentMethod from '../paymentMethod'

describe('PaymentMethod Model', () => {
  it('should throw an error if name is not provided', () => {
    let paymentMethod = new PaymentMethod({})
    var error = paymentMethod.validateSync()

    expect(error?.message).toBe('paymentMethod validation failed: name: Path `name` is required.')
  })
})
