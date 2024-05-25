const axios = require("axios")
const Digimon = require("..models/Digimon")

class DigimonService{
    async fetchAndSaveDigimons(){
        try{
            const response = await axios.get('https://digimon-api.vercel.app/api/digimon')
            const digimons = response.data


            // Remove qualquer dado existente no banco de dados e cadastra os dados consumidos 
            await Digimon.deleteMany({})
            await Digimon.insertMany(digimons)
        }catch (error){
            console.error("Erro ao buscar e salvar Digimons", error)
        }
    }
}

module.exports = DigimonService