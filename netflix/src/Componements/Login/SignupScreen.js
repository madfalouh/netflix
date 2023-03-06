import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { auth } from "../../firebase";
import "./SignupScreen.css";

function SignupScreen() {
  const emailRef = useRef(null);
  const [errorVisible , seterrorVisible] = useState(false)
  const [errorVisiblePassword , seterrorVisiblePassword] = useState(false)
  const label =useRef(null)
  const label2 =useRef(null)
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const passwordRef = useRef(null);


useEffect(() => {
console.log("value");

setTimeout(() => {
  console.log(emailRef.current.value);


if(emailRef.current.value.length>0){
label.current.style.top="25px"
label.current.style.left="20.5px"
label.current.style.fontSize="12px"
} 

if(passwordRef.current.value.length>0) {
label2.current.style.top="25px"
label2.current.style.left="20.5px"
label2.current.style.fontSize="12px"
}


}, 500);


}, [])



  const checkType = (email) => {


if(emailRef.current.value.length>0){
label.current.style.top="25px"
label.current.style.left="20.5px"
label.current.style.fontSize="12px"
}else{
label.current.style.top="36px"
label.current.style.left="20.5px"
label.current.style.fontSize="19px"

}




  if(emailRegex.test(email) ==false){
  emailRef.current.style.borderBottom="4px solid #e87c03"
 seterrorVisible(true)

  }else{
emailRef.current.style.borderBottom="none"
seterrorVisible(false)
    }


};
  const checkTypePassword = (email) => {


if(passwordRef.current.value.length>0) {
label2.current.style.top="25px"
label2.current.style.left="20.5px"
label2.current.style.fontSize="12px"
}else{
label2.current.style.top="36px"
label2.current.style.left="20.5px"
label2.current.style.fontSize="19px"
}

console.log(email);

  if( email.length <4){
 passwordRef.current.style.borderBottom="4px solid #e87c03"
  seterrorVisiblePassword(true)

  }else{
 passwordRef.current.style.borderBottom="0px"
 seterrorVisiblePassword(false)
    }


};



  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((auth) => {
        console.log(auth);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="SignupScreen">
      <form className="input_form_signIn">
        <h1>Sign In</h1>

        <div class="inputBox">
          <input type={"email"} ref={emailRef}  onChange={ (event) =>{checkType(event.target.value)} } ></input>
          <label ref={label} >Enter email or phone number</label>
        </div>
        <span className={ classNames(  "error" , {"visible" :!errorVisible }  ) }   >Please enter a valid email or phone number.</span>
        <div class="inputBox">
          <input type={"password"} ref={passwordRef} onChange={ (event) =>{checkTypePassword(event.target.value)} } ></input>
          <label ref={label2}>Enter Password</label>
        </div>
        <span className={ classNames(  "error" , {"visible" :!errorVisiblePassword }  ) }  >Your password must contain between 4 and 60 characters.</span>
        <button type="submit" onClick={signIn}>
          {" "}
          Sign In
        </button>

        <div className="rember_me_section">
          <div className="checkBox-rember">
            <input
              className="chack-box-rem"
              type="checkbox"
              name=""
              id="checkbox"
            />
            <span className="signupScreen_gray">Remember me</span>
          </div>

          <span className="signupScreen_gray">Need Help ?</span>
        </div>
        <h4 className="New_to">
          {" "}
          <span className="signupScreen_gray">New to Netflix ?</span>
          <span className="signupScreen_link" onClick={register}>
            Sign Up now
          </span>{" "}
        </h4>

        <h5>
          This page is protected by Google reCAPTCHA <br></br>to ensure you're
          not a bot. <a href="#">Learn more.</a>
        </h5>
      </form>
    </div>
  );
}

export default SignupScreen;
