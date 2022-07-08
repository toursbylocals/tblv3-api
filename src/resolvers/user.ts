import { User, UserInput } from '../types'
import { User as UserMongo } from '../models'
import { IUserSchema } from 'src/types/mongoModels';

export async function getUser(userInput: UserInput) {
    const found = await UserMongo.findOne({ firstName: userInput.firstName });
    
    return found as IUserSchema;
}

