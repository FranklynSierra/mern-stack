
import Post from "../models/post.js"
import { uploadImage,deleteImage } from "../libs/cloudinary.js"
import fs from "fs-extra";
export const getPosts=async(req,res)=>{
  try {
    const posts=await Post.find()
    res.send(posts)
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message:error.message})
  }
}

export const createPost=async(req,res)=>{
try {
      
  const {title,description}= req.body;
 let image = null;
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }
const newPost= new Post({title,description,image});
await newPost.save()

return res.json(newPost)
} catch (error) {
  return res.status(500).json({message:error.message})
}
}
export const updatePost=async(req,res)=>{
try {
 
  const updatePost=await Post.findByIdAndUpdate(req.params.id,req.body,{new:true})
 

 return res.send(updatePost)
} catch (error) {
  return res.status(500).json({message:error.message})
}
}
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);

    if (post && post.image.public_id) {
      await deleteImage(post.image.public_id);
    }

    if (!post) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (error) {
on({ message: error.message });
  }    return res.status(500).js
};
export const getPost=async(req,res)=>{
try {
  const post=await Post.findById(req.params.id);
  if(!post)return res.sendStatus(404)
  return res.json(post)
  
} catch (error) {
  return res.status(500).json({message:error.message})
}

}