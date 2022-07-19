import Image from 'next/image'

export const Projects = () => {
  return (
    <div id='projects' className="my-12 w-full">
      <h1 className="text-blue-700 font-bold text-6xl text-center mb-10">
        Projects
      </h1>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-gray-50 max-w-[350px] cursor-pointer rounded-md shadow-md overflow-hidden mb-10 mx-auto space-y-2">
          <Image
            src={'/img/DSC_1554.jpg'}
            width={350}
            height={300}
            objectFit="cover"
            className="shadow-md"
          />

          <div className="block p-5">
            <h2 className='text-green-400 text-lg font-semibold mb-3'>Saviours Assembly</h2>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              iure similique repudiandae, autem numquam ipsam aperiam facilis
              necessitatibus alias quam ducimus voluptatum recusandae minima
              expedita ad itaque nam voluptas odit?
            </p>
          </div>
        </div>

        <div className="bg-gray-50 max-w-[350px] cursor-pointer rounded-md shadow-md overflow-hidden mb-10 mx-auto space-y-2">
          <Image
            src={'/img/DSC_1554.jpg'}
            width={350}
            height={300}
            objectFit="cover"
            className="shadow-md"
          />

          <div className="block p-5">
            <h2 className='text-green-400 text-lg font-semibold mb-3'>Finance Logger</h2>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              iure similique repudiandae, autem numquam ipsam aperiam facilis
              necessitatibus alias quam ducimus voluptatum recusandae minima
              expedita ad itaque nam voluptas odit?
            </p>
          </div>
        </div>
        


        <div className="bg-gray-50 max-w-[350px] cursor-pointer rounded-md shadow-md overflow-hidden mb-10 mx-auto space-y-2">
          <Image
            src={'/img/DSC_1554.jpg'}
            width={350}
            height={300}
            objectFit="cover"
            className="shadow-md"
          />

          <div className="block p-5">
            <h2 className='text-red-400 text-lg font-semibold mb-3'>Tail Foods</h2>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              iure similique repudiandae, autem numquam ipsam aperiam facilis
              necessitatibus alias quam ducimus voluptatum recusandae minima
              expedita ad itaque nam voluptas odit?
            </p>
          </div>
        </div>

        <div className="bg-gray-50 max-w-[350px] cursor-pointer rounded-md shadow-md overflow-hidden mb-10 mx-auto space-y-2">
          <Image
            src={'/img/DSC_1554.jpg'}
            width={350}
            height={300}
            objectFit="cover"
            className="shadow-md"
          />

          <div className="block p-5">
            <h2 className='text-blue-400 text-lg font-semibold mb-3'>Biosec Solutions</h2>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              iure similique repudiandae, autem numquam ipsam aperiam facilis
              necessitatibus alias quam ducimus voluptatum recusandae minima
              expedita ad itaque nam voluptas odit?
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
