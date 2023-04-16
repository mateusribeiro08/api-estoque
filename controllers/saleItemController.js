const {SaleItem:  SaleItemModel} = require('../models/SaleItem');

const saleItemController = {
  create: async(req, res) => {
    try {
      const saleItem = {
        id_produto: req.body.id_produto,
        preco_unitario: req.body.preco_unitario,
        quantidade: req.body.quantidade
      };
      const response = await  SaleItemModel.create(saleItem);

      res.status(201).json({response, msg: "Item criado com sucesso!"});
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async(req, res) => {
    try {
      const saleItem = await  SaleItemModel.find();
      res.json(saleItem);
    } catch (error) {
      console.log(error);
    }
  },
  get: async(req, res) => {
    try {
      const id = req.params.id;
      const saleItem = await  SaleItemModel.findById(id);

      if(!saleItem) {
        res.status(404).json({msg: "Serviço não encontrado!"})
        return;
      }

      res.json(saleItem);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async(req, res) => {
    try {
      const id = req.params.id;
      const saleItem = await  SaleItemModel.findById(id);

      if(!saleItem) {
        res.status(404).json({msg: "Compra não encontrado!"})
        return;
      }

      deletedSaleItem = await  SaleItemModel.findByIdAndDelete(id);
      res.status(200).json({deletedSaleItem, msg:"Compra excluido com sucesso!"});
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const saleItem = {
        id_produto: req.body.id_produto,
        preco_unitario: req.body.preco_unitario,
        quantidade: req.body.quantidade
      };

      const updatedSaleItem = await  SaleItemModel.findByIdAndUpdate(id, saleItem);

      if (!updatedSaleItem) {
        res.status(404).json({ msg: "Item não encontrado" });
        return;
      }

      res.status(200).json({ saleItem, msg: "Item atualizado com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = saleItemController;