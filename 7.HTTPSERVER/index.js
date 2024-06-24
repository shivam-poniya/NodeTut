const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req,res)=> {
    const log = `${Date.now()} : ${req.url} : New Request Received \n`
        fs.appendFile('log.txt', log, (err, data) => {

          switch(req.url){
            case '/' : res.end("Homepage")
                break;

            case '/about': res.end("About Section")
                break;
            
            default:
                res.end("404 $$$$$$$$$$_________")
            
          }
        })
        
})


myServer.listen(8000, () => console.log("Server Started"));


