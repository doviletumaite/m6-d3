import express from "express";
import db from "../../db/models/index.js";
const router = express.Router();
const { product, review } = db;
router
  .route("/")
  .get(async (req, res, next) => {
    try {
        const reviews = await review.findAll({
            include:product
        })
        res.send(reviews)
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
        const reviews = await review.create(req.body)
        res.send(reviews)
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
