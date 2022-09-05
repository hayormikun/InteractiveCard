import type { NextPage } from 'next'
import Head from 'next/head'
import { Form } from '../components/Form'
import { SidePreview } from '../components/SidePreview'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Card Payment </title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
        <main className="grid md:grid-cols-3 font-grotesk font-medium w-full h-[100vh] relative overflow-hidden">
          <div className="md:col-span-1 w-full h-full">
            <SidePreview />
          </div>
          <div className="md:col-span-2 w-full h-full">
            <Form />
          </div>
        </main>
    </div>
  )
}

export default Home
