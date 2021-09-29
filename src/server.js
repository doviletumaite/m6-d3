import express from "express";
import cors from "cors";
import { connectDB } from "./db/index.js";
import productRouter from "./services/products/index.js";
import reviewRouter from "./services/reviews/index.js";

const server = express();
const { PORT } = process.env;

server.use(cors());
server.use(express.json());

server.use("/products", productRouter)
server.use("/reviews", reviewRouter)

server.listen(PORT, async () => {
    await connectDB()
  console.log(`server is running on port ${PORT}`);
});
server.on("error", (error) => {
  console.log("Server si STOPPED", error);
});
