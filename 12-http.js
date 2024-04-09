const http = require('http');


const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('This is our home page')
    }

    if(req.url ==='/about'){
        res.end('This is our about page')
    }

    res.end(`<h1>Oops we do not have the page you requested </h1> <a href="/">Back Home</a>`)
})

server.listen(8000);