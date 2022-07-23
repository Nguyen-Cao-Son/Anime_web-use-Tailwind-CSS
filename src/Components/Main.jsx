import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import requets from '../Request'

const Main = () => {
    const [movies,SetMovie] = useState([])
    useEffect(()=>
    axios.get(requets.requestPopular).then((Response)=>
    {
        SetMovie(Response.data.results)
    })
    
    
    ,[])
    console.log(movies);


  return (
   <div>
   main

   </div>
  )
}

export default Main