const mongoose = require('mongoose'); 
const { Schema } = mongoose ; 



const hotelSchema = new Schema({
 
    name : String, 
    adresse : String, 
    stars : Number ,
    img : String , 
    description : String, 
   
    
  
}); 



module.exports = mongoose.model('DB',hotelSchema); 

