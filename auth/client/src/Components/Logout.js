import { useHistory } from 'react-router-dom'


function Logout(){
const history = useHistory() 
const logout = ()=>{
    localStorage.removeItem('token'); 
    history.push('/')
}


return (
        <div>
        <button onClick={logout} >LOGOUT</button>
        </div>
        )
}

export default Logout ; 