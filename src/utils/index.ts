export const getMongooseErrors = (error: any) => (field: string) => {
  if (!error) {
    return undefined
  }

  return error!.errors[field].message
}
