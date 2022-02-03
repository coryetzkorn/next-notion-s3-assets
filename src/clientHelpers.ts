import { getAssetExtensionFromUrl } from './polymorphicHelpers'
import { Block, File } from './types'

export function getAssetUrlFromBlock(block: Block, debugMode?: boolean) {
  const { type, id } = block
  const isImage = type === 'image'
  const sourceFile = isImage ? block.image?.file : block.video?.file
  if (!sourceFile) {
    return
  }
  return getAssetUrlFromFile(sourceFile, id, debugMode)
}

export function getAssetUrlFromFile(
  file: File,
  id: string,
  debugMode?: boolean
) {
  // Serve images from Notion API locally
  const sourceUrl = file.url
  if (process.env.NODE_ENV !== 'production' && !debugMode) {
    return sourceUrl
  }
  // Serve images from S3 in production
  const assetExtension = getAssetExtensionFromUrl(sourceUrl)
  const baseUrl = process.env.NEXT_PUBLIC_AWS_S3_URL
  const assetUrl = `${baseUrl}/${id}.${assetExtension}`
  return assetUrl
}
