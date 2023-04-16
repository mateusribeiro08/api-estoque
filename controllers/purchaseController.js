const {Purchase: PurchaseModel} = require('../models/Purchase');

const purchaseController = {
  create: async(req, res) => {
    try {
      const product = {
        _id: req.body._id,
        usuario: req.body.usuario,
        items: req.body.items
      };
      const response = await PurchaseModel.create(product);

      res.status(201).json({response, msg: "Compra criado com sucesso!"});
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async(req, res) => {
    try {
      const purchase = await PurchaseModel.find();
      res.json(purchase);
    } catch (error) {
      console.log(error);
    }
  },
  get: async(req, res) => {
    try {
      const id = req.params.id;
      const product = await PurchaseModel.findById(id);

      if(!product) {
        res.status(404).json({msg: "Serviço não encontrado!"})
        return;
      }

      res.json(product);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async(req, res) => {
    try {
      const id = req.params.id;
      const product = await PurchaseModel.findById(id);

      if(!product) {
        res.status(404).json({msg: "Compra não encontrado!"})
        return;
      }

      deletedProduct = await PurchaseModel.findByIdAndDelete(id);
      res.status(200).json({deletedProduct, msg:"Compra excluido com sucesso!"});
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const product = {
        usuario: req.body.usuario,
        descricao: req.body.descricao,
        detalhes: req.body.detalhes,
        preco: req.body.preco,
        fornecedor: req.body.fornecedor,
        estoque: req.body.estoque,
      };

      const updatedProduct = await PurchaseModel.findByIdAndUpdate(id, product);

      if (!updatedProduct) {
        res.status(404).json({ msg: "Compra não encontrado" });
        return;
      }

      res.status(200).json({ product, msg: "Compra atualizado com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = purchaseController;