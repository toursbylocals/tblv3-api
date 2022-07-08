import { Schema, model } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import { IUserSchema } from '../types/mongoModels'

export const UserSchema = new Schema<IUserSchema>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: {
      type: String,
      required: true
    },
    squads: [{ type: Types.ObjectId, ref: 'Squads' }],
    status: { type: String, required: true },
    phone: { type: String, required: true },
    lastLogin: { type: String, required: true },
    location: {
      city: { type: String, default: null },
      country: { type: String, default: null }
    },
    description: { type: String, default: null }
  },
  SchemaGlobalConfig
)

export default model<IUserSchema>('user', UserSchema)
