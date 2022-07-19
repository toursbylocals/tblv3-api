import { model, Schema } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import { IMediaSchema } from '../types/mongoModels'
import { MEDIA_SUPPORTED } from '../utils/constants'

const MediaSchema = new Schema<IMediaSchema>(
  {
    type: {
      type: String,
      enum: {
        values: [...MEDIA_SUPPORTED.all()],
        message: '{VALUE} is not a supported media. Please check the suppoerted media type.'
      },
      default: 'png'
    },
    url: { type: String, default: 'placeholder.png' }
  },
  SchemaGlobalConfig
)

export default model<IMediaSchema>('media', MediaSchema)
