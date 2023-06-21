import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const cartItems = useSelector(store => store.cart.items)
  // console.log(cartItems.length)
  return (
    <nav className="flex justify-between items-center py-3 lg:py-6">
      <h1 className="font-bold text-[22px] text-orange-400">
        {/* <Link data-testid="logo" to="/">
          SWIGGY
        </Link> */}
        <img data-testid="logo" src={logo} alt="SWIGGY" className="w-[70px]" />
      </h1>

      {/* web version */}
      <ul className="list-none hidden lg:flex gap-6">
        <li data-testid="nav" key="Search">
          Search
        </li>
        <li key="Offers">Offers </li>
        <li key="Help">Help </li>
        <li key="Sign In">Sign In </li>
        <li key="Cart">
          {/* <Link to="cart">Cart {cartItems.length > 0 && <span className="bg-orange-400 text-white p-0.5 rounded-sm">{cartItems.length}</span>}</Link> */}
          <Link to="cart">
            Cart{" "}
            {
              <span data-testid="cart" className="bg-orange-400 text-white p-0.5 rounded-sm">
                {cartItems.length}
              </span>
            }
          </Link>
        </li>
      </ul>

      {/* mobile version */}
      <div className="block lg:hidden relative">
        {isOpen ? (
          <button onClick={() => setIsOpen(prev => !prev)} className="bg-black p-2 text-white">
            X
          </button>
        ) : (
          <button onClick={() => setIsOpen(prev => !prev)} className="bg-black p-2 text-white">
            M
          </button>
        )}
        <div className={`${isOpen ? "block" : "hidden"} absolute z-50 top-[120%] right-0`}>
          <ul className="list-none flex flex-col gap-4 shadow-xl p-8 bg-slate-500 text-white">
            <li key="Search">Search </li>
            <li key="Offers">Offers </li>
            <li key="Help">Help </li>
            <li key="Sign In">Sign In </li>
            <li key="Cart">
              {/* <Link to="cart">Cart {cartItems.length > 0 && <span className="bg-orange-400 text-white p-0.5 rounded-sm">{cartItems.length}</span>}</Link> */}
              <Link to="cart">Cart {<span className="bg-orange-400 text-white p-0.5 rounded-sm">{cartItems.length}</span>}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
