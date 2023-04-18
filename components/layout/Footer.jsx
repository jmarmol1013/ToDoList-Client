import Link from 'next/link'
import React from 'react'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#555CC7] text-white p-2 items-center text-center">
        <div className='flex justify-center'>
            <Link href='https://github.com/jmarmol1013' target='_blank'>
                <button className='border-2 border-white p-2 text-white hover:bg-white hover:text-[#555CC7] mr-2 rounded-md'>
                    <AiFillGithub size={24}/>
                </button>
            </Link>
            <Link href='https://www.linkedin.com/in/juan-camilo-marmolejo-58b02224b/' target='_blank'>
            <button className='border-2 border-white p-2 text-white hover:bg-white hover:text-[#555CC7] ml-2 rounded-md'>
                <AiFillLinkedin size={24}/>
            </button>
        </Link>
        </div>
        <p className='mt-2'><i>2023 &copy; Juan Camilo Marmolejo</i></p>
    </footer>
  )
}

export default Footer