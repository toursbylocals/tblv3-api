import Media from '../shared'
import { getMongooseErrors } from '../../utils'

describe('Media Models', () => {
  it('should set by default a placeholder for media, type of png, url of placeholder.png', () => {
    let media = new Media({})

    expect(media.type).toEqual('png')
    expect(media.url).toEqual('placeholder.png')
  })

  it('should not create the supplier if the media is not supported', () => {
    let media = new Media({
      type: '123',
      url: '123'
    })

    let error = media.validateSync()
    let withCurrentError = getMongooseErrors(error)
    expect(withCurrentError('type')).toBe(
      '123 is not a supported media. Please check the suppoerted media type.'
    )
  })
})
