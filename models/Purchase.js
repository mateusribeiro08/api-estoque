const mongoose = require('mongoose');

const { Schema } = mongoose;

const {purchaseItemSchema} = require('./PurchaseItem');

const purchaseSchema = new Schema({
  _id: { type: Number,
     required: true
    },  
  usuario: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    default: Date.now(),
    required: true
  },
  items: {
    type: [purchaseItemSchema]
  }
}, {timestamps: true});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = {
  Purchase,
  purchaseSchema
}