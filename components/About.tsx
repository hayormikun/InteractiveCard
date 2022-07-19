import Image from 'next/image'

export const About = () => {
  return (
    <>
      <div id='about' className="block md:grid grid-cols-3 gap-3 items-center md:h-[550px]">
        <div className="w-full overflow-hidden col-span-1">
          <Image
            src={'/img/DSC_1554.jpg'}
            width={'350px'}
            height={'350px'}
            objectFit="cover"
            alt="Favour Akomolafe"
            className="rounded-full"
          />
        </div>
        <div className="w-full col-span-2">
          <div className="flex flex-col my-12">
            <h1 className="text-gray-700 text-5xl font-bold mb-5">
              Hello, I am <span className="text-blue-700">Favour</span>
            </h1>
            <p className='text-gray-500 font-normal mb-5'>
              Software developer at Behruz hybrid, Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              fugiat est ab nobis nulla, sapiente, saepe reprehenderit maiores
              ea at non nam impedit autem illum adipisci natus, repellat
              accusantium et! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Repellendus aliquam minima quidem voluptas, assumenda nisi,
              quas doloremque odit eveniet ipsam nobis? Esse dolore nostrum,
              laudantium explicabo similique officiis porro unde?
            </p>
            <button className='bg-blue-700 py-3 px-5 rounded text-white font-semibold tracking-wider cursor-pointer hover:bg-blue-900 w-fit'>
                View projects
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
