const express = require("express");
const http = require("http");
const path = require("path");
const {Server} = require("socket.io");


const app = express();
const server = http.createServer(app);



app.use(express.static(path.resolve("./public")))


app.get("/",(req,res)=>{
    return res.sendFile("/public/index.html")
})

server.listen(9000, ()=> console.log(`Server started at PORT 9000!`));