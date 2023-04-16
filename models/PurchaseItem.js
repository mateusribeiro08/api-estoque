const mongoose = require('mongoose');

const purchaseItemSchema = new mongoose.Schema({
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

const PurchaseItem = mongoose.model('PurchaseItem', purchaseItemSchema);

module.exports = {
  PurchaseItem,
  purchaseItemSchema
}