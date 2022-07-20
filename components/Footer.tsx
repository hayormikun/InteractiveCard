import { format } from 'date-fns'

export const Footer = () => {
  const date = new Date()
  const year = format(date, 'yyyy')

  return (
    <footer className="w-full bg-gray-50 border-t-2 border-zinc-200 py-4 px-10 md:px-20 flex items-center justify-between font-nunito">
      <div className="text-lg font-bold text-gray-500">
        <p>
          Favour <span className="text-blue-600">Akomolafe</span>
        </p>
      </div>

      <h3 className="flex flex-shrink items-center text-gray-400 text-md font-medium">
        Copyright <span className="mx-1 "> &copy; </span> {year}
      </h3>
    </footer>
  )
}
