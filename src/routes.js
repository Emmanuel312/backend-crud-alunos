const express = require('express')
const routes = express.Router()
const listStudents = require('./controllers/listStudents')
const addStudent = require('./controllers/addStudent')
const delStudent = require('./controllers/delStudent')
const changeEmail = require('./controllers/changeEmail')
routes.get('/alunos', listStudents.list)
routes.post('/alunos', addStudent.add)
routes.delete('/alunos/:id', delStudent.del)
routes.put('/alunos/:id', changeEmail.updateEmail)

module.exports = routes