const mongoose = require("mongoose")
const { db } = require("../model/usermodel")

const Set07DB = "mongodb://0.0.0.0:27017/set07Database" 
const Set07DB1 = "mongodb://127.0.0.0:27017/set07Database" 
const Set07DB2 = "mongodb://localhost/set07Database" 
const liveUrl = "mongodb+srv://Esther:Esther2004@cluster0.byfqhoj.mongodb.net/Set07DataBase?retryWrites=true&w=majority"


const Database = async() => {
    try {
        
        const dbConnect = await mongoose.connect(Set07DB)
        console.log("")
        console.log(`server is connected to ${dbConnect.connection.host}`)
    } catch (error) {
        console.log("error",error)
    }
}

module.exports = Database()