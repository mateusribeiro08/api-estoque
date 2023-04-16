const {User: UserModel} = require('../models/User');

const userController = {
  create: async(req, res) => {
    try {
      const user = {
        _id: req.body._id,
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
      };
      
      const response = await UserModel.create(user);

      res.status(201).json({response, msg: "Usuário criado com sucesso!"});
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async(req, res) => {
    try {
      const users = await UserModel.find();
      res.json(users);
    } catch (error) {
      console.log(error);
    }
  },
  get: async(req, res) => {
    try {
      const id = req.params.id;
      const user = await UserModel.findById(id);

      if(!user) {
        res.status(404).json({msg: "Serviço não encontrado!"})
        return;
      }

      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async(req, res) => {
    try {
      const id = req.params.id;
      const user = await UserModel.findById(id);

      if(!user) {
        res.status(404).json({msg: "Usuário não encontrado!"})
        return;
      }

      deletedUser = await UserModel.findByIdAndDelete(id);
      res.status(200).json({deletedUser, msg:"Usuário excluido com sucesso!"});
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const user = {
        _id: req.body._id,
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
      };

      const updatedUser = await UserModel.findByIdAndUpdate(id, user);

      if (!updatedUser) {
        res.status(404).json({ msg: "Usuário não encontrado" });
        return;
      }

      res.status(200).json({ user, msg: "Usuário atualizado com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userController;