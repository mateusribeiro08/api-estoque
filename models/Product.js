const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  _id: { type: Number,
     required: true
    },  
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
  },
  detalhes: {
    type: String,
  },
  preco: {
    type: Number,
    required: true
  },
  fornecedor: {
    type: String,
    required: true
  },
  estoque: {
    type: Number,
    required: true
  },
}, {timestamps: true});

const Product = mongoose.model('Product', productSchema);

module.exports = {
  Product,
  productSchema
}