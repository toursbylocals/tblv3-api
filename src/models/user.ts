import { Schema, model } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import { IPasswordSchema, IUserSchema, IEmailSchema, ISquadSchema } from '../types/mongoModels'
import { SQUADS, ROLES, LANGUAGES } from '../utils/constants'
import isEmail from 'validator/lib/isEmail'
import isStrongPassword from 'validator/lib/isStrongPassword'

export const STATUSES = {
  INACTIVE: 'inactive',
  IDLE: 'idle',
  ACTIVE: 'active',
  TERMINATED: 'terminated',
  all() {
    return Object.values(this).filter((status) => typeof status !== 'function')
  }
} as const

export const PasswordSchema = new Schema<IPasswordSchema>({
  app: {
    type: String,
    enum: {
      values: ['MARKETPLACE', 'KITCHEN'],
      message: '{VALUE} is not a supported app.'
    },
    required: true
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => isStrongPassword(value),
      message: (props) => `This password "${props.value}" is not strong enough.`
    }
  }
})

const EmailSchema = new Schema<IEmailSchema>({
  current: {
    type: String,
    required: [true, 'Current email is required.'],
    validate: [isEmail, 'This is not a valid email.']
  },
  confirmed: { type: Boolean, default: false }
})

const SquadSchema = new Schema<ISquadSchema>({
  name: {
    type: String,
    enum: {
      values: [...SQUADS.all()],
      message: '{VALUE} is not a valid squad. please check the squad list.'
    },
    required: true
  },
  role: {
    type: String,
    enum: {
      values: [...ROLES.all()],
      message: '{VALUE} is not a valid role. (user, admin and etc.)'
    },
    required: true
  }
})
export const UserSchema = new Schema<IUserSchema>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: EmailSchema, default: () => ({}) },
    passwords: {
      type: [PasswordSchema],
      validate: {
        validator: (passwords) => Boolean(passwords.length),
        message: 'Password is required.'
      }
    },
    squads: {
      type: [SquadSchema],
      validate: {
        validator: (squads) => Boolean(squads.length),
        message: (props) => {
          return `${props.value}User should be part of at least one squad.`
        }
      }
    },
    status: {
      type: String,
      enum: {
        values: [...STATUSES.all()],
        message: '{VALUE} is not a supported app.'
      },
      default: STATUSES.ACTIVE
    },
    phone: { type: String, required: true },
    lastLogin: { type: Date, default: null },
    location: {
      city: { type: String, default: null },
      country: { type: String, default: null }
    },
    description: {
      type: String,
      maxLength: [500, 'Description should be less than 500 chars.'],
      default: null
    },
    languages: {
      type: [String],
      enum: [...LANGUAGES.all()],
      default: [LANGUAGES.ENGLISH]
    }
  },
  SchemaGlobalConfig
)

export default model<IUserSchema>('user', UserSchema)
