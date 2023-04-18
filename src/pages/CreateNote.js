import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Footer from '../../components/layout/Footer';
import Nav from '../../components/layout/Nav'
import CreateNewNoteForm from '../../components/NewNote/CreateNewNoteForm';
import BackButton from '../../components/ui/BackButton';
import { useAuth } from '../../context/AuthContext';

const CreateNote = () => {
  const {currentUser} = useAuth();
  const router = useRouter();

  useEffect(()=> {
    if(!currentUser){
      router.push('/LogIn')
    }
  
    if(currentUser){ 
      router.push('/CreateNote') 
    }
  },[currentUser]);

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
        <BackButton />
        <CreateNewNoteForm/>
        <Footer/>
      </main>
    </>
  )
}

export default CreateNote