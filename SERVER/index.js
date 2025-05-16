const { log } = require('console');
const http = require('http')  // used to create server in node js
const fs= require('fs');
const url= require('url')
const express = require('express')


//!  createServer() -> It creates web server
// function  myhandler(req,res){
//     const log = `${Date.now()}: ${req.url}: ${req.method} new request recived\n`;
//     const myUrl = url.parse(req.url, true);

//            fs.appendFile('log.txt',log, (err,data)=>{
//             // res.end('Hello from server again')
//             switch(myUrl.pathname){
//                 case '/':
//                     if(req.method==='GET') res.end('Home Page')
//                    break

//                     case '/search':
//                         const search =myUrl.query.search_query;
//                         res.end('Here are your search results' ,+search)

//                 case '/signup':
//                     if(req.method==='GET')
//                         res.end("This is a signup form")

//                     else if(req.method==='POST'){
//                                 //DB query
//                                 res.end('success')
//                     }
//                 default:
//                     res.end('404 Not found')    

//             }
//            })
//             // console.log(req);        
//             // res.end('Hello from server')        // used to sended the response to server  
// }  

// const myServer = http.createServer(myhandler);

// myServer.listen(8000,()=>{
//     console.log(' my server is started');
    
// });  

const app= express();

app.get('/',(req,res)=>{
    return res.send('hello from homepage')
})

app.get('/about',(req,res)=>{
    return res.send(`hello from about page  ${req.query.name}`)
})

//! express does not require http module to create server it is built in in expressjs therefore->

// const myServer1 = http.createServer(app);

// myServer1.listen(8000,()=>{
//     console.log(' my server is started');
    
// });

app.listen(8000,()=>{
     console.log(' my server is started using express');  
});

  