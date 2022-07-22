import { Types } from 'mongoose'
import ContentEnrollment from '../contentEnrollment'
import { getMongooseErrors } from '../../utils'

describe('ContentEnrollment Model', () => {
  it('should not create a contentEnrollment if minimum requirement is not supplied', () => {
    let contentEnrollment = new ContentEnrollment({})

    let error = contentEnrollment.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('userId')).toBe('The userId is required.')
  })

  it('should set productTypes as empty array by default', () => {
    let contentEnrollment = new ContentEnrollment({
      userId: new Types.ObjectId()
    })

    expect(contentEnrollment.productTypes).toEqual([])
  })
})
