import { ENV } from '../utils/constants'

const { DEV, PROD, STAGING, TEST } = ENV

if (process.env.NODE_ENV !== PROD) {
  require('dotenv').config()
}

const env = process.env.NODE_ENV || 'development'

const ENVS = {
  [DEV]: {
    mongodb: `${process.env.MONGO_CLOUD_URI}/tbl_staging?retryWrites=true&w=majority`,
    dbname: 'TBL_STAGING'
  },
  [STAGING]: {
    mongodb: `${process.env.MONGO_CLOUD_URI}/tbl_staging?retryWrites=true&w=majority`,
    dbname: 'TBL_STAGING'
  },
  [PROD]: {
    mongodb: `${process.env.MONGO_CLOUD_URI}/tbl_prod?retryWrites=true&w=majority`,
    dbname: 'TBL_PROD'
  },
  [TEST]: {
    mongodb: `${process.env.MONGO_CLOUD_URI}/tbl_staging?retryWrites=true&w=majority`,
    dbname: 'TBL_STAGING'
  }
}

process.env.MONGODB_URI = ENVS[env].mongodb
process.env.DB_NAME = ENVS[env].dbname
process.env.NODE_ENV = env
