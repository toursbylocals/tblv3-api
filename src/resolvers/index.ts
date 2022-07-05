import { Resolvers, User } from 'src/types'
import { User as UserMongo } from '../models'

export const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    me: async () => {
      const found = await UserMongo.findOne({ firstName: 'Eddie' })

      return found as User
    }
  }
}

export default resolvers
