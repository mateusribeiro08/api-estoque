const {Product: ProductModel} = require('../models/Product');

const productController = {
  create: async(req, res) => {
    try {
      const product = {
        _id: req.body._id,
        nome: req.body.nome,
        descricao: req.body.descricao,
        detalhes: req.body.detalhes,
        preco: req.body.preco,
        fornecedor: req.body.fornecedor,
        estoque: req.body.estoque,
      };
      const response = await ProductModel.create(product);

      res.status(201).json({response, msg: "Produto criado com sucesso!"});
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async(req, res) => {
    try {
      const products = await ProductModel.find();
      res.json(products);
    } catch (error) {
      console.log(error);
    }
  },
  get: async(req, res) => {
    try {
      const id = req.params.id;
      const product = await ProductModel.findById(id);

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
      const product = await ProductModel.findById(id);

      if(!product) {
        res.status(404).json({msg: "Produto não encontrado!"})
        return;
      }

      deletedProduct = await ProductModel.findByIdAndDelete(id);
      res.status(200).json({deletedProduct, msg:"Produto excluido com sucesso!"});
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const product = {
        nome: req.body.nome,
        descricao: req.body.descricao,
        detalhes: req.body.detalhes,
        preco: req.body.preco,
        fornecedor: req.body.fornecedor,
        estoque: req.body.estoque,
      };

      const updatedProduct = await ProductModel.findByIdAndUpdate(id, product);

      if (!updatedProduct) {
        res.status(404).json({ msg: "Produto não encontrado" });
        return;
      }

      res.status(200).json({ product, msg: "Produto atualizado com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = productController;