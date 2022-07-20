import { Schema, model } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import { IContentEnrollmentSchema } from '../types/mongoModels'

export const ContentEnrollmentSchema = new Schema<IContentEnrollmentSchema>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'The userId is required.']
    },
    productTypes: {
      type: [Schema.Types.ObjectId],
      ref: 'ProductTypes',
      validate: {
        validator: (productTypes) => Boolean(productTypes.length),
        message: (props) => {
          return `${props.value} Should enroll in at least one product type.`
        }
      },
      default: () => []
    }
  },
  SchemaGlobalConfig
)

export default model<IContentEnrollmentSchema>('contentEnrollment', ContentEnrollmentSchema)
