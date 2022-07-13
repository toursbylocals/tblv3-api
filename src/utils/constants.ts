export const ENV = {
  DEV: 'development',
  STAGING: 'staging',
  TEST: 'test',
  PROD: 'production'
} as const

export const STATUSES = {
  PUBLIC: 'public',
  PRIVATE: 'private',
  UNLISTED: 'unlisted',
  all() {
    return Object.values(this).filter((status) => typeof status !== 'function')
  }
} as const

export const BOOKING_STATUSES = {
  CANCELED: 'canceled',
  COMPLETED: 'completed',
  PENDING: 'pending',
  NOT_RESPONDED: 'not responded',
  all() {
    return Object.values(this).filter((status) => typeof status !== 'function')
  }
} as const

export const CATEGORIES = {
  TOUR: 'tour',
  SHORE_EX: 'shore ex',
  all() {
    return Object.values(this).filter((status) => typeof status !== 'function')
  }
} as const
