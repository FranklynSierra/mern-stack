import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config()
mongoose.set('strictQuery', false)

export async function connectDB (){
    
    try {
    const db=await mongoose.connect(process.env.MONGO_URL)
        console.log('connect',db.connection.name)
    } catch (error) {
        console.log(error)
    }
   
}


