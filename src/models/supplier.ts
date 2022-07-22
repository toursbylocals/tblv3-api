import { Schema, model, Types } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import { ISupplierSchema, IMedia, IOwner, IRatingType } from '../types/mongoModels'
import { MEDIA_SUPPORTED, ROLES } from '../utils/constants'

export const PAYOUT_METHODS = {
  PAYPAL: 'paypal',
  WIRE_TRANSFER: 'wire transfer',
  all() {
    return Object.values(this).filter((status) => typeof status !== 'function')
  }
} as const

export const DEFAULT_RESPONSE_RATE = 2
export const CEILING_GUIDE_COMMISSION = 0.75

const MediaSchema = new Schema<IMedia>({
  type: {
    type: String,
    enum: {
      values: [...MEDIA_SUPPORTED.all()],
      message:
        '{VALUE} is not a supported media. Please check the supported media type. (.png, .mp4, .jpeg, .jpg)'
    },
    default: 'png'
  },
  url: { type: String, default: 'placeholder.png' }
})

const PayoutInputSchema = new Schema({
  fieldName: { type: String, required: [true, 'Payout method fieldName is required.'] },
  value: { type: String, required: [true, 'Payout method value is required.'] }
})

const PayoutMethodOptionSchema = new Schema({
  method: {
    type: String,
    enum: {
      values: [...PAYOUT_METHODS.all()],
      message: '{VALUE} is not a supported payout method. Please check the payout method list'
    },
    required: [true, 'Payout method name is required.']
  },
  fields: { type: [PayoutInputSchema], required: [true, 'Payout method fields is required.'] }
})

const RatingSchema = new Schema<IRatingType>({
  one: { type: Number, default: 0 },
  two: { type: Number, default: 0 },
  three: { type: Number, default: 0 },
  four: { type: Number, default: 0 },
  five: { type: Number, default: 0 }
})

const MemberSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: 'User',
    required: [true, 'UserId of the member is required.']
  },
  role: {
    type: String,
    default: ROLES.USER
  }
})

const VerificationSchema = new Schema(
  {
    status: {
      type: Boolean,
      default: false
    },
    provider: { type: String, default: 'NOT_VERIFIED' },
    verificationId: {
      type: String,
      default: null
    }
  },
  { _id: false }
)

const OwnerSchema = new Schema<IOwner>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'UserId of the owner is required.']
    },
    verified: {
      type: VerificationSchema,
      default: () => ({})
    }
  },
  { _id: false }
)

export const SupplierSchema = new Schema<ISupplierSchema>(
  {
    supplierType: {
      type: Schema.Types.ObjectId,
      required: [true, 'Supplier type is required.']
    },
    name: { type: String, required: [true, 'Supplier name is required.'] },
    bio: {
      type: String,
      default: () => '',
      validate: {
        validator: (bio) => (bio.length > 500 ? false : true),
        message: 'Bio should not be more than 500 characters'
      }
    },
    attributes: { type: [String], default: () => [] }, //TBD (business)
    payoutMethods: { type: [PayoutMethodOptionSchema], default: () => [] },
    currency: { type: String, default: null }, //will pick from the future currency collection
    preferredPayoutMethod: { type: String, default: 'paypal' }, // will pick from the future preferred payout method collection
    rating: { type: RatingSchema, default: () => ({}) },
    media: { type: MediaSchema, default: () => ({}) },
    bestTimeToContact: { type: String, default: () => '' },
    responseRate: { type: Number, default: () => DEFAULT_RESPONSE_RATE },
    commissionBase: {
      type: Number,
      min: 0,
      max: 1,
      validate: {
        validator: (commission) => (commission > CEILING_GUIDE_COMMISSION ? false : true),
        message: 'Commission base should not be higher than 75%'
      },
      default: () => CEILING_GUIDE_COMMISSION
    },
    owner: { type: OwnerSchema, required: [true, 'Owner is required.'] },
    onboarded: { type: Boolean, default: false },
    members: { type: [MemberSchema], default: () => [] }
  },
  SchemaGlobalConfig
)

export default model<ISupplierSchema>('supplier', SupplierSchema)
