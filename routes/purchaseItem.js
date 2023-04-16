const router = require('express').Router();

const purchaseItemController = require('../controllers/purchaseItemController');

router
  .route("/purchaseItem")
  .post((req, res) => purchaseItemController.create(req, res));

router
  .route("/purchaseItem")
  .get((req, res) => purchaseItemController.getAll(req, res));

router
  .route("/purchaseItem/:id")
  .get((req, res) => purchaseItemController.get(req, res));

router
  .route("/purchaseItem/:id")
  .delete((req, res) => purchaseItemController.delete(req, res));

router
  .route("/purchaseItem/:id")
  .put((req, res) => purchaseItemController.update(req, res));

module.exports = router;