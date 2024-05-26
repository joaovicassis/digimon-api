const request = require('supertest')
const app = require('../app')
const connectDB = require('../models/db')
const mongoose = require('mongoose')
const Digimon = require('../models/digimon')

beforeAll(async () => {
    await connectDB()
    await Digimon.deleteMany({})
    await Digimon.create({ name: 'Agumon', img: 'https://digimon-api.vercel.app/images/agumon.jpg', level: 'Rookie' })
  })

afterAll(async () => {
    await Digimon.deleteMany({})
    await mongoose.connection.close()
})

describe('GET /digimons', () => {
  it('should return all digimons', async () => {
    const digimon = new Digimon({ name: 'Agumon', img: 'https://digimon-api.vercel.app/images/agumon.jpg', level: 'Rookie' })
    await digimon.save()

    const response = await request(app).get('/digimons')
    expect(response.status).toBe(200)
    expect(response.body.length).toBeGreaterThan(0)
    expect(response.body[0]).toHaveProperty('name', 'Agumon')
  })
})

describe('GET /digimons/level/:level', () => {
  it('should return digimons by level', async () => {
    const response = await request(app).get('/digimons/level/Rookie')
    expect(response.status).toBe(200)
    expect(response.body.length).toBeGreaterThan(0)
    expect(response.body[0]).toHaveProperty('level', 'Rookie')
  })
})

describe('GET /digimons/name/:name', () => {
    it('should return a digimon by name', async () => {
      const response = await request(app).get('/digimons/name/Agumon')
      expect(response.status).toBe(200)
      expect(response.body[0]).toHaveProperty('name', 'Agumon')
    })
  
    it('should return 404 if digimon not found', async () => {
      const response = await request(app).get('/digimons/name/Nonexistent')
      expect(response.status).toBe(404)
    })
})

describe('GET /digimons/id/:id', () => {
  it('should return a digimon by id', async () => {
    const digimon = new Digimon({ name: 'Gabumon', img: 'https://digimon-api.vercel.app/images/gabumon.jpg', level: 'Rookie' })
    await digimon.save()

    const response = await request(app).get(`/digimons/id/${digimon._id}`)
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('name', 'Gabumon')
  })

  it('should return 404 if digimon not found', async () => {
    const response = await request(app).get('/digimons/id/60f6a7c4b2a0990015d4b1a8')
    expect(response.status).toBe(404)
  })
})