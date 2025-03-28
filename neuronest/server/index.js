const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const NeuronestModel = require('./models/Neuronest')

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/neuronest")

app.post('/signup',(req,res) => {
    NeuronestModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001 , () =>{
    console.log("server is running")
})