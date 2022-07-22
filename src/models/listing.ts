import { Schema, model } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import { IListing } from '../types/mongoModels'
import { PRODUCT_TYPE } from '../utils/constants'

export const ListingSchema = new Schema<IListing>(
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
      maxLength: [100, 'The title cannot excede more than 100 characters'],
      default: null
    }
  },
  SchemaGlobalConfig
)

export const Listing = model<IListing>('listings', ListingSchema)
