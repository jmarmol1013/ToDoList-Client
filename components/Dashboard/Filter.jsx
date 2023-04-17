import React, { useState } from 'react'
import {FiArrowDown,FiArrowUp} from 'react-icons/fi'

const Filter = ({filterData,typeNotes}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
   <div className='relative'>
        <div className={`${isOpen ? `bg-[#509ED4] text-white`: null} flex items-center p-3 border-2 rounded-md border-[#509ED4] text-[#509ED4] hover:text-white hover:bg-[#509ED4] mx-4 hover:cursor-pointer`} onClick={toggleDropdown}>
            <span className='pr-2'>Filter</span>
            {
                isOpen ? 
                    <FiArrowUp />
                :
                <FiArrowDown/>
            }
        <div/>
        {isOpen && (
            <div className="absolute z-50 right-0 top-14 mr-4 w-36 rounded-md shadow-md border-[#509ED4] text-white bg-[#509ED4] text-center divide-y-2 divide-white ">
                {
                    typeNotes ?
                    typeNotes.map((typeNote,index) => {
                        return(
                            <p className='p-2 hover:text-[#8F50D4]' onClick={() => filterData(typeNote)} key={index}>
                                {typeNote}
                            </p>
                        )
                    })
                    :
                    null
                }
            </div>
        )}
        </div>
   </div>
  )
}

export default Filter