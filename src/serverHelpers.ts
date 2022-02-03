import { awsClient } from './awsClient'
import { getAssetExtensionFromUrl } from './polymorphicHelpers'
import { Block, File } from './types'

export const uploadAssetFromBlock = async (
  block: Block,
  debugMode?: boolean
) => {
  const { type } = block
  const isImage = type === 'image'
  const sourceFile = isImage ? block.image?.file : block.video?.file
  if (!sourceFile) {
    return
  }
  return uploadAssetFromFile(sourceFile, block.id, debugMode)
}

export const uploadAssetsFromBlocks = async (blocks: Block[]) => {
  const assetBlocks = blocks.filter(block => {
    const isImage = block.type === 'image' && block.image?.file?.url
    const isVideo = block.type === 'video' && block.video?.type === 'file'
    return isImage || isVideo
  })
  if (assetBlocks) {
    await Promise.all(
      assetBlocks.map(assetBlock => uploadAssetFromBlock(assetBlock))
    )
  }
  return
}

export const uploadAssetFromFile = async (
  file: File,
  id: string,
  debugMode?: boolean
) => {
  // Only upload assets to S3 in production
  if (!debugMode && process.env.NODE_ENV !== 'production') {
    return
  }
  const sourceAssetExtension = getAssetExtensionFromUrl(file.url)
  const fileName = `${id}.${sourceAssetExtension}`
  return new Promise((resolve, reject) => {
    fetch(file.url)
      .then(response => {
        const fileBody = response.body as any
        const contentType = response.headers.get('Content-Type') as string
        const params = {
          Bucket: process.env.AWS_S3_BUCKET_NAME as string,
          Key: fileName, // File name you want to save as in S3
          Body: fileBody,
          ContentType: contentType,
          ACL: 'public-read',
        }
        // Uploading files to the bucket
        awsClient.upload(params, function(error: any) {
          if (error) {
            console.error('⚠️ S3 upload error')
            console.error(error)
            reject()
            throw error
          }
          console.log('✅ Asset uploaded to S3')
          resolve(response)
        })
      })
      .catch(error => {
        console.error('⚠️ Notion asset download error')
        console.error(error)
        reject(error)
        throw error
      })
  })
}
