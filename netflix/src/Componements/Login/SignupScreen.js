import React, { useRef } from 'react'
import { auth } from '../../firebase'
import './SignupScreen.css'



function SignupScreen() {

const emailRef = useRef(null)

const passwordRef = useRef(null)


const register = (e)=> {
e.preventDefault() ; 
auth.createUserWithEmailAndPassword(emailRef.current.value , passwordRef.current.value).then((auth) =>{
console.log(auth);
}).catch((err)=>{
alert(err.message)

} )
}


const signIn = (e) =>{
e.preventDefault() ; 

auth.signInWithEmailAndPassword(emailRef.current.value ,
passwordRef.current.value
).then((authUser)=>{
console.log(authUser);
}).catch((err)=>{
alert(err.message)
})

}

  return (
    <div className='SignupScreen'>
<form className='input_form_signIn' >
<h1>Sign In</h1>
<input placeholder='Email' type={'email'} ref={emailRef} ></input>

<input placeholder='Password' type={'password'}  ref={passwordRef}></input>



<button type='submit' onClick={signIn} > Sign In</button>
<h4><span className='signupScreen_gray' >New to Netflix ?</span>

<span className='signupScreen_link' onClick={register} >Sign Up now</span>  </h4>

<h5>This page is protected by Google reCAPTCHA <br></br>to ensure you're not a bot. <a href='#'>Learn more.</a></h5>



</form>
</div>
  )
}

export default SignupScreen