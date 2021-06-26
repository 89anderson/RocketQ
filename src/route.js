const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index")) /*o '/' representa o dominio*/
route.get('/room', (req, res) => res.render("room")) /*o '/room' representa o dominio*/
route.get('/create-room', (req, res) => res.render("create-room")) /*o '/create-room' representa o dominio*/
route.post('/room/:room/:question/:action', (req, res) => res.render())/* rota para deletar ou marcar como lida uma questao */

module.exports = route