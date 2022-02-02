import AWS from "aws-sdk"

export const awsClient = new AWS.S3({
  accessKeyId: process.env.CUSTOM_AWS_ACCESS_KEY,
  secretAccessKey: process.env.CUSTOM_AWS_SECRET,
})
