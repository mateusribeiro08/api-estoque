require("dotenv").config()
const mongoose = require('mongoose');


dbUser = process.env.DB_USER
dbPassword = process.env.DB_PASS

async function main() {
  try {
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.aj5goyt.mongodb.net/?retryWrites=true&w=majority`)
    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`Erro: ${error}`)
  }
}

module.exports = main