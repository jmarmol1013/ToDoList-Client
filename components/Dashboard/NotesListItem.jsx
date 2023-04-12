import { useRouter } from 'next/router';
import React, { useState } from 'react'
import {MdCancel} from 'react-icons/md'

const NotesListItem = ({note,noteList,deleteNote,updatedNoteDoing,updatedNoteDone}) => {
  const [confirmDelete,setConfirmDelete] = useState(false);
  const router = useRouter();

  const colorsType = {
    study: "text-[#64BB2F]",
    life: "text-[#2F5EBB]",
    daily:'text-[#7D2FBB]',
    sports: "text-[#BB2F2F]",
    work: "text-[#2FB3BB]",
    other: "text-[#BB722F]"
  }; 
  const colorType = colorsType[note.typeNote.toLowerCase()];

  const editNote = (noteId) => {
    router.push(`EditNote/${noteId}`);
  }

  return (
    <div className='flex p-2 justify-between align-middle items-center'>
        <div className='flex divide-x-2 divide-[#F0F0F0]'>
            <p className='text-lg p-2'>{note.note}</p>
            <p className={`text-sm p-3 ${colorType}`}>{note.typeNote}</p>
        </div>
        <div className='justify-end'>
            {
                noteList === 'toDo' ?
                <button 
                  className='border-2 text-sm rounded-md border-[#7054DE] p-2 mx-2 hover:text-white hover:bg-[#7054DE]'
                  onClick={() => updatedNoteDoing(note._id)}>
                  Doing
                </button>
                : noteList === 'doing' ?
                <button 
                  className='border-2 text-sm rounded-md border-[#8F50D4] p-2 mx-2 hover:text-white hover:bg-[#8F50D4]'
                  onClick={() => updatedNoteDone(note._id)}>
                  Done
                </button>
                :
                null
            }
            <button 
              className='border-2 text-sm rounded-md border-[#2853EE] p-2 mx-2 hover:text-white hover:bg-[#2853EE]' 
              onClick={() => editNote(note._id)}>
              Edit
            </button>
            {
              !confirmDelete ?
                <button className='border-2 text-sm rounded-md border-red-600 p-2 mx-2 hover:text-white hover:bg-red-600' onClick={() => setConfirmDelete(true)}>Delete</button>
              :
                <button className='border-2 text-sm rounded-full border-red-600 mt-1 p-2 mx-2 text-white bg-red-600' onClick={() => {
                deleteNote(note._id);
                setConfirmDelete(false);
                }}>
                  <MdCancel />
                </button>
            }
        </div>
    </div>
  )
}

export default NotesListItem