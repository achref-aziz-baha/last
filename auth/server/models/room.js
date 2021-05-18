const mongoose = require('mongoose'); 
const { Schema } = mongoose ; 



const roomschema=new Schema({  
    hotelname : String,
    img : String , 
    price : Number , 
    dataI : String , 
    dataO : String  
}
) 
module.exports = mongoose.model('room',roomschema); 