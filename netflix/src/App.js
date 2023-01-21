import React from 'react';
import { BrowserRouter as Router, Route , Routes, Switch } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';




function App() {

const user = null ; 

  return (
    <div className="app">
    
<Router>

{!user ? (<LoginScreen></LoginScreen>) : (<Routes>
<Route  path="/"  element={<HomeScreen />}>

</Route>

</Routes>)}



</Router>

    </div>
  );
}

export default App;
