import { getAssetExtensionFromUrl } from './polymorphicHelpers'

export function getBlockS3Url(block: any) {
  const { type, id } = block
  const isImage = type === 'image'
  const sourceFile = isImage ? block.image?.file : block.video?.file
  if (!sourceFile) {
    return
  }
  return getFileS3Url(sourceFile, id)
}

function getFileS3Url(file: File, id: string) {
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
  const baseUrl = `${process.env.NEXT_PUBLIC_CUSTOM_AWS_URL}/blog`
  const assetUrl = `${baseUrl}/${id}.${assetExtension}`
  return assetUrl
}
