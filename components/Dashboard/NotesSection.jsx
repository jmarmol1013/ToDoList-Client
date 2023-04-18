import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import NavNotesSection from './NavNotesSection'
import NotesList from './NotesList';
import TotalNotes from './TotalNotes';
import useNotes from './useNotes';


const NotesSection = () => {
  const {currentUser} = useAuth();
  const {isLoading,notes,setNotes} = useNotes();
  const [notesList,setNotesList] = useState('toDo');
  const notesListToDo = (() => setNotesList('toDo'));
  const noteListDoing = (() => setNotesList('doing'));
  const noteListDone = (() => setNotesList('done'));
  const [filter,setFilter] = useState('None');
  
  const typeNotes = [
    'Study',
    'Life',
    'Daily',
    'Sports',
    'Work',
    'Other',
    'None'
  ]

  const deleteNote = async (id) => {
    const response = await fetch(`https://listify-api.onrender.com/delete/notes/${id}`,{
      method:'delete',
      headers:{
        AuthToken: await currentUser.getIdToken(),
      },
    });

    const updatedNotes = await response.json();
    setNotes(updatedNotes);
  }

  const updatedNoteDoing = async (id) => {
    const response = await fetch(`https://listify-api.onrender.com/notes/doing/${id}`,{
      method:'put',
      headers:{
        AuthToken:await currentUser.getIdToken(),
        "Content-Type": "application/json",
      },
    });

    const updatedNotes = await response.json();
    setNotes(updatedNotes);
    setNotesList('doing');
  }

  const updatedNoteDone = async (id) => {
    const response = await fetch(`https://listify-api.onrender.com/notes/done/${id}`,{
      method:'put',
      headers:{
        AuthToken:await currentUser.getIdToken(),
        "Content-Type": "application/json",
      },
    });

    const updatedNotes = await response.json();
    setNotes(updatedNotes);
    setNotesList('done');
  }

  const filterData = filter => {
    setFilter(filter);
  }

  return (
    <>
      <TotalNotes 
        notes={notes}
        filter={filter}
      />
      <div className='flex justify-center mt-6 '>
        <div className='bg-white rounded-md w-[60%]'>
          <NavNotesSection 
            notesList={notesList}
            noteListToDo={notesListToDo}
            noteListDoing={noteListDoing}
            noteListDone={noteListDone}
            filterData={filterData}
            typeNotes={typeNotes}
          />
          <NotesList 
            notes={notes}
            notesList={notesList}
            isLoading={isLoading}
            updatedNoteDoing={updatedNoteDoing}
            updatedNoteDone={updatedNoteDone}
            deleteNote={deleteNote}
            filter={filter}
          />
        </div>
      </div>
    </>
   
  )
}

export default NotesSection