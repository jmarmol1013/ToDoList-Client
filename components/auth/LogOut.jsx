import { useRouter } from 'next/router';
import React from 'react'
import { useAuth } from '../../context/AuthContext'

const LogOut = () => {
  const {logout} = useAuth();
  const router = useRouter();

  const logOut = async () => {
    try{
      await logout();
      router.push('/');
    }catch(e){
      console.log(e);
    }
  }
  return (
    <button onClick={logOut} className=' text-white text-lg' >
        LogOut
    </button>
  )
}

export default LogOut