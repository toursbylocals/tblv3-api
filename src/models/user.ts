import { Schema, model, Types } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import { IPasswordSchema, IUserSchema } from '../types/mongoModels'
import { isEmail, isStrongPassword } from 'validator'

export const STATUSES = {
  INACTIVE: 'inactive',
  IDLE: 'idle',
  ACTIVE: 'active',
  TERMINATED: 'terminated',
  all() {
    return Object.values(this).filter((status) => typeof status !== 'function')
  }
} as const

export const SQUADS = {
  QEM: 'qem',
  GATOUREX: 'gatourex',
  GCSTOUREX: 'gcstourex',
  ACSTOURES: 'acstourex',
  LOGISTICS: 'logistics',
  MARKETING: 'marketing',
  ACCOUNTING: 'accounting',
  CUSTOMERSUPPORTOPERATIONS: 'customersupportoperations',
  SUPPLIERSSUPPORTOPERATIONS: 'suppliersupportoperations',
  AGENTS: 'agents',
  AFFILIATES: 'affiliates',
  SUPPLIER: 'supplier',
  CUSTOMER: 'customer',
  GUIDEAPPLICANT: 'guideapplicant',
  ACCOUNTMANAGERS: 'accountmanagers',
  LEGAL: 'legal',
  PCA: 'pca',
  all() {
    return Object.values(this).filter((status) => typeof status !== 'function')
  }
} as const

export const ROLES = {
  OWNER: 'owner',
  ADMIN: 'admin',
  USER: 'user',
  all() {
    return Object.values(this).filter((status) => typeof status !== 'function')
  }
} as const

export const LANGUAGES = {
  ENGLISH: 'english',
  SPANISH: 'spanish',
  all() {
    return Object.values(this).filter((status) => typeof status !== 'function')
  }
} as const

export const PasswordSchema = new Schema<IPasswordSchema>({
  app: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => isStrongPassword(value),
      message: 'This password({value}) is not strong enough.'
    }
  }
})

export const UserSchema = new Schema<IUserSchema>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      validate: [isEmail, 'This email is not valid.']
    },
    password: [PasswordSchema],
    squad: [
      {
        squad: {
          type: String,
          enum: [...SQUADS.all()],
          required: true
        },
        role: {
          type: String,
          enum: [...ROLES.all()],
          default: ROLES.USER,
          required: true
        }
      }
    ],
    status: {
      type: String,
      enum: [...STATUSES.all()],
      default: STATUSES.ACTIVE
    },
    phone: { type: Number, required: true },
    lastLogin: { type: Date, default: null },
    location: {
      city: { type: String, default: null },
      country: { type: String, default: null }
    },
    description: { type: String, default: null },
    language: {
      type: String,
      enum: [...LANGUAGES.all()],
      default: LANGUAGES.ENGLISH
    }
  },
  SchemaGlobalConfig
)

export default model<IUserSchema>('user', UserSchema)
