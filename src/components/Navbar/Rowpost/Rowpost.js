import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './Rowpost.css'
import {imageurl,API_KEY} from '../../../constants/constants'
import axios from '../../../axios'
function Rowpost(props) {
  const [movies, setMovies] = useState([])
  const [urlid,setUrlid] =useState('')
useEffect(() => {
  axios.get(props.url).then(respons=>{
    console.log(respons.data);
    setMovies(respons.data.results)
  }).catch(err=>{
   // alert('error occur')
  })
}, [])

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

 const handleMovie=(id)=>{
console.log(id);
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(respons=>{
  if(respons.data.results.lenght!==0){
    setUrlid(respons.data.results[0])
  }else{
    console.log('Array empty');
    
  }
  
})

 }
  return (
    <div className='row'> 
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
                 <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallposter':'poster'} src={`${imageurl+obj.backdrop_path}`} alt="Poster" />
          )}
         
            
        </div>
        {  urlid && <Youtube opts={opts} videoId={urlid.key}/>     }
    </div>
  )
}

export default Rowpost