const mongoose = require('mongoose')
const { password } = require('pg/lib/defaults')

const NeuronestSchema = new mongoose.Schema({
    name: String,
    phonenumber:String,
    email:String,
    password:String,
    professional:String
})

const NeuronestModel = mongoose.model("users",NeuronestSchema)
module.exports = NeuronestModel