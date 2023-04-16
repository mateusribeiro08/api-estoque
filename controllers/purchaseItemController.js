const {PurchaseItem:  PurchaseItemModel} = require('../models/PurchaseItem');

const purchaseItemController = {
  create: async(req, res) => {
    try {
      const purchaseItem = {
        id_produto: req.body.id_produto,
        preco_unitario: req.body.preco_unitario,
        quantidade: req.body.quantidade
      };
      const response = await  PurchaseItemModel.create(purchaseItem);

      res.status(201).json({response, msg: "Item criado com sucesso!"});
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async(req, res) => {
    try {
      const purchaseItem = await  PurchaseItemModel.find();
      res.json(purchaseItem);
    } catch (error) {
      console.log(error);
    }
  },
  get: async(req, res) => {
    try {
      const id = req.params.id;
      const purchaseItem = await  PurchaseItemModel.findById(id);

      if(!purchaseItem) {
        res.status(404).json({msg: "Serviço não encontrado!"})
        return;
      }

      res.json(purchaseItem);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async(req, res) => {
    try {
      const id = req.params.id;
      const purchaseItem = await  PurchaseItemModel.findById(id);

      if(!purchaseItem) {
        res.status(404).json({msg: "Compra não encontrado!"})
        return;
      }

      deletedPurchaseItem = await  PurchaseItemModel.findByIdAndDelete(id);
      res.status(200).json({deletedPurchaseItem, msg:"Compra excluido com sucesso!"});
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const purchaseItem = {
        id_produto: req.body.id_produto,
        preco_unitario: req.body.preco_unitario,
        quantidade: req.body.quantidade
      };

      const updatedPurchaseItem = await  PurchaseItemModel.findByIdAndUpdate(id, purchaseItem);

      if (!updatedPurchaseItem) {
        res.status(404).json({ msg: "Item não encontrado" });
        return;
      }

      res.status(200).json({ purchaseItem, msg: "Item atualizado com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = purchaseItemController;