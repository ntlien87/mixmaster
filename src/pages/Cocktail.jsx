import { useLoaderData, Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios(`${singleCocktailUrl}${id}`)
      return data
    },
  }
}

export const loader =
  (queryCLient) =>
  async ({ params: { id } }) => {
    await queryCLient.ensureQueryData(singleCocktailQuery(id))
    return { id }
  }

const Cocktail = () => {
  const { id } = useLoaderData()

  const { data } = useQuery(singleCocktailQuery(id))

  if (!data) return <Navigate to={'/'} />

  const drink = data.drinks[0]

  const {
    strDrink: name,
    strGlass: glass,
    strAlcoholic: info,
    strDrinkThumb: img,
    strCategory: category,
    strInstructions: instructions,
  } = drink

  const validIngredient = Object.keys(drink)
    .filter((key) => key.startsWith('strIngredient') && drink[key] !== null)
    .map((key) => drink[key])

  // console.log(validIngredient);

  return (
    <div className="mb-10">
      <Link
        to={'/'}
        className="text-green-600 text-lg font-medium underline underline-offset-3 hover:text-green-500 transition-colors"
      >
        Back Home
      </Link>
      <div className="flex flex-col md:flex-row mt-10 gap-12 ">
        <div className="flex-1">
          <img src={img} alt={name} className="rounded-md  object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <p>
            <span>Name : </span>
            {name}
          </p>
          <p>
            <span>Category : </span>
            {category}
          </p>
          <p>
            <span>Info :</span> {info}
          </p>
          <p>
            <span>Glass :</span> {glass}
          </p>
          <p>
            <span>Ingredients :</span>{' '}
            {validIngredient.map((item, index) => (
              <p className="inline" key={index}>
                {item}
                {index < validIngredient.length - 1 ? ', ' : ''}
              </p>
            ))}
          </p>
          <p>
            <span>Instructions :</span> {instructions}
          </p>
        </div>
      </div>
    </div>
  )
}
export default Cocktail
