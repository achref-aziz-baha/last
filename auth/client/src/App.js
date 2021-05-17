import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
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
import Favorite from './Components/Favorite';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <Router>

      {/* <div class='container'>
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
          </div> */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Hotel Reservation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/secret">Secret</Nav.Link>
            <Nav.Link href="/logout">logout</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
            <Nav.Link href="userprf/:id">User</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/logout" component={Logout} />
        <Route path='/login' component={Login} />
        <Route path="/register" component={Register} />
        <Route path='/hotel/:id' component={Hotel} />
        <Route path="/favorite" component={Favorite} />
        <PrivateRoute path="/book/" component={Bookroom} />
        <PrivateRoute path="/secret" component={Secret} />
        <PrivateRoute path='/admin' component={Admin} />
        <PrivateRoute path='/userprf' component={UserProfile} />
      </Switch>
    </Router>


  );
}

export default App;
