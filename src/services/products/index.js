import express from "express";
import db from "../../db/models/index.js";
const router = express.Router();
const { product, review } = db;
router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const products = await product.findAll({
        include: review,
      });
      res.send(products);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const products = await product.create(req.body);
      res.send(products);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });
router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const products = await product.findByPk(req.params.id);
      res.send(products);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
        const products = await product.update(req.body, {
            where: {
                id: req.params.id
            },
            returning: true
        })
        res.send(products[1][0])
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
      try {
          const rows = await product.destroy({
              where: {
                  id: req.params.id
              }
          })
          if (rows > 0) {
              res.send("done")
          } else {
              res.status(404).send("product not found")
          }
      } catch (error) {
        console.log(error);
        next(error);      
      }
  })
export default router;
