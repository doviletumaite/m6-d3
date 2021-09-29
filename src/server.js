import express from "express"
import cors from "cors"

const server = express()
const {PORT} = process.env

server.use(cors())
server.use(express.json())

server.listen(PORT, async () => {
    console.log(`server is running on port ${PORT}`)
})
server.on("error", (error) => {
    console.log("Server si STOPPED", error);
  });
  