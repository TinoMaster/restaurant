import { cubbitConfig } from '@/config/cubbit.config'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

interface TSaveImageCubbit {
   file: File
   imageName: string
}

interface TSaveImageCubbitResponse {
   success: boolean
   data?: string
   message?: string
}

export const cubbitLibs = async ({
   file,
   imageName,
}: TSaveImageCubbit): Promise<TSaveImageCubbitResponse> => {
   const s3Client = new S3Client({
      region: 'eu-west-1',
      endpoint: 'https://s3.cubbit.eu',
      credentials: {
         accessKeyId: cubbitConfig.accessKeyId ?? '',
         secretAccessKey: cubbitConfig.secretAccessKey ?? '',
      },
   })
   const chunks: Uint8Array[] = []

   const reader = file?.stream().getReader()

   async function readStream() {
      while (true) {
         const { done, value } = await reader.read()

         if (done) {
            break
         }

         chunks.push(value)
      }
   }

   await readStream()

   const buffer = new Uint8Array(
      chunks.reduce((acc, chunk) => acc + chunk.length, 0)
   )
   let offset = 0

   chunks.forEach((chunk) => {
      buffer.set(chunk, offset)
      offset += chunk.length
   })

   try {
      await s3Client.send(
         new PutObjectCommand({
            Bucket: cubbitConfig.bucketName,
            Key: imageName,
            Body: buffer,
            ContentType: 'image/jpeg',
            ACL: 'public-read',
         })
      )

      const data = `https://${cubbitConfig.bucketName}.s3.cubbit.eu/${imageName}`
      console.log(`Archivo subido exitosamente a ${data}`)
      return { success: true, data }
   } catch (err: any) {
      console.log('Error', err)
      return { success: false, message: 'Something went wrong' }
   }
}
