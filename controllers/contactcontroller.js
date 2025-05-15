//! it contains all the logic for the request ,response
//! it is used to connect with database

const getContact = (req,res)=>{
         res.status(200).json({message:"Get all Contacts"});
};

module.exports={getContact}