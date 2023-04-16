const router = require('express').Router();

const purchaseController = require('../controllers/purchaseController');

router
  .route("/purchase")
  .post((req, res) => purchaseController.create(req, res));

router
  .route("/purchase")
  .get((req, res) => purchaseController.getAll(req, res));

router
  .route("/purchase/:id")
  .get((req, res) => purchaseController.get(req, res));

router
  .route("/purchase/:id")
  .delete((req, res) => purchaseController.delete(req, res));

router
  .route("/purchase/:id")
  .put((req, res) => purchaseController.update(req, res));

module.exports = router;