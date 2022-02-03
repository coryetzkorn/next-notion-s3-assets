export const getAssetExtensionFromUrl = (url: string) => {
  if (url.includes('.jpg')) {
    return 'jpg'
  }
  if (url.includes('.png')) {
    return 'png'
  }
  if (url.includes('.gif')) {
    return 'gif'
  }
  if (url.includes('.mov')) {
    return 'mov'
  }
  if (url.includes('.mp4')) {
    return 'mp4'
  }
  return undefined
}
