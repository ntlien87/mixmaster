import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'

const Error = () => {
  const error = useRouteError()
  // console.log(error)

  if (error.status === 404) {
    return (
      <main className="min-h-screen flex justify-center items-center px-4">
        <div className="flex flex-col items-center gap-2 -mt-16">
          <img src={img} alt="error image" />
          <h3 className="text-xl text-slate-800 font-semibold mt-4">Ohh!</h3>
          <p className="text-slate-600 font-medium">
            We can't seem to find page you are looking for!
          </p>
          <Link
            to={'/'}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors mt-6"
          >
            Back Home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <div>
      <h3 className="text-center mt-20 text-xl text-slate-800 font-semibold">
        Something went wrong!
      </h3>
    </div>
  )
}
export default Error
