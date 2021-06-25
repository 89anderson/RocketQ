const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index")) /*o '/' representa o dominio*/
route.get('/room', (req, res) => res.render("room")) /*o '/room' representa o dominio*/
route.get('/create-room', (req, res) => res.render("create-room")) /*o '/create-room' representa o dominio*/

module.exports = route