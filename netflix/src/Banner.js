import React, { useEffect, useRef, useState } from 'react'
import './Banner.css'
import netflixBanner from './assets/images/banner.png'
import axios from './axios'
import requests from './Request'
function Banner() {

const [movie , setMovie] = useState([])
const [movieLogo , setMovieLogo] = useState([])

useEffect(()=>{

async function fetchDate() {


const request = await axios.get(requests.fetchNetflixOriginals)


setMovie(
request.data.results[
Math.floor(Math.random() *request.data.results.length-1 )
]
)




return request

}

fetchDate()

} , [] )


useEffect(() =>{
async function fetchDate() {

if(movie?.id){
const request = await axios.get(`/tv/${movie?.id}/images?api_key=3e30337ff84caa6ac17cb43117915508`)
setMovieLogo(request.data.logos[0].file_path)
}
}
fetchDate()
} , [movie])


  return (
<div className='container' >
<header  className='banner' style={{backgroundImage  : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}} >
<div className='banner_content' >



<div className='banner_title' >

<img src={'https://image.tmdb.org/t/p/original/'+movieLogo }  width={550} ></img>

</div>


<h1 className='banner_description' > {movie?.overview}</h1>

<div className='banner_buttons' > 

<button className='banner_button ' >

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path></svg>

Play</button>
<button  className='banner_button info ' >
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg>

More Info</button>
</div>




</div>
<div className='banner--fadeBottom' />
</header>

</div>

  )
}

export default Banner