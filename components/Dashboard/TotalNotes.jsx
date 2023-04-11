import React, { useEffect, useState } from 'react'

const TotalNotes = ({notes}) => {
  const [toDoCounter,setToDoCounter] = useState(0);
  const [doingCounter,setDoingCounter] = useState(0);
  const [doneCounter,setDoneCounter] = useState(0);

  useEffect(() => {
    let countToDo = 0;
    let countDoing = 0;
    let countDone = 0;
    
    if(Object.keys(notes).length === 0){
      setToDoCounter(0)
      setDoingCounter(0);
      setDoneCounter(0);
    }

    notes.map((note)=>{
      if(note.noteList === 'toDo'){
        countToDo++;
      } 

      if(note.noteList === 'doing'){
        countDoing++;
      }

      if(note.noteList === 'done'){
        countDone++;
      }

      setToDoCounter(countToDo)
      setDoingCounter(countDoing);
      setDoneCounter(countDone);
    });
  })
  
  
  return (
    <div className='my-6 flex items-center justify-center text-xl'>
        <div className='flex mx-4'>
            <h2 className='text-[#5482DE]'>To Do: </h2>
            <p className='ml-2'>{toDoCounter}</p>
        </div>
        <div className='flex mx-4'>
            <h2 className='text-[#7054DE]'>Doing: </h2>
            <p className='ml-2'>{doingCounter}</p>
        </div>
        <div className='flex mx-4'>
            <h2 className='text-[#8F50D4]'>Done: </h2>
            <p className='ml-2'>{doneCounter}</p>
        </div>
    </div>
  )
}

export default TotalNotes