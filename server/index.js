import express from "express"
import imgRoute from "./routes/imgRoute.js"
const app = express()
const port = 8000


app.use('/api/img', imgRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})