import React from 'react'; 
import { BrowserRouter as Router , Link , Switch , Route } from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register'; 

import Home from './Components/Home'; 
import Logout from './Components/Logout'; 
import PrivateRoute from './Components/Privateroutes';


import Hotel from './Components/Hotel'; 
 


function App() {
  return (
    <Router>

          <div>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/logout">logout</Link>
                  </li>

              </ul>
          </div>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path ="/logout" component={Logout}/>
       <Route path='/login' component={Login}/>
       <Route path='/login/:id' component={Login}/>
       <Route path="/register" component={Register}/>
       <Route path='/hotel/:id' component={Hotel}/>
       
      
      
      
     </Switch>
    </Router>
   

  );
}

export default App;
