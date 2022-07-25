import React, { useState } from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion,doc,updateDoc } from 'firebase/firestore'
import { async } from '@firebase/util'


const Movie = ({item,id}) => {
  const [like,setLike] = useState(false)
  const [save,setSave] = useState(false)
  const {user} = UserAuth();
  
  const movieID = doc(db,'user',`${user?.email}`)
  const saveShow =  async () =>{
    if(user?.email){
      setLike(!like)
      setSave(true)
      await updateDoc(movieID,{
        saveShows : arrayUnion({
          id: item.id,
          title:  item.title,
          img: item.backdrop_path
        }) ,
      })} else{
        alert('please log in to save a movie')
      }


  }
  console.log(db);
  return (
    <div key={id} className='w-[160px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/30 opacity-0 hover:opacity-100 textwhite'>
        <p className='white-space-normal text-xl md:text-sm font-bold flex justify-center items-center h-full text-center '>{item?.title}</p>
         <s onClick={saveShow}> 
       {like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> 
       : <FaRegHeart className='absolute top-4 left-4 text-gray-300'  /> } 
    </s>      
    </div>
</div>
  )
}

export default Movie