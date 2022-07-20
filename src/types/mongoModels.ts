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
