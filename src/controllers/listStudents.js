const db = require('../models/db')

module.exports =
{
    async list(req,res)
    {
        const alunos = await db.find({}).sort('nome')
        return res.json(alunos)
    }
}