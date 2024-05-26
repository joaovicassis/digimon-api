const mongoose = require("mongoose")

const DigimonModel = new mongoose.Schema({
    id: String,
    name: String,
    img: String,
    level: String   
})

const Digimon = mongoose.model('Digimon', DigimonModel)

module.exports = Digimon