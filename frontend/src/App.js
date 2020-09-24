import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/auth/Login'
import Register from './components/auth/Register';
import HomeNav from './components/HomeNav'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <Router>
      <HomeNav/>
      <Switch>
        <Route exact path='/'> <Home /> </Route>
        <Route path='/login'> <Login /> </Route>
        <Route path='register'> <Register /> </Route>
      </Switch>
    </Router>
  )
}

export default App;
