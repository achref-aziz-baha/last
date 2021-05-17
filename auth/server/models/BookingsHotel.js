const mongoose = require('mongoose'); 
const { Schema } = mongoose ; 



const hotelSchema = new Schema({
 
    name : String, 
    adresse : String, 
    starts : Number ,
    img : String , 
    description : String, 
    room :[
        {  
            id : Number , 
            img : String , 
            price : Number , 
            dataI : String , 
            dataO : String , 
        }
    ]
  
}); 



module.exports = mongoose.model('DB',hotelSchema); 

