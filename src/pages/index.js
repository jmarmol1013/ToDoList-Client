import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>To Do List</title>
        <meta name="description" content="To Do List by Juan Camilo Marmolejo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className=' text-center'>Welcome to ToDoList</h1>
      </main>
    </>
  )
}
