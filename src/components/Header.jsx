import Navbar from "./Navbar.jsx"
import Hamburger from "./Hamburger.jsx"

const Header = (props) => {
  return (
    <header className="w-full flex flex-col gap-6 py-6 items-center">
      <h1 className="py-24 text-5xl md:py-3">{props.title}</h1>
      
      {/* Navbar desktop */}
      <Navbar />

      {/* Hamburger mobile */}
      <Hamburger />

      <hr className="hidden md:block w-full border-x border-gray-300 mt-4" />
    </header>
  )
}

export default Header