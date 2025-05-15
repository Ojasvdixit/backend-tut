const { log } = require('console');
const http = require('http')  // used to create server in node js
const fs= require('fs');
const url= require('url')

//!  createServer() -> It creates web server
const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url}: ${req.method} new request recived\n`;
    const myUrl = url.parse(req.url, true);

           fs.appendFile('log.txt',log, (err,data)=>{
            // res.end('Hello from server again')
            switch(myUrl.pathname){
                case '/':
                    if(req.method==='GET') res.end('Home Page')
                   break

                    case '/search':
                        const search =myUrl.query.search_query;
                        res.end('Here are your search results' ,+search)

                case '/signup':
                    if(req.method==='GET')
                        res.end("This is a signup form")

                    else if(req.method==='POST'){
                                //DB query
                                res.end('success')
                    }
                default:
                    res.end('404 Not found')    

            }
           })
            // console.log(req);        
            // res.end('Hello from server')        // used to sended the response to server  
});  

myServer.listen(8000,()=>{
    console.log(' my server is started');
    
});  
  