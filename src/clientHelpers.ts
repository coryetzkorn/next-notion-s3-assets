import { getAssetExtensionFromUrl } from './polymorphicHelpers'

export function getAssetUrlFromBlock(block: Block) {
  const { type, id } = block
  const isImage = type === 'image'
  const sourceFile = isImage ? block.image?.file : block.video?.file
  if (!sourceFile) {
    return
  }
  return getS3FileUrl(sourceFile, id)
}

function getS3FileUrl(file: File, id: string) {
  const sourceUrl = file?.url
  if (!sourceUrl) {
    return
  }
  // // Serve images from Notion API locally
  if (process.env.NODE_ENV !== 'production') {
    return sourceUrl
  }
  // Serve images from S3 in production
  const assetExtension = getAssetExtensionFromUrl(sourceUrl)
  const baseUrl = `${process.env.NEXT_PUBLIC_CUSTOM_AWS_URL}`
  const assetUrl = `${baseUrl}/${id}.${assetExtension}`
  return assetUrl
}
