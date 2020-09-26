import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/auth/Login'
import Register from './components/auth/Register';
import HomeNav from './components/pages/HomeNav';
import UserContext from './context/UserContext';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })


  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token')

      console.log(token)
      // if auth-token key doesnt exist in localstorage set it to empty string
      if (token === null) {
        localStorage.setItem('auth-token', '')
        token = ''
      }

      const tokenResponse = await axios.post('http://localhost:5000/users/tokenIsValid', null,
        { headers: { 'x-auth-token': token } })

      if (tokenResponse.data) {
        const user = await axios.get('http://localhost:5000/users/', 
        { headers: { 'x-auth-token': token } })
        setUserData(user)
        
      }
    }
    checkLoggedIn()
  }, [])

  console.log(userData)

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <HomeNav />
        <Switch>
          <Route exact path='/'> <Home /> </Route>
          <Route path='/login'> <Login /> </Route>
          <Route path='/register'> <Register /> </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  )
}

export default App;
