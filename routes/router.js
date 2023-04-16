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

router.get('/', function (req, res) {
  res.status(200).json({msg: "Bem vindo a API!!!"})
})


module.exports = router;