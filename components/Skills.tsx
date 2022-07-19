import { SunIcon } from '@heroicons/react/outline'
import {
  FaAws,
  FaCss3,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'

export const Skills = () => {
  return (
    <div id='skills' className="my-12 w-full">
      <h1 className="text-blue-700 font-bold text-6xl text-center">
        Skills and Expertise
      </h1>
      <div className="flex flex-col my-5">
        <>
          <h2 className="text-blue-400 font-semibold text-2xl my-7 pl-4 pb-2 pr-10 border-b-4 rounded-br-2xl border-blue-400 w-fit">
            Front End Development
          </h2>
          <div className=" md:grid grid-cols-3 gap-5 my-5 text-gray-400">
            <div className="flex flex-col items-center">
              <h3 className="flex items-center text-lg text-gray-600 font-semibold">
                <FaHtml5 className="w-7 h-14 mr-4 text-red-500" />
                HTML
              </h3>
              <p className="my-3 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
                asperiores, et rerum eligendi sed quos dolorem esse quae ipsam
                iusto beatae consequuntur doloribus! Magni laborum perferendis
                iusto quidem quaerat aperiam.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg flex items-center text-gray-600 font-semibold">
                <FaCss3Alt className="w-7 h-14 mr-4 text-red-500" />
                CSS
              </h3>
              <p className="my-3 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
                asperiores, et rerum eligendi sed quos dolorem esse quae ipsam
                iusto beatae consequuntur doloribus! Magni laborum perferendis
                iusto quidem quaerat aperiam.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg flex items-center text-gray-600 font-semibold">
                <FaJs className="w-7 h-14 mr-4 text-blue-400" />
                JavaScript
              </h3>
              <p className="my-3 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
                asperiores, et rerum eligendi sed quos dolorem esse quae ipsam
                iusto beatae consequuntur doloribus! Magni laborum perferendis
                iusto quidem quaerat aperiam.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg items-center flex text-gray-600 font-semibold">
                <FaJs className="w-7 h-14 mr-4 text-blue-400" />
                TypeScript
              </h3>
              <p className="my-3 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
                asperiores, et rerum eligendi sed quos dolorem esse quae ipsam
                iusto beatae consequuntur doloribus! Magni laborum perferendis
                iusto quidem quaerat aperiam.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg flex items-center text-gray-600 font-semibold">
                <FaReact className="w-7 h-14 mr-4 text-blue-900" />
                React.js
              </h3>
              <p className="my-3 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
                asperiores, et rerum eligendi sed quos dolorem esse quae ipsam
                iusto beatae consequuntur doloribus! Magni laborum perferendis
                iusto quidem quaerat aperiam.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg flex items-center text-gray-600 font-semibold">
                <FaCss3Alt className="w-7 h-14 mr-4 text-red-500" />
                Next.js
              </h3>
              <p className="my-3 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
                asperiores, et rerum eligendi sed quos dolorem esse quae ipsam
                iusto beatae consequuntur doloribus! Magni laborum perferendis
                iusto quidem quaerat aperiam.
              </p>
            </div>
          </div>
        </>

        <>
          <h2 className="text-green-400 font-semibold text-2xl my-7 pl-4 pb-2 pr-10 border-b-4 rounded-br-2xl border-green-400 w-fit">
            Back End Development
          </h2>
          <div className="md:grid grid-cols-3 gap-5 my-5 text-gray-400">
            <div className="flex flex-col items-center">
              <h3 className="text-lg flex items-center text-gray-600 font-semibold">
                <FaNodeJs className="w-7 h-14 mr-4 text-green-400" />
                Node.js
              </h3>
              <p className="my-3 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
                asperiores, et rerum eligendi sed quos dolorem esse quae ipsam
                iusto beatae consequuntur doloribus! Magni laborum perferendis
                iusto quidem quaerat aperiam.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg flex items-center text-gray-600 font-semibold">
                <FaNodeJs className="w-7 h-14 mr-4 text-green-400" />
                Express.js
              </h3>
              <p className="my-3 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
                asperiores, et rerum eligendi sed quos dolorem esse quae ipsam
                iusto beatae consequuntur doloribus! Magni laborum perferendis
                iusto quidem quaerat aperiam.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg flex items-center text-gray-600 font-semibold">
                <FaNodeJs className="w-7 h-14 mr-4 text-green-400" />
                Mongo DB
              </h3>
              <p className="my-3 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
                asperiores, et rerum eligendi sed quos dolorem esse quae ipsam
                iusto beatae consequuntur doloribus! Magni laborum perferendis
                iusto quidem quaerat aperiam.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg flex items-center text-gray-600 font-semibold">
                <FaAws className="w-7 h-14 mr-4 text-gray-600" />
                AWS
              </h3>
              <p className="my-3 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
                asperiores, et rerum eligendi sed quos dolorem esse quae ipsam
                iusto beatae consequuntur doloribus! Magni laborum perferendis
                iusto quidem quaerat aperiam.
              </p>
            </div>

            
          </div>
        </>
      </div>
    </div>
  )
}
