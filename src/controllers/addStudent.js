const db = require('../models/db')

module.exports = 
{
    async add(req,res)
    {
        const aluno = await db.create(req.body) // add na collection
        return res.json(aluno)
    }
}