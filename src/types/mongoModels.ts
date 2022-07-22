import type { ObjectId } from 'mongoose'

interface ILocationSchema {
  city: string | null
  country: string | null
}

export interface IPasswordSchema {
  app: string
  password: string
}

export interface ISquadSchema {
  name: string
  role: string
}

export interface IEmailSchema {
  current: string
  confirmed: boolean
}
export interface IUserSchema {
  _id: ObjectId
  firstName: string
  lastName: string
  email: IEmailSchema
  passwords: IPasswordSchema[]
  squads: ISquadSchema[]
  status: string
  location: ILocationSchema
  phone: string
  lastLogin: Date
  description: string
  createdAt: Date
  updatedAt: Date
  languages: string[]
}

export interface IPaymentMethodSchema {
  _id: ObjectId
  name: string
  createdAt: string
  description: string
  updatedAt: string
}
export interface IMediaSchema {
  type: string
  url: string
}

interface ILocationSchema {
  city: string | null
  country: string | null
}

export interface ISubscriptionsSchema {
  _id: ObjectId
  category: string
}

export interface IContentEnrollmentSchema {
  _id: ObjectId
  userId: ObjectId
  productTypes: ObjectId[]
}

type IPayoutInputsType = {
  fieldName: string
  value: string
}

type IPayoutMethod = {
  method: string
  fields: IPayoutInputsType[]
}
export interface IPaymentMethodSchema {
  _id: ObjectId
  name: string
  createdAt: string
  description: string
  updatedAt: string
}

export type IRatingType = {
  zero: number
  one: number
  two: number
  three: number
  four: number
  five: number
}

type IMediaType = 'mp4' | 'jpeg' | 'jpg' | 'png'

export interface IMedia {
  type: IMediaType
  url: string
}

export type IOwner = {
  userId: ObjectId
  verified: IOwnerVerifiedAttribute
}

type IOwnerVerifiedAttribute = {
  status: boolean
  provider: boolean
  verificationId: ObjectId
}

export type IMember = {
  userId: ObjectId
  role: ObjectId
}

export interface ISupplierSchema {
  _id: ObjectId
  supplierType: ObjectId
  name: string
  bio: string
  attributes: string[]
  payoutMethods: IPayoutMethod[]
  currency: string
  preferredPayoutMethod: string
  rating: IRatingType
  responseRate: number
  media: IMedia
  bestTimeToContact: String
  commissionBase: number
  owner: IOwner
  onboarded: boolean
  members: IMember[]
}
