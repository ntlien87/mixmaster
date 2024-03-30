import { useNavigation, Form } from 'react-router-dom'

const SearchForm = ({searchTerm}) => {
  const navigate = useNavigation()

  const isSubmitting = navigate.state === 'submitting'

  return (
    <div className="w-full flex justify-center">
      <Form className="py-6 px-10 bg-slate-50 w-full max-w-[500px] rounded-md shadow-md mb-16 flex">
        <input
          type="search"
          name="search"
          defaultValue={searchTerm}
          className="px-4 py-1 bg-slate-200 border border-slate-300 flex-auto rounded-l-md shadow-md"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-1 bg-green-600 hover:bg-green-500 transition-colors text-slate-100 border border-transparent rounded-r-md"
        >
          {isSubmitting ? 'Searching' : 'Search'}
        </button>
      </Form>
    </div>
  )
}
export default SearchForm
