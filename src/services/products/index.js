import express from "express";
import db from "../../db/models/index.js";
const router = express.Router();
const { product, review } = db;
router
  .route("/")
  .get(async (req, res, next) => {
    try {
        const products = await product.findAll({
            include:review
        })
        res.send(products)
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
        const products = await product.create(req.body)
        res.send(products)
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
