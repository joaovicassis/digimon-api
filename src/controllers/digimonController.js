class DigimonController { 
    constructor({ digimonService }) {
        this.digimonService = digimonService    
    }   

    async getAllDigimons(req, res){
        try{
            const digimons = await this.digimonService.getAllDigimons()
            res.json(digimons)
        }catch(error){
            res.status(500).json({
                error: 'Falha ao buscar digimons'
            })
        }
    }

    async getDigimonsByLevel(req, res){
        try{
            const { level } = req.params
            const digimons = await this.digimonService.getDigimonsByLevel(level)
            res.json(digimons)
        }catch (error){
            res.status(500).json({
                error: 'Falha ao buscar Digimon pelo level'
            })
        }
    }

    async getDigimonsByName(req, res){
        try{
            const { name } = req.params
            const digimon = await this.digimonService.getDigimonsByName(name)

            if (!digimon || digimon.length === 0) {
                return res.status(404).send({ error: 'Digimon não encontrado' })
              }
            res.status(200).send(digimon)
        }catch (error){
            res.status(500).json({
                error: 'Falha ao buscar digimon pelo nome'
            })
        }
    }

    async getDigimonsById(req, res){
        try{
            const { id } = req.params
            const digimon = await this.digimonService.getDigimonsById(id)

            if (!digimon) {
                return res.status(404).send({ error: 'Digimon não encontrado' })
              }
            res.status(200).send(digimon)
        }catch (error){
            res.status(500).json({
                error: 'Falha ao buscar Digimon pelo ID'
            })
        }
    }
}

module.exports = DigimonController