const {Sale: SaleModel} = require('../models/Sale');

const saleController = {
  create: async(req, res) => {
    try {
      const sale = {
        _id: req.body._id,
        usuario: req.body.usuario,
        items: req.body.items
      };
      const response = await SaleModel.create(sale);

      res.status(201).json({response, msg: "Venda criado com sucesso!"});
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async(req, res) => {
    try {
      const purchase = await SaleModel.find();
      res.json(purchase);
    } catch (error) {
      console.log(error);
    }
  },
  get: async(req, res) => {
    try {
      const id = req.params.id;
      const sale = await SaleModel.findById(id);

      if(!sale) {
        res.status(404).json({msg: "Serviço não encontrado!"})
        return;
      }

      res.json(sale);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async(req, res) => {
    try {
      const id = req.params.id;
      const sale = await SaleModel.findById(id);

      if(!sale) {
        res.status(404).json({msg: "Venda não encontrado!"})
        return;
      }

      deletedSale = await SaleModel.findByIdAndDelete(id);
      res.status(200).json({deletedSale, msg:"Venda excluido com sucesso!"});
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const sale = {
        usuario: req.body.usuario,
        descricao: req.body.descricao,
        detalhes: req.body.detalhes,
        preco: req.body.preco,
        fornecedor: req.body.fornecedor,
        estoque: req.body.estoque,
      };

      const updatedSale = await SaleModel.findByIdAndUpdate(id, sale);

      if (!updatedSale) {
        res.status(404).json({ msg: "Venda não encontrado" });
        return;
      }

      res.status(200).json({ sale, msg: "Venda atualizado com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = saleController;