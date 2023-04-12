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

  const deleteNote = async (id) => {
    const response = await fetch(`http://localhost:8080/delete/notes/${id}`,{
      method:'delete',
      headers:{
        AuthToken: await currentUser.getIdToken(),
      },
    });

    const updatedNotes = await response.json();
    setNotes(updatedNotes);
  }

  const updatedNoteDoing = async (id) => {
    const response = await fetch(`http://localhost:8080/notes/doing/${id}`,{
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
    const response = await fetch(`http://localhost:8080/notes/done/${id}`,{
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

  return (
    <>
      <TotalNotes 
        notes={notes}
      />
      <div className='flex justify-center mt-6 '>
        <div className='bg-white rounded-md w-[60%]'>
          <NavNotesSection 
            notesList={notesList}
            noteListToDo={notesListToDo}
            noteListDoing={noteListDoing}
            noteListDone={noteListDone}
          />
          <NotesList 
            notes={notes}
            notesList={notesList}
            isLoading={isLoading}
            updatedNoteDoing={updatedNoteDoing}
            updatedNoteDone={updatedNoteDone}
            deleteNote={deleteNote}
          />
        </div>
      </div>
    </>
   
  )
}

export default NotesSection