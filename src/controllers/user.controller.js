const create = (req, res) => {
    const {name, username, email, password, avatar, background} = req.body
    if(!name || !username || !email || !password || !avatar || !background){
        res.status(400).send({message: "você deve cadastrar todos os campos do formulário"})
    }
    res.status(201).send({
        message : "usuário criado com sucesso",
        user:{name, username, email, avatar, background}
    })
}

module.exports = {create}