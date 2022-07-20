import { Schema, model, Types } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import {
  IAddonsSchema,
  ICategorySchema,
  IDefinitionsSchema,
  IListingSchema,
  IProductTypeSchema,
  IStoreCreditSchema,
  ITraitSchema
} from '../types/mongoModels'

// import { STORE_CREDIT } from 'src/utils/constants'

export const ProductTypeSchema = new Schema({
  product: { type: Types.ObjectId, ref: 'Products', required: [true, 'Product is required'] },
  customTour: { type: Boolean, ref: 'CustomizedTour', default: null },
  shareExcursion: { type: Boolean, ref: 'SharedExcursion', default: null },
  tickets: {
    type: Number,
    ref: 'Tickets',
    value: {
      type: Number,
      min: [1, 'The minimum number of tickets needs to be greater than 0']
    },
    required: [true, 'The number of tickets is required and needs to be greater than 0']
  },
  transportation: {
    type: String,
    ref: 'Transportation',
    value: {
      type: String,
      enum: ['airplane', 'bus', 'train', 'car']
    },
    required: [true, 'The transportation type is required']
  }
})

export const AddonsSchema = new Schema({
  addons: { type: Types.ObjectId, ref: 'Addons', required: [true, 'Addons is required'] },
  sellerId: {
    type: Types.ObjectId,
    ref: 'SupplierId'
  },
  rule: {
    type: Types.ObjectId,
    ref: 'Capacity',
    value: {
      type: Number,
      min: [1, 'The minium capacity needs to be 1 or greater']
    }
  },
  type: { type: Types.ObjectId, ref: 'Ticket', default: null },
  price: {
    type: Number,
    ref: 'PriceTicket',
    value: {
      type: Number,
      min: [20, "The price can't be less than 20."]
    }
  }
})

export const DefinitionsSchema = new Schema({
  type: {
    type: Types.ObjectId,
    ref: 'DefinitionsTour',
    required: [true, 'The type is tour is required']
  },
  stops: [
    {
      orderId: {
        type: Types.ObjectId,
        ref: 'OrderId',
        required: [true, 'The order id is required']
      },
      title: {
        type: String,
        ref: 'Title',
        value: {
          type: String,
          minLength: [10, 'The title needs to be at least 10 characters'],
          maxLength: [30, 'The title cannot accede more than 30 characters']
        },
        required: [true, 'The title is required']
      },
      description: {
        type: String,
        ref: 'Description',
        value: {
          type: String,
          minLength: [20, 'The description needs to be at least 20 characters'],
          maxLength: [60, 'The description cannot accede more than 60 characters']
        },
        required: [true, 'The description is required']
      },
      media: { type: String, ref: 'Media', default: null } // needs to receive the media shared from Jenny
    }
  ]
})

export const TraitSchema = new Schema({
  trait: [{ type: String, ref: 'Traits', default: [] }]
})

export const StoreCreditSchema = new Schema({
  credit: [
    {
      type: String,
      ref: 'Credit',
      required: [true, 'The credit cupom is required'],
      default: []
    }
  ]
})

export const CategorySchema = new Schema({
  category: [
    {
      type: Types.ObjectId,
      ref: 'Categories',
      required: [true, 'The category is required'],
      default: []
    }
  ]
})

export const ListingSchema = new Schema(
  {
    listingId: { type: Types.ObjectId, ref: 'Listings' },
    productType: {
      type: Types.ObjectId,
      ref: 'Products',
      required: [true, 'Product type is required']
    },
    title: {
      type: String,
      required: [true, 'The title is required'],
      maxLength: [30, 'The title cannot accede more than 30 characters']
    },
    description: {
      type: String,
      required: [true, 'The description is required'],
      maxLength: [500, 'The description cannot accede more than 30']
    },
    sellerId: { type: Types.ObjectId, ref: 'SellerId', required: [true, 'Seller id is required'] },
    price: { type: Number, required: [true, 'The price is required'] },
    addons: [{ type: Types.ObjectId, ref: 'Addons', default: [] }],
    location: { type: String, default: null },
    startTime: { type: Date, default: Date.now(), required: [true, 'Start time is required'] },
    status: { type: String, default: null },
    promoCodes: [{ type: Types.ObjectId, ref: 'Credit', default: [] }], // promoCodes: [{ type: String, default: () => STORE_CREDIT }],
    category: [{ type: Types.ObjectId, ref: 'Categories', default: [] }],
    trait: [{ type: Types.ObjectId, ref: 'Traits', default: [] }],
    definition: { type: Types.ObjectId, ref: 'DefinitionsTour', default: null }
  },
  SchemaGlobalConfig
)

export const Listing = model<IListingSchema>('listings', ListingSchema)
export const ProductType = model<IProductTypeSchema>('products', ProductTypeSchema)
export const Addons = model<IAddonsSchema>('addons', AddonsSchema)
export const Definitions = model<IDefinitionsSchema>('definitions', DefinitionsSchema)
export const Trait = model<ITraitSchema>('traits', TraitSchema)
export const StoreCredit = model<IStoreCreditSchema>('storeCredit', StoreCreditSchema)
export const Category = model<ICategorySchema>('categories', CategorySchema)
