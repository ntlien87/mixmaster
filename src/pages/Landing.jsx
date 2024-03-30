import { useLoaderData } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import SingleCocktail from '../components/SingleCocktail'
import SearchForm from '../components/SearchForm'

const cocktailSearchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const res = await axios.get(`${cocktailSearchUrl}${searchTerm}`)

      return res.data.drinks
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url)
    // console.log(url.searchParams.get('search'))

    const searchTerm = url.searchParams.get('search') || ''

    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))

    return { searchTerm }
  }

const Landing = () => {
  const { searchTerm } = useLoaderData()

  const { data: cocktailList } = useQuery(searchCocktailsQuery(searchTerm))

  return (
    <section>
      <SearchForm searchTerm={searchTerm} />

      {cocktailList ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8">
          {cocktailList.map((item) => (
            <SingleCocktail key={item.idDrink} {...item} />
          ))}
        </div>
      ) : (
        <h4 className="text-center text-slate-800 text-lg mt-20">
          No matching cocktail found
        </h4>
      )}
    </section>
  )
}
export default Landing
