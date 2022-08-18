import type { NextPage } from 'next'
import Head from 'next/head'
import { Form } from '../components/Form'

import bg from '../public/img/bg-main-desktop.png'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Favour Akomolafe | Portfolio</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className="grid grid-cols-3 font-nunito h-full relative">
        <div className="absolute top-32 left-32 z-20">
          <div className="relative">
          <div className="absolute top-5 left-7 flex items-center">
              <span className='w-12 h-12 mr-3 bg-white rounded-full'>
              </span>

              <span className='w-6 h-6 border-2 border-white rounded-full'>
              </span>
            </div>
            <div className="absolute bottom-16 left-7 text-white text-4xl">
            9591 6489 6389 101E
            </div>

            <div className="absolute bottom-5 left-7 right-5 text-white w-auto text-md font-medium flex justify-between items-center">
            <p>
              FELICIA LEIRE
            </p>
            <p>
            09/00
            </p>
            </div>
            <img src="/img/bg-card-front.png" alt="" />
          </div>
        </div>

        <div className="absolute left-64 bottom-60 z-20">
          <div className="relative">
            <p className='absolute text-white top-[6.7rem] right-14'>
              000
            </p>
          <img src="/img/bg-card-back.png" alt="" />
          </div>
        </div>

        <div className="col-span-1 w-full h-full">
          <img src="/img/bg-main-desktop.png" alt="" />
        </div>
        <div
          style={{ backgroundColor: 'hsl(0, 0%, 100%)' }}
          className="col-span-2 w-full h-full"
        >
          <Form />
        </div>
      </main>
    </div>
  )
}

export default Home
