export const ENV = {
  DEV: 'development',
  STAGING: 'staging',
  TEST: 'test',
  PROD: 'production'
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

export const MEDIA_SUPPORTED = {
  MP4: 'mp4',
  JPEG: 'jpeg',
  JPG: 'jpg',
  PNG: 'png',
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
