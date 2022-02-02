export const getAssetExtensionFromUrl = (url: string) => {
  const urlParts = url.split('.')
  if (urlParts.length <= 1) {
    throw new Error('Asset does not have a file extension')
  }
  return urlParts.pop()
}
