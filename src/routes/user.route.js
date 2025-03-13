const route = require("express").Router()
const useController = require("../controllers/user.controller")

route.get("/", useController.soma)

module.exports = route