import Booking from '../booking'
import { Types } from 'mongoose'

describe('Booking Model', () => {
  it('should require all required attributes', () => {
    const test = new Booking({})
    const error = test.validateSync()
    expect(error).toBeDefined()
    expect(error!.errors['eventDetails.snapshot.capacity.adults'].message).toBe(
      'Path `eventDetails.snapshot.capacity.adults` is required.'
    )
    expect(error!.errors['eventDetails.snapshot.duration'].message).toBe(
      'Path `eventDetails.snapshot.duration` is required.'
    )
    expect(error!.errors['eventDetails.snapshot.date'].message).toBe(
      'Path `eventDetails.snapshot.date` is required.'
    )
    expect(error!.errors['eventDetails.snapshot.endTime'].message).toBe(
      'Path `eventDetails.snapshot.endTime` is required.'
    )
    expect(error!.errors['eventDetails.snapshot.startTime'].message).toBe(
      'Path `eventDetails.snapshot.startTime` is required.'
    )
    expect(error!.errors['eventDetails.snapshot.meetingPoint.time'].message).toBe(
      'Path `eventDetails.snapshot.meetingPoint.time` is required.'
    )
    expect(error!.errors['eventDetails.snapshot.meetingPoint.address'].message).toBe(
      'Path `eventDetails.snapshot.meetingPoint.address` is required.'
    )
    expect(error!.errors['eventDetails.snapshot.location.address'].message).toBe(
      'Path `eventDetails.snapshot.location.address` is required.'
    )
    expect(error!.errors['eventDetails.snapshot.location.coordinates'].message).toBe(
      'Path `eventDetails.snapshot.location.coordinates` is required.'
    )
    expect(error!.errors['eventDetails.snapshot.leadCustomer'].message).toBe(
      'Path `eventDetails.snapshot.leadCustomer` is required.'
    )
    expect(error!.errors['eventDetails.productTypeId'].message).toBe(
      'Path `eventDetails.productTypeId` is required.'
    )
    expect(error!.errors?.priceForOneUsd?.message).toBe('Path `priceForOneUsd` is required.')
    expect(error!.errors?.category?.message).toBe('Path `category` is required.')
    expect(error!.errors?.listingId?.message).toBe('Path `listingId` is required.')
    expect(error!.errors?.ownCommission?.message).toBe('Path `ownCommission` is required.')
    expect(error!.errors?.checkoutId?.message).toBe('Path `checkoutId` is required.')
    expect(error!.errors['total.exchangeRate'].message).toBe(
      'Path `total.exchangeRate` is required.'
    )
    expect(error!.errors['total.local.currencyId'].message).toBe(
      'Path `total.local.currencyId` is required.'
    )
    expect(error!.errors['total.local.total'].message).toBe(
      'Path `total.local.total` is required.'
    )
    expect(error!.errors['total.ttv.currencyId'].message).toBe(
      'Path `total.ttv.currencyId` is required.'
    )
    expect(error!.errors['total.ttv.total'].message).toBe(
      'Path `total.ttv.total` is required.'
    )
    expect(error!.errors['supplierCommission.total.currencyId'].message).toBe(
      'Path `supplierCommission.total.currencyId` is required.'
    )
    expect(error!.errors['supplierCommission.total.total'].message).toBe(
      'Path `supplierCommission.total.total` is required.'
    )
    expect(error!.errors['supplierCommission.commissionRate'].message).toBe(
      'Path `supplierCommission.commissionRate` is required.'
    )
    expect(error!.errors['supplierCommission.supplierOwner'].message).toBe(
      'Path `supplierCommission.supplierOwner` is required.'
    )
    expect(error!.errors?.status?.message).toBe('Path `status` is required.')
  })

  it('should throw an error if status does not match enum', () => {
    let booking = new Booking({
      status: 'FOO'
    })

    var error = booking.validateSync()
    expect(error!.errors['status'].message).toBe(
      '`FOO` is not a valid enum value for path `status`.'
    )
  })

  it('should throw an error if priceForOneUsd can not be cast to a number', () => {
    let booking = new Booking({
      priceForOneUsd: {},
    })

    var error = booking.validateSync()
    expect(error!.errors['priceForOneUsd'].message).toBe(
      'Cast to Number failed for value "{}" (type Object) at path "priceForOneUsd"'
    )
  })

  it('should contain a listingId as an objectId', () => {
    let booking = new Booking({
      listingId: new Types.ObjectId()
    })
    expect(Types.ObjectId.isValid(booking.listingId)).toBe(true)
    let test = new Booking({
      userId: 12345
    })
    expect(Types.ObjectId.isValid(test.listingId)).toBe(false)
  })

})