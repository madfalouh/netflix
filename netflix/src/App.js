import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route , Routes, Switch } from 'react-router-dom';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import HomeScreen from './HomeScreen';
import LoginScreen from './Componements/Login/LoginScreen';
import WatcherScreen from './Componements/WhoisWatching/WatcherScreen';
import ManageProfile from './Componements/WhoisWatching/ManageProfile/ManageProfile';




function App() {

const user = useSelector(selectUser) ; 

const dispatch = useDispatch()



useEffect(()=>{
const unsubscribe = auth.onAuthStateChanged(userAuth =>{
if(userAuth){
dispatch(login(
 {
uid : userAuth.uid , 
email : userAuth.email
}
))
}else{
dispatch(logout)
}
})
return unsubscribe ; 
} , [])



  return (
    <div className="app">
    
<Router>





{!user ? (<LoginScreen></LoginScreen>) : (<Routes>
<Route  path="/"  element={<HomeScreen />}></Route>

<Route  path="/browse"  element={  <WatcherScreen/>  }></Route>


<Route  path="/ManageProfiles"  element={  <ManageProfile /> }></Route>


</Routes>)}



</Router>

    </div>
  );
}

export default App;
