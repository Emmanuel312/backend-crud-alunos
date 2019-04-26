const db = require('../models/db')

module.exports = 
{
    async del(req,res)
    {
        const aluno = await db.findByIdAndDelete(req.params.id)
        return res.json(aluno)
    }
}