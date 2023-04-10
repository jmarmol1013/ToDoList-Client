import React, { useState } from 'react'
import NavNotesSection from './NavNotesSection'
import NotesList from './NotesList';
import TotalNotes from './TotalNotes';
import useNotes from './useNotes';


const NotesSection = () => {
  const {isLoading,notes} = useNotes();
  const [notesList,setNotesList] = useState('toDo');
  const notesListToDo = (() => setNotesList('toDo'));
  const noteListDoing = (() => setNotesList('doing'));
  const noteListDone = (() => setNotesList('done'));

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
          />
        </div>
      </div>
    </>
   
  )
}

export default NotesSection