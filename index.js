const express = require("express")
const app = express()
const useRoute = require("./src/routes/user.route")
const port = 4000

app.use(express.json()) //adaptando aplicação para receber/enviar .json

app.use("/user", useRoute)

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))