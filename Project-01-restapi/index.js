const express = require('express');
const user_data = require('./MOCK_DATA.json')
const fs =require('fs');
const { log } = require('console');
const app = express();
const PORT = 8000;

//!Middleware- plugin 
app.use(express.urlencoded({extended:false}))

app.use((req,res,next)=>{        //?next function is used to shift to another function or say next middleware function  in code base
   console.log('hello from middleware 1\n');
  next();
  //  return res.end('hey');
})
app.use((req,res,next)=>{
    console.log('hello from middleware 2\n');
    fs.appendFile('log.txt',`${Date.now()}: ${req.ip}: ${req.method}: ${req.path}\n`,(err,data)=>{

        next();  
    })
  })




//!Routes
app.get('/users', (req, res) => {
    const html=`
    <ul>
       ${user_data.map((user)=>`<li>${user.first_name}</li>`)}
    </ul>
    `;
    res.send(html)

})

//*REST API

app.get('/api/users', (req, res) => {
    return res.json(user_data);
})

// app.get('/api/users/:id',(req,res)=>{
//     const id= Number(req.params.id);
//     const user = user_data.find((user)=>user.id===id);
//     return res.json(user);
// })

//! create new user using post request

app.post('/api/users',(req,res)=>{
    const body= req.body
    user_data.push({...body,id: user_data.length+1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(user_data), (err,data)=>{
        console.log("body",body);
        return res.json({status:'done', id:user_data.length})      
    })
    // console.log("body",body);
    // return res.json({status:'pending'})      
})

// app.patch('/api/users/:id',(req,res)=>{
//   return  res.json({status:'pending'})
// })

// app.delete('/api/users/:id',(req,res)=>{
//   return  res.json({status:'pending'})
// })

app.route('/api/users/:id').get((req,res)=>{
    const id= Number(req.params.id);
    const user = user_data.find((user)=>user.id===id);
    return res.json(user);
})
.patch((req,res)=>{

   return  res.json({status:'pending'})
 })

.delete((req,res)=>{
   return  res.json({status:'pending'})
 })


app.listen(PORT, () => {
    console.log('server is running on port no. 8000');
})
