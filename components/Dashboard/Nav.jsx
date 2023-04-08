import React from 'react'
import LogOut from '../auth/LogOut'

const Nav = () => {
  return (
    <div className='flex justify-between items-center bg-[#555CC7] text-white'>
        <h1 className='text-4xl text-left p-4'>ToDoList</h1>
        <div className='flex items-center divide-x-2'>
            <p className=' text-right p-4'>Hi, Juan Camilo Marmolejo</p>
            <div className='text-right p-4'>
                <LogOut/>
            </div>
        </div>
    </div>
  )
}

export default Nav