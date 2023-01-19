import React, { useEffect, useState } from 'react'
import './Nav.css'

import NetflixLogo from './assets/images/netflix-logo.png'
import NetflixAvatarLogo from './assets/images/netflix-avatar.jpg'


function Nav() {


const [show , setShow] = useState(false) ; 



const handleScroll = () => {
if(window.scrollY>30) {
setShow(true) ; 
}else{
setShow(false) ; 
}
}

useEffect(()=> {
window.addEventListener("scroll" , handleScroll)
return () => window.removeEventListener("scroll" , handleScroll)
} , [])


  return (
    <div className={`nav   ${show &&`nav_black`} `} >
      <div className='nav_content'>


        <img className='nav_logo' src={NetflixLogo}   ></img>


        <img className='nav_avatar' src={NetflixAvatarLogo}   ></img>

      </div>



    </div>
  )
}

export default Nav