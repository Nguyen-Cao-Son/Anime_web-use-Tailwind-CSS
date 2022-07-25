import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate()
  const handleLogOUT = async () => {
    try {
      await logOut()
      navigate('/')

    } catch (error) {
      console.log(error);
    }

  }
  console.log(user);
  return (
    <div className='flex justify-items-center justify-between p-4 z-[999] w-full fixed'>
      <Link to='/'>
        <div className='flex justify-items-center item-center'>
          <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>ANIME  </h1>
          <h1 className='text-white m-1 text-3xl'> SUB</h1>
        </div>
      </Link>
      {user?.email ?
        <div>
          <Link to='/account'>
            <button className='bg-red-600 text-black px-4 py-3 rounded'>Account</button>
          </Link>
          
            <button onClick={handleLogOUT} className=' text-white px-4 py-3'>Log Out </button>
        </div>
        : <div>
          <Link to='/login'>
            <button className='bg-red-600 text-black px-4 py-3 rounded'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className=' text-white px-4 py-3'>Sign Up</button>
          </Link>

        </div>
      }
    </div>
  )
}

export default Navbar