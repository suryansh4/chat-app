const express = require('express')
const { chats } = require("./data/data")
const app = express()
const port = 8000

app.get('/', (req, res) =>{
     res.send('Hello World!')
})
app.get("/api/chat" , (req , res) =>{
    res.send(chats);
})


app.listen(port, console.log(`Example app listening on port ${port}!`))