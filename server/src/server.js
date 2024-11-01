import app from "./app.js"
import connectDb from "./db/connectDb.js"
import { serverPort } from './config/index.js'

// connect database
connectDb()

app.listen(serverPort, () => console.log("Server is running"))