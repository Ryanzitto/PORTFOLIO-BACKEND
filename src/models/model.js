const mongoose = require("mongoose")

const {Schema} = mongoose

const userSchema = new Schema({
    name: String
},
{timestamps: true})

const User = mongoose.model("User", userSchema)

module.exports = {
    User,
    userSchema
}