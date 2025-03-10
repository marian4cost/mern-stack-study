const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("olá mundo")
})

app.listen(4000)
