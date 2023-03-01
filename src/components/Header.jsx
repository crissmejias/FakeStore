import { NavLink } from "react-router-dom"

const Header = () => {
    return(
        <header className="p-6 bg-orange-400 flex justify-between">
        <h1 className="text-2xl text-gray-100 font-semibold">🛍️ Fake Store</h1>
        <nav>
          <ul className="flex gap-8 justify-center items-center">
            <NavLink className='text-gray-100 font-semibold text-lg' to='/'>Products</NavLink>
            <NavLink className='text-gray-100 font-semibold text-lg' to='/categories'>Categories</NavLink>
            <NavLink className='text-gray-100 text-semibold text-xl relative' to='/cart'>
              <i className="fi fi-rr-shopping-cart"></i>
              <span className="absolute -top-2 text-xs bg-red-600 w-4 h-4 text-center rounded-full">3</span>
            </NavLink>
            <NavLink className='text-gray-100 font-semibold text-lg' to='/login'>Login</NavLink>
          </ul>
        </nav>
      </header>
    )
}
export {Header};