import { v2 as cloudinary } from 'cloudinary';
   cloudinary.config({ 
        cloud_name: process.env.CLOUDNARY_NAME, 
        api_key: process.env.CLOUDNARY_API_KEY, 
        api_secret: process.env.CLOUDNARY_API_SECRET
    });

const uploadOnCloudnary = async (localFilePath) =>{
  try {
    if (!localFilePath) return null
    //upload file on cloudnary
    const responce = await cloudinary.uploader.upload(localFilePath,{
      resource_type:"auto"
    })
    // console.log("File successfully uploaded at cloudnary",responce.url)//url in console
    fs.unlinkSync(localFilePath)
    return responce
  } catch (error) {
    fs.unlinkSync(localFilePath)//remove temp file on local
    return null 
  }
}

export {uploadOnCloudnary}