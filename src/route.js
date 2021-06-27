const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'})) /*o '/' representa o dominio*/
route.get('/create-room', (req, res) => res.render("index", {page: 'create-room'})) /*o '/create-room' representa o dominio*/

route.get('/room/:room', (req, res) => res.render("room")) /*o '/room' representa o dominio*/


//Formato que o formulario de dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)

module.exports = route