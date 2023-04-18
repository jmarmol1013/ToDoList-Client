import Link from 'next/link';
import React,{useState} from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';

const LoginPage= () => {
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [signInError,setSignInError] = useState('');
    const router = useRouter();

    const {login} = useAuth();

    const onClickSignin = async () => {

        if(!email || !password) {
            setSignInError('Please enter email and password');
        }

        try{
            setSignInError('');
            await login(email,password);
            router.push('/Dashboard');
        } catch (error) {
            setSignInError('Could not login. Verify your email and password.');
        }
    } 

    return (
    <>
        <div className='flex w-full h-screen items-center justify-center'>
            <div className='md:w-1/2 bg-white lg:ml-[20%] rounded-l-md'>
                <div className='p-8'>
                    <h3 className=' text-3xl'>Hey, Welcome <br></br> Back</h3>
                    <h4 className=' text-xl text-[#A1A1A1]'>Login to continue with your <br></br> To Do List</h4>
                        <p className=' text-base font-light mt-4'>Email</p>
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
                        >Login
                        </button>
                    {
                    signInError ? 
                        <p className='text-center text-red-600 text-sm mt-2'>{signInError}</p>
                    :
                    null
                    }
                    <p className='text-center text-[#A1A1A1] text-sm w-full pt-3'>
                        <Link href='/Register'>You don’t have an account?</Link>
                    </p>
                </div>
            </div>
            <div className='w-1/2 mr-[20%] bg-gradient-to-b from-[#4F56C6] to-[#C9CFEC] rounded-r-md lg:block hidden'>
                <div className='m-8 bg-[#CFD3EA]'>
                    <h1 className='text-white text-4xl  leading-snug p-8'>Take your notes to <br></br> another level with <br></br><span className='text-black'>Listify</span></h1>
                    <h2 className='text-white text-xl p-8'>Track your notes, daily routine, habits, schedule, projects and every day.</h2>
                </div>
            </div>
        </div>
    </>
    )
}

export default LoginPage