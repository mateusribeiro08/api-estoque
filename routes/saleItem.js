const router = require('express').Router();

const saleItemController = require('../controllers/saleItemController');

router
  .route("/saleItem")
  .post((req, res) => saleItemController.create(req, res));

router
  .route("/saleItem")
  .get((req, res) => saleItemController.getAll(req, res));

router
  .route("/saleItem/:id")
  .get((req, res) => saleItemController.get(req, res));

router
  .route("/saleItem/:id")
  .delete((req, res) => saleItemController.delete(req, res));

router
  .route("/saleItem/:id")
  .put((req, res) => saleItemController.update(req, res));

module.exports = router;