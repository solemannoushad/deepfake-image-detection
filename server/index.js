import express from "express"
import imgRoute from "./routes/imgRoute.js"
import blogsRouter from './routes/blogs.js'
import cors from "cors"
import { connectToMongo } from "./config/db.js"

connectToMongo();
const app = express()
const port = 8000


app.use(cors())
app.use('/api/img', imgRoute);
app.use('/api/blogs' , blogsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})