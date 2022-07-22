import PaymentMethod from '../paymentMethod'
import { getMongooseErrors } from '../../utils'

describe('PaymentMethod Model', () => {
  it('should provide the name of payment method', () => {
    let paymentMethod = new PaymentMethod({})

    let error = paymentMethod.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('name')).toBe('Payment method is required.')
  })
})
