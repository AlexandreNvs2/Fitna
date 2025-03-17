import express, { urlencoded } from 'express'
import cors from cors

import mongoose from 'mongoose'

const app = express()

const port = 3000


app.get('', (req, res) =>{
    res.send('HELLO GET')
})

app.post('/', (req, res)=>{
    res.send("HELLO")
})


mongoose.connect("mongodb+srv://mathhupel:b2T8BmXBRVwYmlkI@backend.wqvbf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BACKEND")
.then(()=>{
    console.log("Connected to DB")
    app.listen(port, ()=>{
        console.log('SERVER OK')
    })
    
}).catch((error)=>{
    console.log("Connection failed", error)
})
