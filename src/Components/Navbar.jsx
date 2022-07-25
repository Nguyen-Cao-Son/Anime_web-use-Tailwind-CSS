import React from 'react'
import {Link} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user,logOut} = UserAuth()
  console.log(user);
  return (
    <div className='flex justify-items-center justify-between p-4 z-[999] w-full fixed'>
      <Link to='/'>
        <div className='flex justify-items-center item-center'>
          <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>ANIME  </h1>
          <h1 className='text-white m-1 text-3xl'> SUB</h1>
        </div>
      </Link>
      <div>
        <Link to='/login'>
          <button className='bg-red-600 text-black px-4 py-3 rounded'>Sign In</button>
        </Link>
        <Link to='/signup'>
          <button className=' text-white px-4 py-3'>Sign Up</button>
        </Link>

      </div>
    </div>
  )
}

export default Navbar