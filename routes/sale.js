const router = require('express').Router();

const saleController = require('../controllers/saleController');

router
  .route("/sale")
  .post((req, res) => saleController.create(req, res));

router
  .route("/sale")
  .get((req, res) => saleController.getAll(req, res));

router
  .route("/sale/:id")
  .get((req, res) => saleController.get(req, res));

router
  .route("/sale/:id")
  .delete((req, res) => saleController.delete(req, res));

router
  .route("/sale/:id")
  .put((req, res) => saleController.update(req, res));

module.exports = router;