import React, { useState } from 'react' ;
import axios from 'axios'
import { Link , useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

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
        {/* <label>
            Email:
            <input type="text"  onChange={(e)=>setemail(e.target.value)}/>
            Password:
            <input type="password"  onChange={(e)=>setpassword(e.target.value)}/>
        </label> */}
        {/* <button onClick={submit}>SUBMIT</button>
        <h1>Already have an account ? <Link to='/login'>Log In</Link></h1> */}
        <Form inline>
            <FormControl type="text" placeholder="email" className="mr-sm-2" />
            <FormControl type="text" placeholder="password" className="mr-sm-2" />
            <Button variant="outline-success">submit</Button>
            <h1>Already have an account ? <Link to='/login'>Log In</Link></h1>
          </Form>
</div>)
}
export default Register ;




