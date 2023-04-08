import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Nav from '../../components/Dashboard/Nav'
import TotalNotes from '../../components/Dashboard/TotalNotes';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const {currentUser} = useAuth();
  const router = useRouter();

  useEffect(()=> {
    if(!currentUser){
      router.push('/LogIn')
    }
  
    if(currentUser){ 
      router.push('/Dashboard') 
    }
  });

  return (
    <>
      <Head>
        <title>To Do List</title>
        <meta name="description" content="To Do List by Juan Camilo Marmolejo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-[#EBF0FF]'>
        <Nav/>
        <TotalNotes />
      </main>
    </>
  )
}

export default Dashboard