interface ILocationSchema {
  city: string | null
  country: string | null
}

export interface IPasswordSchema {
  app: string
  password: string
}

export interface ISqaudSchema {
  squad: string
  role: string
}

export interface IUserSchema {
  _id: string
  firstName: string
  lastName: string
  email: string
  passwords: IPasswordSchema[]
  squad: ISqaudSchema[]
  status: string
  location: ILocationSchema
  phone: number
  lastLogin: Date
  description: string
  createdAt: Date
  updatedAt: Date
  language: string
}

export interface IPaymentMethodSchema {
  _id: string
  name: string
  createdAt: string
  description: string
  updatedAt: string
}
