import Image from 'next/image'
import { Link as Projects, animateScroll as scroll } from 'react-scroll'

export const About = () => {
  return (
    <>
      <div
        id="about"
        className="block md:grid grid-cols-3 gap-5 items-center md:h-[550px]"
      >
        <div className="w-full overflow-hidden col-span-1">
          <div className="flex w-full justify-center">
          <Image
            src={'/img/DSC_1554.jpg'}
            width={'350px'}
            height={'350px'}
            objectFit="cover"
            alt="Favour Akomolafe"
            className="rounded-full"
          />
          </div>
        </div>
        <div className="w-full col-span-2">
          <div className="flex flex-col my-12">
            <h1 className="text-gray-700 text-5xl font-bold mb-5">
              Hello, I am <span className="text-blue-700">Favour</span>
            </h1>
            <p className="text-gray-500 font-medium mb-5">
              Software engineer at <b>Behruz Hybrid</b>, a
              software development company aimed at offering secure, scalable
              and desired products to clients. I build scalable web apps using modern frontend technologies and frameworks such as React.js, Next.js and develop backend application using Node.js and Express.js framework.
            </p>
            <Projects
              activeClass="projects"
              to={'projects'}
              offset={-100}
              duration={500}
              smooth={true}
              className="bg-blue-700 py-3 px-5 rounded text-white font-semibold tracking-wider cursor-pointer hover:bg-blue-900 w-fit"
            >
              View projects
            </Projects>
          </div>
        </div>
      </div>
    </>
  )
}
