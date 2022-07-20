
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import {
  CodeIcon,
  GiftIcon,
  HomeIcon,
  LinkIcon,
  MailIcon,
  MenuIcon,
  ReceiptTaxIcon,
  ServerIcon,
  XIcon,
} from '@heroicons/react/outline'
import { FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa'
import { Link, animateScroll as scroll } from 'react-scroll'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <nav className="fixed z-20 bg-white w-full font-nunito">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center mx-10 md:mx-20 justify-between w-full">
              {/* brand Name */}
              <div className="flex justify-center items-center flex-shrink-0">
                <h1 className="text-gray-500 text-2xl cursor-pointer font-semibold">
                <Link
                    activeClass={'about'}
                    to={'about'}
                    offset={-50}
                    duration={500}
                    smooth={true}
                  >
                  Favour <span className="text-blue-600">Akomolafe</span>
                  </Link>
                </h1>
              </div>

              {/* links */}
              <div className="hidden md:block">
                <div className="flex ml-10 items-baseline space-x-4 text-gray-500">
                  <Link
                    activeClass={'about'}
                    to={'about'}
                    offset={-50}
                    duration={500}
                    smooth={true}
                    className="hover:text-blue-500 text-md font-semibold cursor-pointer px-3 py-2"
                  >
                    About
                  </Link>
                  <Link
                    activeClass="skills"
                    to={'skills'}
                    offset={-100}
                    duration={500}
                    smooth={true}
                    className="hover:text-blue-500 text-md font-semibold cursor-pointer px-3 py-2"
                  >
                    Skills
                  </Link>
                  <Link
                    activeClass="projects"
                    to={'projects'}
                    offset={-100}
                    duration={500}
                    smooth={true}
                    className="hover:text-blue-500 text-md font-semibold cursor-pointer px-3 py-2"
                  >
                    Projects
                  </Link>
                  {/* <Link
                    activeClass="recommendations"
                    to={'recommendations'}
                    offset={-100}
                    duration={500}
                    smooth={true}
                    className="hover:text-blue-500 text-md font-semibold cursor-pointer px-3 py-2"
                  >
                    Recommendation
                  </Link> */}
                  <Link
                    activeClass="contact"
                    to={'contact'}
                    offset={-100}
                    duration={500}
                    smooth={true}
                    className="hover:text-blue-500 text-md font-semibold cursor-pointer px-3 py-2"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              {/* github/linkedin */}
              <div className="hidden md:flex justify-center items-center flex-shrink-0">
                <div className="flex text-gray-400 text-sm font-semibold gap-3">
                  <a href={'https://github.com/hayormikun'}>
                    <FaGithub className="w-5 text-black" />
                  </a>

                  <a href={'https://www.linkedin.com/in/favour-akomolafe-7345b9114/'}>
                    <FaLinkedinIn className="w-5 text-blue-400" />
                  </a>
              
                  <a href={"mailto:akomolafefavour@gmail.com"}>
                    <FaMailBulk className="w-5 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* mobile nav  */}

            <div className="mr-14 flex md:hidden">
              <button
                type="button"
                className="bg-blue-500 inline-flex items-center rounded-md justify-center p-2 text-white hover:bg-gray-500 focus:outline-none focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleClick}
              >
                <span className="sr-only">Open mobile menu</span>
                {!isOpen ? (
                  <MenuIcon className="w-5" aria-hidden="true" />
                ) : (
                  <XIcon className="w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* small screen navigation */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transfom"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          >
          <>
          {(ref: any) => {
            <div className="block md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white mx-4 mr-20 pt-4 pb-4 space-y-2"
              >
                <Link
                  activeClass="about"
                  to="about"
                  smooth="true"
                  offset={50}
                  duration={500}
                  className="cursor-pointer font-medium text-black-400 hover:bg-blue-400 hover:text-white block px-3 py-2 text-base"
                >
                  <HomeIcon className="w-5" /> Home
                </Link>
                <Link
                  href="/skills"
                  activeClass="skills"
                  to="skills"
                  smooth="true"
                  offset={50}
                  duration={500}
                  className="cursor-pointer font-medium text-black-400 hover:bg-blue-400 hover:text-white block px-3 py-2 text-base"
                >
                  <CodeIcon /> Skills
                </Link>
                <Link
                  href="/projects"
                  activeClass="projects"
                  to="projects"
                  smooth="true"
                  offset={50}
                  duration={500}
                  className="cursor-pointer font-medium text-black-400 hover:bg-blue-400 hover:text-white block px-3 py-2 text-base"
                >
                  <ServerIcon />
                  Projects
                </Link>
                {/* <Link
                  href="/recommendations"
                  activeClass="recommendations"
                  to="recommendations"
                  smooth="true"
                  offset={50}
                  duration={500}
                  className="cursor-pointer font-medium text-black-400 hover:bg-blue-400 hover:text-white block px-3 py-2 text-base"
                >
                  <ReceiptTaxIcon />
                  Recommendations
                </Link> */}
                <Link
                  href="/contact"
                  activeClass="contact"
                  to="contact"
                  smooth="true"
                  offset={50}
                  duration={500}
                  className="cursor-pointer font-medium text-black-400 hover:bg-blue-400 hover:text-white block px-3 py-2 text-base"
                >
                  <MailIcon /> Contact
                </Link>
                <Link
                  href="/info"
                  activeClass="info"
                  to="info"
                  smooth="true"
                  offset={50}
                  duration={500}
                  className="cursor-pointer font-medium text-black-400 hover:bg-blue-400 hover:text-white block px-3 py-2 text-base "
                >
                  <div className="flex gap-2">
                    <LinkIcon className="w-5" />
                    <GiftIcon className="w-5" />
                    <span>akomolafefavour@gmail.com</span>
                  </div>
                </Link>
              </div>
            </div>
          }}
        </>
      </Transition>
      </nav>
    </div>
  )
}
