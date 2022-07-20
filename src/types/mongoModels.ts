import { Types } from 'mongoose'
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
  _id: string
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
  _id: string
  name: string
  createdAt: string
  description: string
  updatedAt: string
}
export interface IMediaSchema {
  type: string
  url: string
}

export interface IProductTypeSchema {
  product: Types.ObjectId
  customTour: Boolean
  shareExcursion: Boolean
  tickets: number
  transportation: string
}
export interface IListingSchema {
  listingId: Types.ObjectId
  productType: IProductTypeSchema
  title: string
  description: string
  sellerId: Types.ObjectId
  price: number
  addons: [IAddonsSchema]
  location: string
  startTime: Date
  status: string
  promoCodes: string[]
  category: string[]
  trait: string
  definition: IDefinitionsSchema
}

export interface IAddonsSchema {
  addons: Types.ObjectId
  sellerId: Types.ObjectId
  rules: Types.ObjectId
  type: string
  price: number
}

export interface IDefinitionsSchema {
  type: Types.ObjectId
  stops: Object[]
  title: string
  description: string
  media: string
}

export interface ITraitSchema {
  trait: string[]
}

export interface IStoreCreditSchema {
  credit: string[]
}

export interface ICategorySchema {
  category: string[]
}
