import { ENV, STATUSES } from '../constants'

describe('Constants', () => {
  describe('ENVS', () => {
    it('should make sure it contains all the supported envs', () => {
      const supportedEnvs = ['development', 'production', 'staging', 'test']

      Object.values(ENV).map((env) => {
        expect(supportedEnvs.includes(env)).toBe(true)
      })
    })
  })

  describe('STATUSES', () => {
    it('should only support PUBLIC, PRIVATE, UNLISTED, all()', () => {
      const supported = ['public', 'private', 'unlisted']

      function testSupport(statuses) {
        statuses.forEach((status) => {
          if (typeof status !== 'function') {
            expect(supported.includes(status)).toBe(true)
          }
        })
      }

      testSupport(Object.values(STATUSES))
      testSupport(STATUSES.all())
    })
  })
})
