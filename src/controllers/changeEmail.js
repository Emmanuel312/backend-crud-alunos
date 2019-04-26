const db = require('../models/db')

module.exports = 
{
    async updateEmail(req,res)
    {
        const aluno =  await db.findByIdAndUpdate(req.params.id,{email: req.body.email})
        return res.json(aluno)
    }
}