// Require http library
const http = require('http');
const fs = require('fs');
const path = require('path');

// create server, file directory and check for error
const server = http.createServer((request,response)=>{
    let filePath = path.join(__dirname, 'files', request.url==='/' ? 'home.html': request.url)
    fs.readFile(filePath, 'utf8', (err,data)=>{
        if (err) {
            response.write('File not found');
        }
        else{
            response.writeHead(200,{'Content-Type': 'text/html'});
            response.end(data)
        }
    })
});

// port to listen
server.listen(4000,'localhost')
console.log("Server created successfully")
