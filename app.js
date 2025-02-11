const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);



app.use(express.static('/public'))


server.listen(9000, ()=> console.log(`Server started at PORT 9000!`));