const express = require("express")
const { scopePerRequest } = require('awilix-express')
const container = require('./container')

const app = express()
app.use(express.json())
app.use(scopePerRequest(container))

const digimonController = container.resolve('digimonController')

app.get('/digimons', (req, res) => digimonController.getAllDigimons(req, res))
app.get('/digimons/level/:level', (req, res) => digimonController.getDigimonsByLevel(req, res))
app.get('/digimons/name/:name', (req, res) => digimonController.getDigimonsByName(req, res))
app.get('/digimons/id/:id', (req, res) => digimonController.getDigimonsById(req, res))

const port = 3000

app.listen(port, async () => {
    console.log("Servidor iniciado com sucesso!")
    await container.resolve('connectDB')
    const digimonService = container.resolve('digimonService')
    digimonService.fetchAndSaveDigimons()
})

module.exports = app