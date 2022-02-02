import { awsClient } from './awsClient'
import { getAssetExtensionFromUrl } from './polymorphicHelpers'

export const uploadBlockToS3 = async (block: any) => {
  const { type } = block
  const isImage = type === 'image'
  const sourceFile = isImage ? block.image?.file : block.video?.file
  if (!sourceFile) {
    return
  }
  return uploadFileToS3(sourceFile, block.id)
}

export const uploadFileToS3 = async (file: File, id: string) => {
  // Only upload assets to S3 in production
  if (process.env.NODE_ENV !== 'production') {
    return
  }
  const sourceAssetExtension = getAssetExtensionFromUrl(file.url)
  const fileName = `${id}.${sourceAssetExtension}`
  return new Promise((resolve, reject) => {
    fetch(file.url)
      .then(response => {
        const fileBody = response.body as any
        const contentType = response.headers.get('Content-Type') as string
        // Setting up S3 upload parameters
        const params = {
          Bucket: process.env.CUSTOM_AWS_BUCKET_NAME as string,
          Key: `blog/${fileName}`, // File name you want to save as in S3
          Body: fileBody,
          ContentType: contentType,
          ACL: 'public-read',
        }
        // Uploading files to the bucket
        awsClient.upload(params, function(err: any) {
          if (err) {
            console.error('⚠️ S3 upload error')
            console.error(err)
            reject()
            throw err
          }
          console.log('✅ Asset uploaded to S3')
          resolve(response)
        })
      })
      .catch(error => {
        console.error('⚠️ Notion asset download error')
        reject(error)
      })
  })
}
