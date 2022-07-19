import type { NextPage } from 'next'
import Head from 'next/head'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Navbar } from '../components/Navbar'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Favour Akomolafe | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-24 flex flex-col justify-center py-5 w-10/12 mx-auto">
        <About />
        <Skills />
        <Projects/>
        <Contact />
      </main>
    </div>
  )
}

export default Home
