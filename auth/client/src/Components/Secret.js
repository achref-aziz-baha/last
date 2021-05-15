import React, { useState  , useEffect } from 'react' ;
import axios from 'axios'


function Secret(){
    const[message,setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3009/api/check',{
            headers : {
                'acces-token' : localStorage.getItem('token')
            }
        })
        .then(res=>{
            console.log(res)
            if(res.data.isAuth === true){
                setMessage('HAMDOULEH!')
            }
            else {
                setMessage('U ARE NOT AUTHORIZED')
            }
        })
      },[]);
  
      return(
          <h1>{message}</h1>
      )






}; 
export default Secret ;