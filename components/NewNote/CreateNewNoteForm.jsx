import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import { postWithCredentials } from '../../data/postWithCredentials';
import DropDown from '../ui/DropDown'

const CreateNewNoteForm = () => { 
  const [note,setNote] = useState('');  
  const [noteType,setNoteType] = useState('');
  const [errorMessage,setErrorMessage] = useState('');
  const {currentUser} = useAuth();
  const router = useRouter();


  const createNote = async () => {
    if (note == '' || noteType == '') {
        setErrorMessage('Please insert a note and select a note type');
    }else{
        setErrorMessage('');
        await postWithCredentials('http://localhost:8080/createNote',{note:note,noteType:noteType},currentUser);
        router.push('Dashboard');
    }
  }

  const options = [
    'Study',
    'Life',
    'Daily',
    'Sports',
    'Work',
    'Other',
  ]

  return (
    <div className='flex w-full mt-32 items-center justify-center'>
        <div className='border-white bg-white rounded-md w-[50%]'>
            <h1 className='text-3xl text-[#5482DE] mt-6 ml-6'>New Note</h1>
            <p className='text-xl ml-6 mt-3'>Note:</p>
            <textarea 
                className='resize-none border ml-5 mt-2 rounded-md w-[95%] py-2 px-3 focus:outline-[#509ED4]' 
                placeholder='Wash my car'
                value={note}
                onChange={(event) => setNote(event.target.value)}
                required
            />
            <div className='flex mt-4'>
                <p className='ml-6 text-xl'>Type:</p>
                <DropDown 
                    className='ml-2 text-base text-[#509ED4] focus:outline-[#509ED4]'
                    options={options}
                    value={noteType}
                    onChange={(event) => setNoteType(event.target.value)}
                />
            </div>
            <div className='flex justify-center my-8'>
                <button className='border border-[#5482DE] rounded-md px-4 py-2 hover:bg-[#5482DE] hover:text-white' onClick={createNote}>Add</button>
            </div>

            {
                errorMessage ? 
                    <p className='my-4 text-sm text-[#5482DE] text-center'>{errorMessage}</p>
                :null
            }
           
        </div>
    </div>
  )
}

export default CreateNewNoteForm