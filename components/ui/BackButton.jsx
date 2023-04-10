import { useRouter } from 'next/router'
import React from 'react'
import {BiArrowBack} from 'react-icons/bi'

const BackButton = () => {
  const router = useRouter();
  return (
    <button className='p-3 rounded-md text-[white] fixed ml-24 mt-11 bg-[#8F50D4]' onClick={() => router.back()}>
        <BiArrowBack size={24}/>
    </button>
  )
}

export default BackButton