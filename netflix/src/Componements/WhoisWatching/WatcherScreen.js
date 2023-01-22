import React from 'react'

import './WatcherScreen.css'

import classNames from 'classnames'


import avatarLogo2  from '../../assets/images/netflix-avatar.png'

function WatcherScreen() {
  
const avatarLogo1 ='http://occ-0-107-987.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229'

const avatarLogo3 ='http://occ-0-107-987.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTqCB8uh6vUUpjPnmHk3iGyky27lLiL16NEFLBfZ4Kdaf9n0lOJFHM72muckX62W7XgI7MGhWwu9ki-vHV_hUJ2odJOr1CN1A_JI.png?r=962'



return (
    <div   className='watcher_container' >
<div className='watcher_content' >
<h1>Who is watching?</h1>

<div  className='img_container' >

<div className='image_elemnts' >
<img src={avatarLogo1}  ></img>
<span>Mad</span>
</div>

<div className='image_elemnts' >
<img src={avatarLogo2}  ></img>
<span>Ashly</span>
</div>


<div className='image_elemnts' >
<img src={avatarLogo3}  ></img>
<span>Betty</span>
</div>



</div>


<button className='manage_button' >Manage Profiles</button>


</div>


        </div>
  )
}

export default WatcherScreen