import Link from 'next/link'
import React, { useState } from 'react'
import {FiArrowDown} from 'react-icons/fi'

const NavNotesSection = ({notesList,noteListToDo,noteListDoing,noteListDone}) => {
  return (
    <div className={`bg-[#F0F0F0] border-b-4 flex w-full justify-between
    ${notesList === 'toDo' ? 'border-[#5482DE]' : notesList === 'doing' ? 'border-[#7054DE]' : notesList === 'done' ? 'border-[#8F50D4]':'border-white'}`}>
      <div className='divide-x-2 divide-white'>
        <button 
          className={` p-6  ${notesList === "toDo" ? "text-white rounded-t-md bg-[#5482DE]" : "text-[#5482DE]"}`}
          onClick={noteListToDo}
        >To Do</button>
        <button 
          className={` p-6  ${notesList === "doing" ? "text-white rounded-t-md bg-[#7054DE]" : "text-[#7054DE]"}`}
          onClick={noteListDoing}
        >Doing</button>
        <button 
          className={` p-6  ${notesList === "done" ? "text-white rounded-t-md bg-[#8F50D4]" : "text-[#8F50D4]"}`}
          onClick={noteListDone}
        >Done</button>
      </div>
      <div className='justify-end p-2 flex'>
        <div className='flex items-center p-3 border-2 rounded-md border-[#509ED4] text-[#509ED4] hover:text-white hover:bg-[#509ED4] mx-4 hover:cursor-pointer'>
          <span className='pr-2'>Filter</span>
          <FiArrowDown/>
        </div>
        {
          notesList === 'toDo' ?
          <Link href='/CreateNote'>
            <button className='border-2 rounded-md border-[#5482DE] p-3 text-[#5482DE] hover:text-white hover:bg-[#5482DE]'>New Note</button>
          </Link>
            
          :
          null
        }
        
      </div>
    </div>
  )
}

export default NavNotesSection