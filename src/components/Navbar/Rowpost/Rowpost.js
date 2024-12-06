import React,{useEffect,useState} from 'react'
import './Rowpost.css'
import {imageurl} from '../../../constants/constants'
import axios from '../../../axios'
function Rowpost(props) {
  const [movies, setMovies] = useState([])
useEffect(() => {
  axios.get(props.url).then(respons=>{
    console.log(respons.data);
    setMovies(respons.data.results)
  }).catch(err=>{
   // alert('error occur')
  })
}, [])

  return (
    <div className='row'> 
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
                 <img className={props.isSmall ?'smallposter':'poster'} src={`${imageurl+obj.backdrop_path}`} alt="Poster" />
          )}
         
            
        </div>
    </div>
  )
}

export default Rowpost