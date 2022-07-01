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
