import React, { useState } from 'react'
import netflixLogo from  '../../assets/images/netflix-logo.png'
import './LoginScreen.css'
import SignupScreen from './SignupScreen'


function LoginScreen() {

const [signIn , setSignIn] = useState(false)

  return (
    <div className='LoginScreen' >
<div className='loginScreen_background'>
<img src= {netflixLogo} className='netflix_logo' ></img>

<button className='loginScreen_button' onClick={()=> {setSignIn(true)} } > Sign In</button>

<div className='loginScreen_gradiant' ></div>

<div className='loginScreen_body'>

{signIn ? (<SignupScreen></SignupScreen>  ) : (

<>
<h1>Unlimited movies, TV shows, and more.</h1>
<h2>Watch anywhere. Cancel anytime.</h2>
<h3>Ready to watch? Enter your email to create or restart your membership.</h3>
<div className='loginScreen_input'>
<form className='form_input'>

<input type={'email'} placeholder={'Email Address'} ></input>
<button className='loginScreen_getStarted' onClick={()=> {setSignIn(true)  }} >
GET STARTED 
</button>

</form>
</div>
</>

) }



</div>

</div>
</div>
  )
}

export default LoginScreen