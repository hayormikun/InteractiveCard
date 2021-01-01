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
        <main className="grid lg:grid-cols-3 font-grotesk font-medium w-full h-[100vh] relative lg:overflow-hidden">
          <div className="lg:col-span-1 w-full h-full lg:mb-0">
            <SidePreview />
          </div>
          <div className="lg:col-span-2 w-full h-full">
            <Form />
          </div>
        </main>
    </div>
  )
}

export default Home
