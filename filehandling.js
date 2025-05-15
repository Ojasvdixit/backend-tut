// file handling means doing operations on files

const fs =require('fs')

const os = require('os')
console.log(os.cpus().length);         //? to identify how many cpus or cores  having in your system


// it works synchrons..   //! this is blocking operation
fs.writeFileSync('./newfile.txt','hello file in sync')   // creates new file

   //!  this is non-blocking operation
// it works Async.. 
fs.writeFile('./newfile1.txt','hello file async' , (err)=>{})  


const res=fs.readFileSync('./newfile.txt','utf-8');
console.log(res);

//Async.. does not return anything like sync in above line  const res =... and it always expects a 
// callback function same as in writeFile().. function

fs.readFile('./newfile.txt','utf-8',(err,res1)=>{
    if(err){
        console.log('error',err)       
    }
    else{
         console.log("output is ", res1)
         
    }
 })   

 fs.appendFileSync('./newfile.txt',` ${Date.now()} Hello\n`)

 fs.cpSync('./newfile.txt','./newfile1.txt');
  
//  fs.unlinkSync('./newfile1.txt');  //? to delete the file

 console.log(fs.statSync('./newfile.txt'));
 console.log(fs.statSync('./newfile.txt').isFile());


 fs.mkdirSync('my-docs/a/b',{recursive:true});  // To create the folder

 