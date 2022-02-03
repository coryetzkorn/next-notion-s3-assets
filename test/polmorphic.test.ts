import { getAssetExtensionFromUrl } from '../src/polymorphicHelpers'

describe('Asset file extension detected', () => {
  it('supports jpg', () => {
    expect(getAssetExtensionFromUrl('image.jpg')).toEqual('jpg')
  })
  it('supports png', () => {
    expect(getAssetExtensionFromUrl('image.png')).toEqual('png')
  })
  it('supports gif', () => {
    expect(getAssetExtensionFromUrl('image.gif')).toEqual('gif')
  })
  it('supports mov', () => {
    expect(getAssetExtensionFromUrl('video.mov')).toEqual('mov')
  })
  it('supports mp4', () => {
    expect(getAssetExtensionFromUrl('video.mp4')).toEqual('mp4')
  })
  it('supports assets with multiple extensions', () => {
    expect(getAssetExtensionFromUrl('image.oops.jpg')).toEqual('jpg')
  })
  it('supports assets with paths', () => {
    expect(getAssetExtensionFromUrl('path/image.jpg')).toEqual('jpg')
  })
})
