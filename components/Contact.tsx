import { MailIcon, UserCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaMailBulk, FaTwitter } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import { useForm } from 'react-hook-form'
import axios from 'axios'

type FormData = {
  name: string
  email: string
  message: string
}

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    shouldUseNativeValidation: true,
  })

  const onSubmit = async (data: FormData) => {
    await axios.post('http://localhost:5000/api/message', data).then(()=>{
      console.log('user created')
    })
  }

  return (
    <div id="contact" className="my-12 w-full">
      <h1 className="text-blue-700 font-bold text-6xl text-center">
        Get in Touch
      </h1>
      <div className="md:grid grid-cols-3 md:shadow-lg my-5">
        <div className="col-span-2 h-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid w-8/12 text-gray-500 mx-auto gap-7 py-14"
          >
            <div className="flex flex-col w-full space-y-1 text-md">
              <label htmlFor="name" className="flex items-center font-semibold">
                <UserCircleIcon className="w-5 mr-2" /> Name:
              </label>
              <input
                type="text"
                id="name"
                {...register('name', {
                  required: 'Name is required',
                  minLength: {
                    value: 2,
                    message: 'Minimum length of 2 letters is required',
                  },
                })}
                className="p-2 rounded-md border-2 border-gray-200 text-gray-500"
                placeholder="Enter name"
              />
            </div>

            <div className="flex flex-col w-full space-y-1 text-md">
              <label
                htmlFor="email"
                className="flex  items-center font-semibold"
              >
                <FaMailBulk className="w-5 mr-2" /> Email:
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { required: 'Valid email is required' })}
                className="p-2 rounded-md border-2 border-gray-300 text-gray-400"
                placeholder="Enter email"
              />
            </div>

            <div className="flex flex-col w-full space-y-1 text-md">
              <label
                htmlFor="message"
                className="flex  items-center font-semibold"
              >
                <MailIcon className="w-5 mr-2" /> Message:
              </label>
              <textarea
                id="message"
                {...register('message', {
                  required: 'Your message is empty',
                  minLength: {
                    value: 3,
                    message: 'Message must contain at least 3 letters',
                  },
                })}
                className="p-2 rounded-md border-2 border-gray-300 text-gray-500"
                placeholder="Write Message..."
                rows={4}
              ></textarea>
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="flex items-center justify-center bg-blue-700 hover:bg-blue-900  rounded-md tracking-wider cursor-pointer px-5 py-3 w-full text-white text-lg font-semibold"
              >
                Send message <BiMailSend className="w-6 h-7 ml-2" />
              </button>
            </div>
          </form>
        </div>

        <div className="col-span-1 gap-4 pl-7 py-14 bg-gray-50 h-full">
          <h2 className="text-xl font-bold text-green-400 mt-3 mb-7">
            Connect via:{' '}
          </h2>
          <div className="space-y-7 font-semibold text-md text-gray-400 w-fit">
            <Link href={'https://www.github.com/hayormikun'} target={"_blank"}>
              <a className="flex items-center">
                <FaGithub className="w-6 mr-2 text-black" /> Github
              </a>
            </Link>
            <Link
              href={'https://www.linkedin.com/in/favour-akomolafe-7345b9114/'}
              target={"_blank"}
            >
              <a className="flex items-center">
                <FaLinkedinIn className="w-6 mr-2 text-blue-400" /> LinkedIn
              </a>
            </Link>

            <Link href={'mailto:akomolafefavour@gmail.com'} target={"_blank"}>
              <a className="flex items-center">
                <FaMailBulk className="w-6 mr-2 text-zinc-400" /> Mail
              </a>
            </Link>

            <Link href={'https://www.twitter.com/FavorAkomolafe'} target={"_blank"}>
              <a className="flex items-center">
                <FaTwitter className="w-6 mr-2 text-blue-400" /> Twitter
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
