import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route , Routes, Switch , Navigate } from 'react-router-dom';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import { Redirect } from 'react-router-dom';


import { auth } from './firebase';
import HomeScreen from './HomeScreen';
import LoginScreen from './Componements/Login/LoginScreen';
import WatcherScreen from './Componements/WhoisWatching/WatcherScreen';
import ManageProfile from './Componements/WhoisWatching/ManageProfile/ManageProfile';
import Welcome from './pages/welcomePage/Welcome';




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
    
<Router >




<Routes>

<Route path='/' element={<Navigate to='/welcome' />} />

<Route   path="/welcome"  element={<Welcome></Welcome>}     ></Route>

<Route  path="/Home"  element={<HomeScreen />}></Route>

<Route  path="/browse"  element={  <WatcherScreen/>  }></Route>


<Route  path="/ManageProfiles"  element={  <ManageProfile /> }></Route>



<Route   path="/login"  element={<LoginScreen></LoginScreen>}     ></Route>



</Routes>



</Router>

    </div>
  );
}

export default App;
