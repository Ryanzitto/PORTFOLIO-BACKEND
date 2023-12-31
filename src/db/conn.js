const mongoose = require("mongoose")

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

async function main(){
    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster99.vlfbz5i.mongodb.net/?retryWrites=true&w=majority`)
        
        console.log("conectado ao banco")
    } catch (error) {
        console.log(error)
    }
}

module.exports = main