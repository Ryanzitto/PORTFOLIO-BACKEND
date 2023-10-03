const {User: userModel} = require("../models/model")

const userController = {

    create: async(req,res) => {
        try {
            const user = {
                name: req.body.name,
            }
            const response = await userModel.create(user)
            res.status(200).json({response, msg: "sucesso"})
        } catch (error) {
            console.log(error)
        }
    },

    getAll: async (req, res ) => {
        try {
            const usuarios = await userModel.find();
            res.json(usuarios)
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar usuários' });
        }
    }
}

module.exports = userController