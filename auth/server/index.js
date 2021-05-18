const express = require('express') ; 
const cors = require('cors') ; 
const mongoose = require('mongoose'); 
const app = express(); 
const userRoutes = require('./Routes/userRoutes')
mongoose.connect('mongodb://localhost:27017/TEST', {useNewUrlParser: true , useUnifiedTopology : true  },()=>{
    console.log('DB is connected..')
});


app.use(cors()); 
app.use(express.urlencoded({extended:true})); 
app.use(express.json()); 
app.use('/api',userRoutes); 




app.listen(3009,()=>{
    console.log('sev')
})