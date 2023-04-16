const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: { type: Number,
     required: true
    },  
  nome: {
    type: String,
    required: true
  },
  email: { 
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
  userSchema
}