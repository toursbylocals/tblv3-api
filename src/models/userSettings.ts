import { Schema, Types, model } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import { IUserSettingsSchema } from '../types/mongoModels'

export const UserSettingsSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User', required: true },
    preferredLanguage: { type: Types.ObjectId, ref: 'Language' },
    preferredCurrency: { type: Types.ObjectId, ref: 'Currency' },
    dateFormat: { type: String },
    timeIn24HrFormat: { type: Boolean },
    lightMode: { type: Boolean }
  },
  SchemaGlobalConfig
)

export default model<IUserSettingsSchema>('userSettings', UserSettingsSchema)
