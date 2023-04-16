const router = require('express').Router();

const userRouter = require('./user');
const productsRouter = require('./products');
const purchaseRouter = require('./purchase');
const purchaseItemRouter = require('./purchaseItem');
const saleRouter = require('./sale');
const saleItemRouter = require('./saleItem');

router.use('/', userRouter);
router.use('/', productsRouter);
router.use('/', purchaseRouter);
router.use('/', purchaseItemRouter);
router.use('/', saleRouter);
router.use('/', saleItemRouter);


module.exports = router;