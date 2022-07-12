import Payment from '../payment'
import { Types } from 'mongoose'

describe('Payment Model', () => {
  it('should require all required attributes', () => {
    const test = new Payment({})
    const error = test.validateSync()
    expect(error).toBeDefined()
    expect(error!.errors?.transactionId?.message).toBe('Path `transactionId` is required.')
    expect(error!.errors?.provider?.message).toBe('Path `provider` is required.')
    expect(error!.errors?.currencyId?.message).toBe('Path `currencyId` is required.')
    expect(error!.errors?.paymentMethod?.message).toBe('Path `paymentMethod` is required.')
    expect(error!.errors?.supplierId?.message).toBe('Path `supplierId` is required.')
  })

  it('should contain a supplierId as an objectId', () => {
    let payment = new Payment({
        supplierId: new Types.ObjectId()
    })
    expect(Types.ObjectId.isValid(payment.supplierId)).toBe(true)
    payment = new Payment({
        supplierId: 12345
    })
    expect(Types.ObjectId.isValid(payment.supplierId)).toBe(false)
  })

  it('should throw an error if transactionId can not be cast to a string', () => {
    let payment = new Payment({
        transactionId: {},
    })

    var error = payment.validateSync()
    expect(error!.errors['transactionId'].message).toBe(
      'Cast to string failed for value "{}" (type Object) at path "transactionId"'
    )
  })

})