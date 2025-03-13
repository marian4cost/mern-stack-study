const express = require("express")
const app = express()
const useRoute = require("./src/routes/user.route")

app.use("/soma", useRoute)

app.listen(4000)