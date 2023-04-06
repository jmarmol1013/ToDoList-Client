import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext'

export default function Home() {
  const {currentUser} = useAuth();
  const router = useRouter();

  console.log(currentUser);

  useEffect(()=> {
    if(!currentUser){
      router.push('/LogIn')
    }
  
    if(currentUser){ 
      router.push('/Dashboard') 
    }
  })

  return (
    <>
      <Head>
        <title>To Do List</title>
        <meta name="description" content="To Do List by Juan Camilo Marmolejo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      </main>
    </>
  )
}
