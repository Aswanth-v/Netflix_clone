import React, { useEffect, useState } from 'react'
import {API_KEY,imageurl} from '../../../constants/constants'
import axios from '../../../axios'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState()
 useEffect(() => {
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results[Math.floor(Math.random() * 20)]);
    setMovie(response.data.results[Math.floor(Math.random() * 20)])
   })
 }, [])
 
  return (

    <div
    style={{backgroundImage: `url(${movie ? imageurl+movie.backdrop_path:''})`}}
    className='banner'>
        <div className='content'>
        <h1 className='title'>{movie ? movie.name || movie.title : "" }</h1>
  
        <div className="banner-buttons">
            <button className="button">play</button>
            <button className="button">My List</button>
        </div>

         <h1 className="discription">{movie ? movie.overview:''}</h1>
        </div>
        <div className="fade-bottom">
            
        </div>
    </div>
  )
}

export default Banner