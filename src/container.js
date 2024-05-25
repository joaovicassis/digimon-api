const { createContainer, asClass, asFunction, asValue } = require('awilix')
const connectDB = require('./models/db')
const Digimon = require('./models/digimon')
const DigimonController = require('./controllers/digimonController')
const DigimonService = require('./services/digimonService')

const container = createContainer()

container.register({
    db: asValue(Digimon),
    digimonController: asClass(DigimonController).singleton(),
    digimonService: asClass(DigimonService).singleton(),
    connectDB: asFunction(connectDB).singleton(),
})

module.exports = container