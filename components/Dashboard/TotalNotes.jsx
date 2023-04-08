import React from 'react'

const TotalNotes = () => {
  return (
    <div className='my-6 flex items-center justify-center text-xl'>
        <div className='flex mx-4'>
            <h2 className='text-[#5482DE]'>To Do: </h2>
            <p className='ml-2'>5</p>
        </div>
        <div className='flex mx-4'>
            <h2 className='text-[#7054DE]'>Doing: </h2>
            <p className='ml-2'>2</p>
        </div>
        <div className='flex mx-4'>
            <h2 className='text-[#8F50D4]'>Done: </h2>
            <p className='ml-2'>3</p>
        </div>
    </div>
  )
}

export default TotalNotes