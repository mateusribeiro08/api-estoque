const mongoose = require('mongoose');

const saleItemSchema = new mongoose.Schema({
  id_produto: {
    type: Number,
    required: true
  },
  quantidade: {
    type: Number,
    required: true
  },
  preco_unitario: {
    type: Number,
    required: true
  },
});

const saleItem = mongoose.model('saleItem', saleItemSchema);

module.exports = {
  saleItem,
  saleItemSchema
}