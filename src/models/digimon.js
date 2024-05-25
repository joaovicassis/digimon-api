const mongoose = require("mongoose")

const DigimonModel = new mongoose.Schema({
    name: String,
    img: String,
    level: String
})

const Digimon = mongoose.model('Digimon', DigimonModel)

module.exports = Digimon