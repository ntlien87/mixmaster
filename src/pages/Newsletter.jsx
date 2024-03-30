import { Form, redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'

export const action = async ({ request }) => {
  const formData = await request.formData()

  const data = Object.fromEntries(formData)

  // const res = await axios.post(newsletterUrl, data)
  // console.log(res)

  return redirect('/')
}

const Newsletter = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full p-8 mt-20  bg-slate-50 rounded-md shadow-md max-w-[600px] mx-auto">
        <h1 className="text-center text-3xl font-bold text-slate-800">
          Our Newsletter
        </h1>
        <Form method="POST" className="w-full flex flex-col gap-4 mt-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-medium text-slate-800">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={'phuong'}
              className="bg-slate-200 border border-slate-300 rounded-md shadow-md outline-none px-4 py-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastname" className="font-medium text-slate-800">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              defaultValue={'nguyen'}
              className="bg-slate-200 border border-slate-300 rounded-md shadow-md outline-none px-4 py-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium text-slate-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue="test@gmail.com"
              className="bg-slate-200 border border-slate-300 rounded-md shadow-md outline-none px-4 py-1"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-green-600 py-1 text-slate-100 rounded-md shadow-md tracking-wider font-medium hover:bg-green-500 transition-colors"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  )
}
export default Newsletter
