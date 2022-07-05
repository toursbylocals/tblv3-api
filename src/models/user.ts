import { Schema, model } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import { IUserSchema } from '../types/mongoModels'

export const UserSchema = new Schema<IUserSchema>(
  {
    firstName: { type: String },
    lastName: { type: String }
  },
  SchemaGlobalConfig
)

export default model<IUserSchema>('user', UserSchema)
