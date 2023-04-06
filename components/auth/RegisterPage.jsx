import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';

const RegisterPage = () => {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [signInError,setSignInError] = useState('');
  const router = useRouter();

  const {singnup} = useAuth();

  const onClickSignin = async () => {

      if(!email || !password) {
          setSignInError('Please enter email and password');
          return
      }

      try{
          setSignInError('');
          await singnup(email,password);
          router.push('/Dashboard');
      } catch (e) {
          setSignInError('Could not register. Verify your email and password.');
      }

  } 

  return (
  <>
      <div className='flex w-full h-screen items-center justify-center'>
          <div className='md:w-1/2 bg-white lg:ml-[20%] rounded-l-md'>
              <div className='p-8'>
                  <h3 className=' text-3xl'>Hey, Be Part of <br></br> The Family</h3>
                  <h4 className=' text-xl text-[#A1A1A1]'>Register to start creating your <br></br> To Do List</h4>
                    <div className='flex flex-row mt-4'>
                      <div className='w-1/2 mr-2'>
                        <p className='text-base font-light'>First Name</p>
                          <input 
                              id="firstName"
                              type="text"
                              name='firstName'
                              placeholder="Joe"
                              value={firstName}
                              onChange={(event) => setFirstName(event.target.value)}
                              className='appearance-none border border-[#A1A1A1] rounded-md mb-3 w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none'
                        />
                      </div>
                      <div className='w-1/2 ml-2'>
                        <p className=' text-base font-light '>Last Name</p>
                            <input 
                                id="lastName"
                                type="text"
                                name='lastName'
                                placeholder="Doe"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                                className='appearance-none border border-[#A1A1A1] rounded-md mb-3 w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none'
                        />
                      </div>
                    </div>
                    <p className=' text-base font-light'>Email</p>
                    <input 
                        id="email"
                        type="email"
                        name='email'
                        placeholder="Joedoe@gmail.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className='appearance-none border border-[#A1A1A1] rounded-md mb-3 w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none'
                    />
                    <p className=' text-base font-light '>Password</p>
                    <input 
                        id="password"
                        type="password"
                        name='password'
                        placeholder="••••••••"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className='appearance-none border border-[#A1A1A1] rounded-md mb-3 w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none'
                    />
                    <button 
                    className='w-full border-2 font-light border-[#585FC8] text-center rounded-md mt-2 hover:bg-[#585FC8] hover:text-white'
                    onClick={onClickSignin}
                    >Register
                    </button>
                  {
                  signInError ? 
                      <p className='text-center text-red-600 mt-2 text-sm'>{signInError}</p>
                  :
                  null
                  }
                  <p className='text-center text-[#A1A1A1] text-sm w-full pt-3'>
                      <Link href='/LogIn'>Already have an account?</Link>
                  </p>
              </div>
          </div>
          <div className='w-1/2 mr-[20%] bg-gradient-to-b from-[#4F56C6] to-[#C9CFEC] rounded-r-md lg:block hidden'>
              <div className='m-8 bg-[#CFD3EA]'>
                  <h1 className='text-white text-4xl leading-snug p-8'>Take your notes to <br></br> another level with <br></br><span className='text-black'>ToDoList</span></h1>
                  <h2 className='text-white text-xl py-7 px-8'>Simple and intuitive tool to help you stay organized and on top of your tasks. With our app, you can easily create and manage your to-do list, set reminders, and prioritize your tasks.</h2>
              </div>
          </div>
      </div>
  </>
  )
}

export default RegisterPage