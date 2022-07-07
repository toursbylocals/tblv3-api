import { Schema, model } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import { IUserSchema } from '../types/mongoModels'
import { User, UserInput } from '../types'
import { User as UserMongo } from '../models'

export const UserSchema = new Schema<IUserSchema>(
  {
    firstName: { type: String },
    lastName: { type: String }
  },
  SchemaGlobalConfig
)

export default model<IUserSchema>('user', UserSchema)

export async function getUser(userInput: UserInput) {
  console.log(userInput);
    const found = await UserMongo.findOne({ firstName: userInput.firstName })
    
    return found as User;
}

