import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Logout(){
const history = useHistory() 
const logout = ()=>{
    localStorage.removeItem('token'); 
    history.push('/')
}


return (
        <div>
        {/* <button onClick={logout} >LOGOUT</button> */}
        <Button variant="outline-success">LOGOUT</Button>
        </div>
        )
}

export default Logout ; 