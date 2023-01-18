import {v2 as cloudinary} from "cloudinary";

cloudinary.config({
    cloud_name:"drepqpgcr",
    api_key:"764254745646837",
    api_secret:"H41DxYTvbjxIT50eAsf2cawurKE"
})

export const uploadImage=async filePath=>{
    
  return await  cloudinary.uploader.upload(filePath,{
        folder:'posts'
    })



}
export const deleteImage = async (id) => {
    return await cloudinary.uploader.destroy(id);
  };