import React from 'react'

const NotesListItem = ({note,noteList}) => {
  const colorsType = {
    study: "text-[#64BB2F]",
    life: "text-[#2F5EBB]",
    daily:'text-[#7D2FBB]',
    sports: "text-[#BB2F2F]",
    work: "text-[#2FB3BB]",
    other: "text-[#BB722F]"
  }; 
  const colorType = colorsType[note.typeNote.toLowerCase()];

  return (
    <div className='flex p-2 justify-between align-middle items-center'>
        <div className='flex divide-x-2 divide-[#F0F0F0]'>
            <p className='text-lg p-2'>{note.note}</p>
            <p className={`text-sm p-3 ${colorType}`}>{note.typeNote}</p>
        </div>
        <div className='justify-end'>
            {
                noteList === 'toDo' ?
                <button className='border-2 text-sm rounded-md border-[#7054DE] p-2 mx-2 hover:text-white hover:bg-[#7054DE]'>Doing</button>
                : noteList === 'doing' ?
                <button className='border-2 text-sm rounded-md border-[#8F50D4] p-2 mx-2 hover:text-white hover:bg-[#8F50D4]'>Done</button>
                :
                null
            }
            <button className='border-2 text-sm rounded-md border-[#2853EE] p-2 mx-2 hover:text-white hover:bg-[#2853EE]'>Edit</button>
            <button className='border-2 text-sm rounded-md border-red-600 p-2 mx-2 hover:text-white hover:bg-red-600'>Delete</button>
        </div>
    </div>
  )
}

export default NotesListItem