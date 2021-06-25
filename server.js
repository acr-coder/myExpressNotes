const express = require("express");
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

const dbURI = "mongodb+srv://yenilik:test123@cluster0.isk58.mongodb.net/notesDB?retryWrites=true&w=majority"

mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then((result)=> console.log("connected database"))
    .catch((err)=>console.log(err))


app.use("/", require("./routes/noteRoute"))

app.listen(3001, ()=>{
    console.log("server is running");
})