import React, { useState } from 'react' ;
import axios from 'axios'
import { Link , useHistory } from 'react-router-dom';

function Register(){

const [password , setpassword]=useState("")
const [email , setemail]=useState("")
const history = useHistory(); 


function submit(){
    const obj={email : email ,password : password}
axios.post('http://localhost:3009/api/register',obj).then((res)=>{
 if(res.status===200){
 history.push('/login')  
 }

})
.catch(err=>{
    console.log(err)
})
}
return (<div>
        <label>
            Email:
            <input type="text"  onChange={(e)=>setemail(e.target.value)}/>
            Password:
            <input type="password"  onChange={(e)=>setpassword(e.target.value)}/>
        </label>
        <button onClick={submit}>SUBMIT</button>
        <h1>Already have an account ? <Link to='/login'>Log In</Link></h1>
</div>)
}
export default Register ;




