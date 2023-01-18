import express from 'express'
import fileUpload from 'express-fileupload'
import postRoutes from './routes/post.routes.js'

const app=express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(
    fileUpload({
      tempFileDir: "./upload",
      useTempFiles: true,
    })
  );
  
app.use(postRoutes)

export default app


