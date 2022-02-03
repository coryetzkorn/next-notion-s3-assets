import { getAssetUrlFromBlock } from '../src/clientHelpers'
import { mockBlock } from './mockData'

describe('Client helpers', () => {
  it('return asset url from block data', () => {
    process.env.NEXT_PUBLIC_AWS_S3_URL = 'https://s3.amazonaws.com'
    expect(getAssetUrlFromBlock(mockBlock, true)).toEqual(
      'https://s3.amazonaws.com/9d1084f6-03d7-4aac-8275-8d65102d2cbd.png'
    )
  })
})
