import { ENV } from '../constants'

describe('Constants', () => {
  describe('ENVS', () => {
    it('should make sure it contains all the supported envs', () => {
      const supportedEnvs = ['development', 'production', 'staging', 'test']

      Object.values(ENV).map((env) => {
        expect(supportedEnvs.includes(env)).toBe(true)
      })
    })
  })
})
