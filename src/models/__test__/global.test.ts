import { SchemaGlobalConfig } from '../globals'

describe('Schema Global Configuration', () => {
  it('should be true if configs are allowed', () => {
    const ALLOWED_CONFIGS = ['timestamps']

    Object.keys(SchemaGlobalConfig).forEach((key) => {
      expect(ALLOWED_CONFIGS.includes(key)).toBe(true)
    })
  })

  it('should return a UTC date for timestamp', () => {
    expect(SchemaGlobalConfig.timestamps.currentTime()).toBeInstanceOf(Date)
  })
})
