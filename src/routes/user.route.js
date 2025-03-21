const route = require("express").Router()
const useController = require("../controllers/user.controller")

route.post("/", useController.create)

module.exports = route