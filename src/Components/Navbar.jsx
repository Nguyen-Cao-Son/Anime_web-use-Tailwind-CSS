import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-items-center justify-between p-4 z-[999] w-full fixed'>
        <div className='flex justify-items-center item-center'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>ANIME  </h1> 
        <h1 className='text-white m-1 text-3xl'> SUB</h1>
        </div>
        <div>
            <button className=' text-white px-4 py-3'>Sign Up</button>
            <button className='bg-red-600 text-black px-4 py-3 rounded'>Sign In</button>

        </div>
    </div>
  )
}   

export default Navbar