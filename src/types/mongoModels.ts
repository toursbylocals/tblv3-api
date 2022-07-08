export interface IUserSchema {
  _id: string
  firstName: string
  lastName: string
  createdAt: string
  updatedAt: string
}

export interface IPaymentMethodSchema {
  _id: string
  name: string
  createdAt: string
  description: string
  updatedAt: string
}
