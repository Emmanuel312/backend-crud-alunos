const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema(
{
    nome : String,
    matricula: String,
    login: String,
    email:
    {
        type: String,
        default: `@cin.ufpe.br`
    }
}) 

module.exports = mongoose.model('Alunos',studentSchema)