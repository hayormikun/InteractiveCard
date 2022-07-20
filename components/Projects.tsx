import Image from 'next/image'
import Link from 'next/link'
import { Link as About, animateScroll as scroll } from 'react-scroll'

export const Projects = () => {
  return (
    <div id="projects" className="my-12 w-full">
      <h1 className="text-blue-700 font-bold text-6xl text-center mb-10">
        Projects
      </h1>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <About
          activeClass={'about'}
          to={'about'}
          offset={-50}
          duration={500}
          smooth={true}
        >
          <div className="bg-gray-50 max-w-[450px] cursor-pointer rounded-md shadow-md overflow-hidden mb-10 mx-auto space-y-2">
            <Image
              src={'/img/favour.png'}
              width={450}
              height={300}
              layout={'responsive'}
              className="shadow-md"
            />

            <div className="block p-5">
              <h2 className="text-blue-600 text-lg font-semibold mb-3">
                Favour Akomolafe
              </h2>
              <p className="text-gray-400">
                The portfolio site of favour akomolafe used to showcase past
                projects, expertise and skills.
                <br />
                <br /> Visitors can send a message discussing their next project
                or schedule a meeting with him on this site.
              </p>
            </div>
          </div>
        </About>

        <Link href={'madcuisine'} target={'_blank'}>
          <div className="bg-gray-50 max-w-[450px] cursor-pointer rounded-md shadow-md overflow-hidden mb-10 mx-auto space-y-2">
            <Image
              src={'/img/madcuisines.png'}
              width={450}
              height={300}
              layout={'responsive'}
              className="shadow-md"
            />

            <div className="block p-5">
              <h2 className="text-teal-400 text-lg font-semibold mb-3">
                Madcuisines
              </h2>
              <p className="text-gray-400">
                A meal booking app customers can order food from madcuisines and
                get their food delivered to them timely, the admin panel aids
                monitoring of products and orders.
              </p>
            </div>
          </div>
        </Link>

        <Link href={'http://savioursassembly.com/'} target={'_blank'}>
          <div className="bg-gray-50 max-w-[450px] cursor-pointer rounded-md shadow-md overflow-hidden mb-10 mx-auto space-y-2">
            <Image
              src={'/img/savioursassembly.png'}
              width={450}
              height={300}
              layout={'responsive'}
              className="w-full, h-full"
            />

            <div className="block p-5">
              <h2 className="text-red-400 text-lg font-semibold mb-3">
                Saviours Assembly
              </h2>
              <p className="text-gray-400">
                Saviours Assembly is a bible believing church located in
                nigeria. this web app helps church members listen to audio
                messages and read daily devotionals updated by the church
                management.
              </p>
            </div>
          </div>
        </Link>

        <Link href={'http://medvistadiagnostics.com/'} target={'_blank'}>
          <div className="bg-gray-50 max-w-[450px] cursor-pointer rounded-md shadow-md overflow-hidden mb-10 mx-auto space-y-2">
            <Image
              src={'/img/medvista.png'}
              width={450}
              height={300}
              layout={'responsive'}
              className="shadow-md"
            />

            <div className="block p-5">
              <h2 className="text-blue-400 text-lg font-semibold mb-3">
                Medvista Diagnostics
              </h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                iure similique repudiandae, autem numquam ipsam aperiam facilis
                necessitatibus alias quam ducimus voluptatum recusandae minima
                expedita ad itaque nam voluptas odit?
              </p>
            </div>
          </div>
        </Link>

        <Link href={'http://biosec.com.ng/'} target={'_blank'}>
          <div className="bg-gray-50 max-w-[450px] cursor-pointer rounded-md shadow-md overflow-hidden mb-10 mx-auto space-y-2">
            <Image
              src={'/img/biosec.png'}
              width={450}
              height={300}
              layout={'responsive'}
              className="shadow-md"
            />

            <div className="block p-5">
              <h2 className="text-blue-600 text-lg font-semibold mb-3">
                Biosec Solutions
              </h2>
              <p className="text-gray-400">
                Official website of biosec solutions an identity management
                company based in nigeria.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
