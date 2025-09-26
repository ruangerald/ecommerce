const Cliente = require('../model/Cliente')

const cadastrar = async (req, res) => {
    const valores = req.body

    if (!valores.nome ||
        !valores.email ||
        !valores.telefone ||
        !valores.senha){
            return res.status(400).json({message: 'Digite todos os campos'})
        }

        try {
            const dados = await Cliente.create(valores)
            res.status(201).json(dados)
        } catch (err) {
            res.status(501).json({ message: 'Erro ao cadastrar dados' })
            console.error('Erro ao cadastrar dados', err)
        }
}

module.exports = { cadastrar }