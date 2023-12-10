import express from "express"
import imgRoute from "./routes/imgRoute.js"
import cors from "cors"


const app = express()
const port = 8000


app.use(cors())
app.use('/api/img', imgRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})