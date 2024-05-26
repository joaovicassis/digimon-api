const axios = require('axios')
const mongoose = require('mongoose')
const Digimon = require('../models/digimon')
const DigimonService = require('../services/digimonService')

jest.mock('axios')

describe('DigimonService', () => {
    let db
    let digimonService

  beforeAll(async () => {
    await mongoose.connect('mongodb+srv://globalfinanceiro:testeDigimon@digimon-api.z5tegwh.mongodb.net/digimon-api-test', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    db = Digimon
    digimonService = new DigimonService({ db })
  })

  afterAll(async () => {
    await Digimon.deleteMany({})
    await mongoose.connection.close()
  })

  beforeEach(async () => {
    await Digimon.deleteMany({})
  })

  it('should fetch and save digimons', async () => {
    const digimonsData = [
      { name: 'Agumon', img: 'https://digimon-api.vercel.app/images/agumon.jpg', level: 'Rookie' },
      { name: 'Gabumon', img: 'https://digimon-api.vercel.app/images/gabumon.jpg', level: 'Rookie' }
    ]
    
    axios.get.mockResolvedValue({ data: digimonsData })

    const digimonService = new DigimonService()
    await digimonService.fetchAndSaveDigimons()

    const digimons = await Digimon.find({})
    expect(digimons.length).toBe(2)
    expect(digimons[0]).toHaveProperty('name', 'Agumon')
    expect(digimons[1]).toHaveProperty('name', 'Gabumon')
  })
})