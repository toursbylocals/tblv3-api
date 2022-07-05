import { DateTime } from 'luxon'

export const SchemaGlobalConfig = {
  timestamps: { currentTime: () => DateTime.utc().toJSDate() }
}
