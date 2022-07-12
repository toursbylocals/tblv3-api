import UserSettings from '../userSettings'
import { Types } from 'mongoose'

describe('User Settings Model', () => {
  it('should require all required attributes', () => {
    const test = new UserSettings({})
    const error = test.validateSync()
    expect(error).toBeDefined()
    expect(error!.errors?.userId?.message).toBe('Path `userId` is required.')
  })

  it('should contain a userId as an objectId', () => {
    let userSettings = new UserSettings({
        userId: new Types.ObjectId()
    })
    expect(Types.ObjectId.isValid(userSettings.userId)).toBe(true)
    userSettings = new UserSettings({
      userId: 12345
    })
    expect(Types.ObjectId.isValid(userSettings.userId)).toBe(false)
  })

  it('should throw an error if dateFormat can not be cast to a string', () => {
    let userSettings = new UserSettings({
        dateFormat: {},
    })

    var error = userSettings.validateSync()
    expect(error!.errors['dateFormat'].message).toBe(
      'Cast to string failed for value "{}" (type Object) at path "dateFormat"'
    )
  })

  it('should throw an error if lightMode or timeIn24HrFormat can not be cast to a boolean', () => {
    let userSettings = new UserSettings({
        lightMode: {},
    })

    var error = userSettings.validateSync()
    expect(error!.errors['lightMode'].message).toBe(
      'Cast to Boolean failed for value "{}" (type Object) at path "lightMode" because of "CastError"'
    )

    userSettings = new UserSettings({
        timeIn24HrFormat: "True",
    })
    
    var error = userSettings.validateSync()
    expect(error!.errors['timeIn24HrFormat'].message).toBe(
        'Cast to Boolean failed for value "True" (type string) at path "timeIn24HrFormat" because of "CastError"'
      )
  })

})