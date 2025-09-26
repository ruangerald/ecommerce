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

const listar = async(req,res)=>{
    try {
        const dados = await Controle.findAll()
        res.status(200).json({message: 'Dados Listados!!'})
    } catch (err) {
        res.status(500).json({message: 'Erro ao listar dados!!'})
        console.error('Erro ao listar dados',err)
    }
}

module.exports = {cadastrar, listar}