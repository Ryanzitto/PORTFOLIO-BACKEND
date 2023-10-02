const router = require('express').Router()

const userController = require("../controllers/UserController")

router.route("/like").post((req,res) => userController.create(req,res))

router.route("/getAll").get((req,res) => userController.getAll(req,res))



module.exports = router