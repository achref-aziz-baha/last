import React from 'react'; 
import { BrowserRouter as Router , Link , Switch , Route } from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register'; 
import Secret from './Components/Secret'; 
import Home from './Components/Home'; 
import Logout from './Components/Logout'; 
import PrivateRoute from './Components/Privateroutes';
import Admin from './Components/Admin'; 
import UserProfile from './Components/UserProfile'; 
import Hotel from './Components/Hotel'; 
import Bookroom from './Components/Bookroom'; 
import Favorite from './Components/Favorite'

function App() {
  return (
    <Router>

          <div>
              <ul>
                  <li>
                      <Link to='/login'>Login</Link>
                  </li>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/register">Register</Link>
                  </li>
                  <li>
                      <Link to="/secret">Secret</Link>
                  </li>
                  <li>
                    <Link to="/logout">logout</Link>
                  </li>
                  <li>
                    <Link to ="/admin">Admin</Link>
                  </li>
                  <li>
                    <Link to="userprf/:id">User</Link>
                  </li>

              </ul>
          </div>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path ="/logout" component={Logout}/>
       <Route path='/login' component={Login}/>
       <Route path="/register" component={Register}/>
       <Route path='/hotel/:id' component={Hotel}/>
       <Route path="/favorite" component={Favorite}/>
       <PrivateRoute path="/book/" component={Bookroom}/> 
       <PrivateRoute path="/secret" component={Secret}/> 
       <PrivateRoute path='/admin' component={Admin}/>
       <PrivateRoute path='/userprf' component={UserProfile}/> 
     </Switch>
    </Router>
   

  );
}

export default App;
