import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import EditNoteForm from '../../../components/EditNote/EditNoteForm';
import Nav from '../../../components/layout/Nav'
import BackButton from '../../../components/ui/BackButton';
import { useAuth } from '../../../context/AuthContext';
import useLoadNote from '../../../components/EditNote/useLoadNote';
import Footer from '../../../components/layout/Footer';

const EditNote = () => {
    const {currentUser} = useAuth();
    const router = useRouter();
    const id = router.query;
    const {note:prevNote} = useLoadNote(id.id);
  
    useEffect(()=> {
      if(!currentUser){
        router.push('/LogIn')
      }
    
      if(currentUser){ 
        router.push(`/EditNote/${id.id}`) 
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
          <EditNoteForm 
            prevNote={prevNote}
          />
          <Footer/>
        </main>
      </>
    )
}

export default EditNote