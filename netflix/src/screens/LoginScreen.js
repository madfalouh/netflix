import React from 'react'
import netflixLogo from  '../assets/images/netflix-logo.png'
import './LoginScreen.css'


function LoginScreen() {
  return (
    <div className='LoginScreen' >
<div className='loginScreen_background'>
<img src= {netflixLogo} className='netflix_logo' ></img>

<button className='loginScreen_button' > Sign In</button>

<div className='loginScreen_gradiant' ></div>

<div className='loginScreen_body'>
<>
<h1>Unlimited movies, TV shows, and more.</h1>

</>

</div>

</div>
</div>
  )
}

export default LoginScreen