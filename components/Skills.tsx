import { SunIcon } from '@heroicons/react/outline'
import { BiCloud } from 'react-icons/bi'
import {
  FaAws,
  FaCloud,
  FaCss3,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'

import {SiMongodb, SiNextdotjs, SiTypescript} from 'react-icons/si'

export const Skills = () => {
  return (
    <div id="skills" className="my-12 w-full">
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
              <p className="my-3 text-center text-md font-normal">
                The HyperText Markup Language or HTML is the standard markup
                language for documents designed to be displayed in a web
                browser. <br /> I'm highly proficient with the use of HTML for
                markup of webpages with a linkendin skill badge in HTMl to
                assert my proficiency.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg flex items-center text-gray-600 font-semibold">
                <FaCss3Alt className="w-7 h-14 mr-4 text-red-500" />
                CSS
              </h3>
              <p className="my-3 text-center text-md font-normal">
                Cascading Style Sheets is a style sheet language used for
                describing the presentation of a document written in a markup
                language such as HTML or XML.
                <br /> Styling of webpages to fit required design/layouts,
                improve user experience using CSS and CSS frameworks are my
                forte. I've earned a linkedin bage to assert my profiency with
                the skill.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg flex items-center text-gray-600 font-semibold">
                <FaJs className="w-7 h-14 mr-4 text-blue-400" />
                JavaScript
              </h3>
              <p className="my-3 text-center">
                JavaScript, often abbreviated JS, is a programming language that
                is one of the core technologies of the World Wide Web, alongside
                HTML and CSS. As of 2022, 98% of websites use JavaScript on the
                client side for web page behavior, often incorporating
                third-party libraries.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg items-center flex text-gray-600 font-semibold">
                <SiTypescript className="w-7 h-14 mr-4 text-blue-400" />
                TypeScript
              </h3>
              <p className="my-3 text-center">
                TypeScript is a programming language developed and maintained by
                Microsoft. It is a strict syntactical superset of JavaScript and
                adds optional static typing to the language. It is designed for
                the development of large applications and transpiles to
                JavaScript.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg flex items-center text-gray-600 font-semibold">
                <FaReact className="w-7 h-14 mr-4 text-blue-900" />
                React.js
              </h3>
              <p className="my-3 text-center">
                React is a free and open-source front-end JavaScript library for
                building user interfaces based on UI components. It is
                maintained by Meta and a community of individual developers and
                companies.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg flex items-center text-gray-600 font-semibold">
                <SiNextdotjs className="w-7 h-14 mr-4 text-gray-700" />
                Next.js
              </h3>
              <p className="my-3 text-center">
                Next.js is an open-source web development framework built on top
                of Node.js enabling React-based web applications functionalities
                such as server-side rendering and generating static websites.
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
                Node.js is an open-source, cross-platform, back-end JavaScript
                runtime environment that runs on the V8 engine and executes
                JavaScript code outside a web browser, which was designed to
                build scalable network applications.
              </p>
            </div>
            {/* <div className="flex flex-col items-center">
              <h3 className="text-lg flex items-center text-gray-600 font-semibold">
                <FaNodeJs className="w-7 h-14 mr-4 text-green-400" />
                Express.js
              </h3>
              <p className="my-3 text-center">
                Express.js, or simply Express, is a back end web application
                framework for Node.js, released as free and open-source software
                under the MIT License. It is designed for building web
                applications and APIs. It has been called the de facto standard
                server framework for Node.js.
              </p>
            </div> */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg flex items-center text-gray-600 font-semibold">
                <SiMongodb className="w-7 h-14 mr-4 text-green-600" />
                Mongo DB
              </h3>
              <p className="my-3 text-center">
                MongoDB is an open source cross-platform document-oriented
                database program. Classified as a NoSQL database program,
                MongoDB uses JSON-like documents with optional schemas. MongoDB
                is developed by MongoDB Inc. and licensed under the Server Side
                Public License which is deemed non-free by several
                distributions.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg flex items-center text-gray-600 font-bold">
                <FaCloud className="w-7 h-14 mr-4 text-gray-500"/>

                
                REST API
              </h3>
              <p className="my-3 text-center">
                Representational state transfer is a software architectural
                style that describes a uniform interface between decoupled
                components in the Internet in a Client-Server architecture.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg flex items-center text-gray-600 font-semibold">
                <FaAws className="w-7 h-14 mr-4 text-gray-600" />
                AWS
              </h3>
              <p className="my-3 text-center">
                Amazon Web Services, Inc. is a subsidiary of Amazon that
                provides on-demand cloud computing platforms and APIs to
                individuals, companies, and governments, on a metered
                pay-as-you-go basis. These cloud computing web services provide
                distributed computing processing capacity and software tools via
                AWS server farms.
              </p>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}
