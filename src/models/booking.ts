import { Schema, Types, model } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import { IBookingSchema } from '../types/mongoModels'
import { BOOKING_STATUSES, CATEGORIES } from '../utils/constants'

export const CoordinatesSchema = new Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true }
})

export const CommissionSchema = new Schema({
  supplierId: { type: Types.ObjectId, ref: 'Supplier', required: true },
  commissionRate: { type: Number, required: true },
  commissioned: { type: Boolean },
  owner: { type: Boolean }
})

export const BookingSchema = new Schema(
  {
    paid: { type: Boolean },
    status: {
      type: String,
      enum: [...BOOKING_STATUSES.all()],
      required: true
    },
    commissioned: { type: Boolean },
    supplierCommission: {
      supplierOwner: { type: Types.ObjectId, ref: 'Supplier', required: true },
      commissionRate: { type: Number, required: true },
      total: {
        total: { type: Number, required: true },
        currencyId: { type: Types.ObjectId, ref: 'Currency', required: true }
      },
      percentualAddons: [
        {
          type: CommissionSchema,
          required: true
        }
      ]
    },
    total: {
      ttv: {
        total: { type: Number, required: true },
        currencyId: { type: Types.ObjectId, ref: 'Currency', required: true }
      },
      local: {
        total: { type: Number, required: true },
        currencyId: { type: Types.ObjectId, ref: 'Currency', required: true }
      },
      exchangeRate: { type: Number, required: true }
    },
    checkoutId: { type: Types.ObjectId, ref: 'Payment', required: true },
    ownCommission: { type: Number, required: true },
    rating: { type: Number },
    listingId: { type: Types.ObjectId, ref: 'Listing', required: true },
    category: { 
      type: String,
      enum: [...CATEGORIES.all()],
      required: true 
    },
    customerFeedback: { type: String },
    priceForOneUsd: { type: Number, required: true },
    eventDetails: {
      productTypeId: { type: Types.ObjectId, ref: 'Product', required: true },
      snapshot: {
        leadCustomer: { type: Types.ObjectId, ref: 'User', required: true },
        location: {
          coordinates: {
            type: CoordinatesSchema,
            required: true
          },
          address: { type: String, required: true }
        },
        meetingPoint: {
          address: { type: String, required: true },
          time: { type: Date, required: true },
          reference: { type: String },
          notes: { type: String }
        },
        startTime: { type: Date, required: true },
        endTime: { type: Date, required: true },
        date: { type: Date, required: true },
        duration: { type: Number, required: true },
        capacity: {
          adults: { type: Number, required: true },
          children: { type: Number },
          infants: { type: Number }
        },
        addOns: {
          type: { type: String },
          value: { type: String },
        },
        concerns: {
          medicalConcerns: { type: String },
          dietaryConcerns: { type: String }
        }
      },
    }
  },
  SchemaGlobalConfig
)

export default model<IBookingSchema>('booking', BookingSchema)