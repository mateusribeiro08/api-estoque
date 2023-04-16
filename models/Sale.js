const mongoose = require('mongoose');

const { Schema } = mongoose;

const {saleItemSchema} = require('./SaleItem');

const saleSchema = new Schema({
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
    type: [saleItemSchema]
  }
}, {timestamps: true});

const Sale = mongoose.model('Sale', saleSchema);

module.exports = {
  Sale,
  saleSchema
}