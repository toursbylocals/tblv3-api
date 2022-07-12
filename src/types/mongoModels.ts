export interface IUserSchema {
  _id: string
  firstName: string
  lastName: string
  createdAt: string
  updatedAt: string
  email: string
  password: string
  squads: string[]
  status: string
  phone: string
  lastLogin: string
  description: string
  location: ILocationSchema
}

export interface IPaymentMethodSchema {
  _id: string
  name: string
  createdAt: string
  description: string
  updatedAt: string
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

export interface ILocationSchema {
  coordinates: ICoordinatesSchema
  address: string
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

export interface IPaymentProviderSchema {
  
}
