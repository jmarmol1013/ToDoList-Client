import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import LogOut from '../auth/LogOut'

const Nav = () => {
  const {currentUser} = useAuth();
  const [userName,setUserName] = useState([]);
  
  useEffect(() => {
    const loadUserName = async () => {

      if (!currentUser){
        setUserName('');
        return;
    }

    const response = await fetch(`https://listify-api.onrender.com/user/${currentUser.uid}/name`,{
        headers:{
            AuthToken:await currentUser.getIdToken(),
        },
    });
    const nameJson = await response.json();

    nameJson.map((name) => {
      setUserName(name.fullName);
    })
    }

    loadUserName();
  },[userName])
  
  return (
    <div className='flex justify-between items-center bg-[#555CC7] text-white'>
        <h1 className='text-4xl text-left p-4'>Listify</h1>
        <div className='flex items-center divide-x-2'>
            <p className=' text-right p-4'>Hi, {userName}</p>
            <div className='text-right p-4'>
                <LogOut/>
            </div>
        </div>
    </div>
  )
}

export default Nav