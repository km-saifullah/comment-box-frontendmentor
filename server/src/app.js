import express from "express"

const app = express();

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

export default app