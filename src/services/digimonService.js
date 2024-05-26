const axios = require("axios")


class DigimonService{
    constructor({ db }) {
        this.db = db
    }

    async fetchAndSaveDigimons(){
        try{
            const response = await axios.get('https://digimon-api.vercel.app/api/digimon')
            const digimons = response.data


            // Remove qualquer dado existente no banco de dados e cadastra os dados consumidos 
            await this.db.deleteMany({})
            await this.db.insertMany(digimons)
        }catch (error){
            console.error("Erro ao buscar e salvar Digimons", error)
        }
    }

    async getAllDigimons(){
        return await this.db.find({})
    }

    async getDigimonsByLevel(level){
        return await this.db.find({ level })
    }

    async getDigimonsByName(name){
        return await this.db.find({ name })
    }

    async getDigimonsById(id){
        return await this.db.findById(id)
    }
}

module.exports = DigimonService