const express = require('express')
const chat  = require("./data/data")
const dotenv = require('dotenv');
const app = express()

dotenv.config();
const port = process.env.PORT || 5000

app.get('/', (req, res) =>{
     res.send('Hello World!')
})
app.get("/api/chat" , (req , res) =>{
    res.send(chat);
})

app.get("/api/chat/:id" , (req , res) =>{
    console.log(req.params.id)
  const singlechat = chat.find((c)=>c._id ===req.params.id)
  res.send(singlechat);
})

app.listen(port, console.log(`Example app listening on port ${port}!`))
