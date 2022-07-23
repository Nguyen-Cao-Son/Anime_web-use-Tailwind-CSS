import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import requets from '../Request'

const Main = () => {
    const [movies,SetMovie] = useState([])
    const movie=movies[Math.floor(Math.random()*movies.length)]
    useEffect(()=>
    axios.get(requets.requestPopular).then((Response)=>
    {
        SetMovie(Response.data.results)
    })
    
    
    ,[])
    
    console.log(movie);


  return (
   <div className='w-full h-[550px] text-white'>
    <div className='w-full h-full'>
      <img src={ `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
    </div>
   

   </div>
  )
}

export default Main