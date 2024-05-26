const mongoose = require ("mongoose")

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://globalfinanceiro:testeDigimon@digimon-api.z5tegwh.mongodb.net/?retryWrites=true&w=majority&appName=digimon-api',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Banco de dados conectado com sucesso!")
    } catch (error){
        console.log("Falha ao conectar no banco de dados.", error)
        process.exit(1)
    }
}

module.exports = connectDB