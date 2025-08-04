
let http = require('http');


// req > what we send server (params, body)
// res > what server will send us

let server = http.createServer((req,res)=>{
    res.write('<h1>Hii from Node js </h1>')
    res.end();
})

server.listen(4660)