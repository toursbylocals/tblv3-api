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

export interface IPaymentSchema {
  _id: string
  supplierId: string
  bookingsId: string[]
  currencyId: string
  provider: IPaymentProviderSchema
  transactionId: string
  createdAt: string
  updatedAt: string
}

export interface IUserSettingsSchema {
  _id: string
  userId: string
  preferredLanguage: string
  preferredCurrency: string
  timeIn24HrFormat: boolean
  lightMode: boolean
  createdAt: string
  updatedAt: string
}

export interface IBookingSchema {
  _id: string
  paid: boolean
  status: string
  commissioned: boolean
  supplierCommission: ISupplierCommissionSchema
  total: ITotalSchema
  checkoutId: string
  ownCommission: number
  rating: number
  listingId: string
  category: string
  customerFeedback: string
  priceForOneUsd: number
  eventDetails: IEventDetailsSchema
  createdAt: string
  updatedAt: string
}

export interface ITotalSchema {
  ttv: ITTVSchema
  local: ILocalSchema
  exchangeRate: number
}

export interface ITTVSchema {
  total: number
  currencyId: string
}

export interface ILocalSchema {
  total: number
  currencyId: string
}

export interface ISupplierCommissionSchema {
  supplierOwner: string
  commissionRate: number
  totalCommission: ITotalCommissionSchema
  percentualAddons: ICommissionSchema[]
}

export interface ICommissionSchema {
  supplierId: string
  commissionRate: number
  commissioned: boolean
  owner: boolean
}

export interface ITotalCommissionSchema {
  total: number
  currencyId: string
}

export interface ICoordinatesSchema {
  lat: number
  lng: number
}

export interface IEventDetailsSchema {
  productTypeId: string
  snapshot: ISnapshotSchema
}

export interface ISnapshotSchema {
  leadCustomer: string
  location: ILocationSchema
  meetingPoint: IMeetingPointSchema
  startTime: string
  endTime: string
  date: string
  duration: number
  capacity: ICapacitySchema
  addOns: IAddOnsSchema
  concerns: IConcernsSchema
}

export interface IAddOnsSchema {
  type: string
  value: string
}

export interface IMeetingPointSchema {
  address: string
  time: string
  reference: string
  notes: string
}

export interface ICapacitySchema {
  adults: number
  children: number
  infants: number
}

export interface IConcernsSchema {
  medicalConcerns: string
  dietaryConcerns: string
}

export interface IUserSettingsSchema {
  _id: string
  userId: string
}

export interface IPaymentProviderSchema {}
