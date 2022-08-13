import { Menu, Transition } from '@headlessui/react'
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
import {
  FaAddressBook,
  FaCode,
  FaGithub,
  FaLinkedinIn,
  FaMailBulk,
  FaProjectDiagram,
  FaUserCircle,
} from 'react-icons/fa'
import { Link, animateScroll as scroll } from 'react-scroll'
import {
  BiBookContent,
  BiLocationPlus,
  BiMessageAdd,
  BiSend,
  BiUserCircle,
} from 'react-icons/bi'
import { SiContactlesspayment, SiSkillshare } from 'react-icons/si'

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

                  <a
                    href={
                      'https://www.linkedin.com/in/favour-akomolafe-7345b9114/'
                    }
                  >
                    <FaLinkedinIn className="w-5 text-blue-400" />
                  </a>

                  <a href={'mailto:akomolafefavour@gmail.com'}>
                    <FaMailBulk className="w-5 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* mobile nav  */}
            <Menu as={'div'} className="mr-14 relative flex md:hidden ">
              <Menu.Button
                className="bg-blue-500 inline-flex items-center rounded-md justify-center p-2 text-white hover:bg-gray-500 focus:outline-none focus:ring-white"
                onClick={handleClick}
              >
                <span className="sr-only">Open mobile menu</span>
                <MenuIcon className="w-5" aria-hidden="true" />
              </Menu.Button>

              <Menu.Items className="absolute origin-top-right flex flex-col right-0 mt-10 w-56 py-3 bg-gray-50 text-gray-400 shadow-lg rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? ' text-blue-400 bg-gray-200' : ''
                      }  w-full py-2`}
                    >
                      <Link
                        activeClass={'about'}
                        to={'about'}
                        offset={-100}
                        duration={500}
                        smooth={true}
                        className="text-md font-semibold cursor-pointer"
                      >
                        <div className="flex items-center px-5">
                          <FaUserCircle className="w-4 h-4 mr-3 text-blue-400" />
                          <span>About</span>
                        </div>
                      </Link>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? ' text-blue-400 bg-gray-200' : ''
                      }  w-full py-2`}
                    >
                      <Link
                        activeClass="skills"
                        to={'skills'}
                        offset={-100}
                        duration={500}
                        smooth={true}
                        className="text-md font-semibold cursor-pointer"
                      >
                        <div className="flex items-center px-5">
                          <FaCode className="w-4 h-4 mr-3 text-blue-400" />
                          <span>Skills</span>
                        </div>
                      </Link>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? ' text-blue-400 bg-gray-200' : ''
                      }  w-full py-2`}
                    >
                      <Link
                        activeClass="projects"
                        to={'projects'}
                        offset={-100}
                        duration={500}
                        smooth={true}
                        className="text-md font-semibold cursor-pointer"
                      >
                        <div className="flex items-center px-5">
                          <FaProjectDiagram className="w-4 h-4 mr-3 text-blue-400" />
                          <span>Projects</span>
                        </div>
                      </Link>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? ' text-blue-400 bg-gray-200' : ''
                      }  w-full py-2`}
                    >
                      <Link
                        activeClass="contact"
                        to={'contact'}
                        offset={-100}
                        duration={500}
                        smooth={true}
                        className="text-md font-semibold cursor-pointer"
                      >
                        <div className="flex items-center px-5">
                          <FaAddressBook className="w-4 h-4 mr-3 text-blue-400" />
                          <span>Contact</span>
                        </div>
                      </Link>
                    </div>
                  )}
                </Menu.Item>

                <Menu.Item>
                  <div className="flex justify-center items-center flex-shrink-0 w-full py-3">
                    <div className="mt-3 flex text-gray-400 text-sm font-semibold gap-3 px-5">
                      <a href={'https://github.com/hayormikun'}>
                        <FaGithub className="w-5 text-black" />
                      </a>

                      <a
                        href={
                          'https://www.linkedin.com/in/favour-akomolafe-7345b9114/'
                        }
                      >
                        <FaLinkedinIn className="w-5 text-blue-400" />
                      </a>

                      <a href={'mailto:akomolafefavour@gmail.com'}>
                        <FaMailBulk className="w-5 text-gray-400" />
                      </a>
                    </div>
                  </div>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </nav>
    </div>
  )
}
