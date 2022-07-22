import { Schema, model, Types } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import { IAddons, IListingSchema } from '../types/mongoModels'
import { CATEGORY, PRODUCT_TYPE, TRAIT } from '../utils/constants'
import { STATUSES } from './user'

const RuleSchema = new Schema(
  {
    type: { type: String, default: () => '' },
    value: { type: Number, default: () => 0 }
  },
  { _id: false }
)

export const AddonSchema = new Schema(
  {
    supplierId: {
      type: Types.ObjectId,
      required: [true, 'The supplier id is required. Please provide a validade entry']
    },
    rule: { type: [RuleSchema], default: () => [] },
    type: { type: String, default: () => '' },
    price: { type: Number, default: () => 0 }
  },
  { _id: false }
)

const LocationSchema = new Schema(
  {
    country: { type: String, default: 'Canada' },
    city: { type: String, default: 'Vancouver' }
  },
  {
    _id: false
  }
)

export const ListingSchema = new Schema<IListingSchema>(
  {
    productType: {
      type: String,
      enum: {
        values: [...PRODUCT_TYPE.all()],
        message: '{VALUE} is not a supported product type. Please check the supported product type.'
      },
      required: [true, 'Product type is required']
    },
    title: {
      type: String,
      maxLength: [100, 'Make sure the title length does not exceed 100 characters'],
      default: () => ''
    },
    description: {
      type: String,
      validate: {
        validator: (v) => Boolean(v.length > 300 && v.length < 500),
        message:
          'Make sure the description is not less than 300 characters and no more than 500 characters.'
      },
      default: () => ''
    },
    supplierId: {
      type: Types.ObjectId,
      required: [true, 'The Supplier ID must be specified. Please add a valid seller ID.']
    },
    price: {
      type: Number,
      default: () => 0
    },
    addons: {
      type: [AddonSchema],
      default: () => []
    },
    location: {
      type: LocationSchema
    },
    startTime: {
      type: Date,
      default: () => Date.now()
    },
    status: {
      type: String,
      default: STATUSES.INACTIVE
    },
    promoCodes: {
      type: [String],
      default: () => []
    },
    category: {
      type: [String],
      enum: {
        values: [...CATEGORY.all()],
        message: '{VALUE} is not a supported category.'
      },
      default: () => []
    },
    trait: {
      type: [String],
      enum: {
        values: [...TRAIT.all()],
        message: '{VALUE} is not a supported trait.'
      },
      default: () => []
    }
  },
  SchemaGlobalConfig
)

export const Listing = model<IListingSchema>('listings', ListingSchema)
export const Addon = model<IAddons>('addon', AddonSchema)
