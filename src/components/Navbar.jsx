import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex  flex-col md:flex-row md:item-center justify-between gap-4 py-8 mb-10">
      <NavLink to={'/'} >
        <h1 className="inline text-2xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 tracking-widest">
          MixMaster
        </h1>
      </NavLink>
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 font-medium text-slate-800 text-lg ">
        <NavLink
          className={`hover:text-green-400 transition-colors ${({ isActive }) =>
            isActive ? 'active' : ''}`}
          to={'/'}
        >
          Home
        </NavLink>
        <NavLink
          className="hover:text-green-400 transition-colors"
          to={'/about'}
        >
          About
        </NavLink>
        <NavLink
          className="hover:text-green-400 transition-colors"
          to={'/newsletter'}
        >
          Newsletter
        </NavLink>
      </div>
    </nav>
  )
}
export default Navbar
