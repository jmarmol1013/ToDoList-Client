import Head from 'next/head'
import LoginPage from '../../components/auth/LoginPage'

export default function LogIn() {
  return (
    <>
      <Head>
        <title>To Do List</title>
        <meta name="description" content="To Do List by Juan Camilo Marmolejo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-[#EBF0FF]'>
        <LoginPage />
      </main>
    </>
  )
}