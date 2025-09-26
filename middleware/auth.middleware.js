function authMiddleware (req,res,next){
    const statusLog = req.query.statusLog

    if(!statusLog){
        return res.status(401).json({message: 'Acesso negado faça login!!'})
    }

    next()
}


module.exports = authMiddleware
