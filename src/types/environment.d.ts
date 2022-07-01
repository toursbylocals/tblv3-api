declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_CLOUD_URI: string
      NODE_ENV: 'development' | 'production' | 'staging'
      MONGODB_URI: string
      APP_SECRET: string | undefined
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
