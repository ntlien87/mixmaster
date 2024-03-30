import { Link } from 'react-router-dom'

const SingleCocktail = ({
  idDrink: id,
  strAlcoholic: info,
  strDrink: name,
  strDrinkThumb: img,
  strInstructions: instructions,
  strGlass: glass,
}) => {
  return (
    <div className=" bg-white rounded-md shadow-md w-full hover:shadow-lg transition-shadow">
      <img
        src={img}
        alt={name}
        className="w-full h-[300px] object-fit rounded-t-md"
      />
      <div className="flex justify-center items-center flex-col mb-3">
        <h3 className="text-center text-2xl font-bold my-4 text-green-600">
          {name}
        </h3>
        <h4 className="font-medium text-slate-600">{glass}</h4>
        <p className="px-8 text-slate-500">{info}</p>
      </div>
      <div className="w-full flex justify-center mb-6">
        <Link
          to={`/cocktail/${id}`}
          className="px-4 py-1 bg-green-600 hover:bg-green-500 transition-colors text-white rounded-md shadow-md"
        >
          Details
        </Link>
      </div>
    </div>
  )
}
export default SingleCocktail
