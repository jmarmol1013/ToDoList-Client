import React from 'react'
import NotesListItem from './NotesListItem'

const NotesList = ({notes,notesList,isLoading,deleteNote,updatedNoteDoing,updatedNoteDone,filter}) => {
  return (
    <div className={`divide-y-2 
                    ${notesList === 'toDo' ? 'divide-[#5482DE]' : notesList === 'doing' ? 'divide-[#7054DE]' : notesList === 'done' ? 'divide-[#8F50D4]' : null}`}>
        { 
        isLoading ? 
          <p className=' text-center mt-4'>Loading...</p>
        :
        notes.length != 0 ?
            notes.map((note,index) => {
              if(filter === 'None'){
                if(note.noteList === notesList){
                  return(
                      <NotesListItem 
                          key={index}
                          note={note}
                          noteList={notesList}
                          deleteNote={deleteNote}
                          updatedNoteDoing={updatedNoteDoing}
                          updatedNoteDone={updatedNoteDone}
                      />
                  );
                };
              } 
              
              if(note.noteList === notesList && note.typeNote === filter){
                return(
                    <NotesListItem 
                        key={index}
                        note={note}
                        noteList={notesList}
                        deleteNote={deleteNote}
                        updatedNoteDoing={updatedNoteDoing}
                        updatedNoteDone={updatedNoteDone}
                    />
                );
              };
            })
          :
          <p className='text-center my-4'>No notes, create your first note...</p>
        }       
    </div>
  )
}

export default NotesList