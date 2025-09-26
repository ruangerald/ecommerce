const Controle = require('../model/Controle')

const cadastrar = async (req, res) => {
    const valores = req.body
    if (!valores.marca ||
        !valores.modelo ||
        !valores.tipo ||
        !valores.quantidade ||
        !valores.valor){
            return res.status(400).json({message: 'Digite todos os campos'})
        }

        try {
            const dados = await Controle.create(valores)
            res.status(201).json(dados)
        } catch (err) {
            res.status(501).json({ message: 'Erro ao cadastrar dados' })
            console.error('Erro ao cadastrar dados', err)
        }
}

module.exports = {cadastrar}