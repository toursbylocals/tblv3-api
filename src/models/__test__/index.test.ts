import * as Global from '../'

describe('imports', () => {
  it('should test all imports', () => {
    Object.entries(Global).map((entry) => {
      expect(entry[0]).toBeDefined()
      expect(entry[1]).toBeDefined()
    })
  })
})
