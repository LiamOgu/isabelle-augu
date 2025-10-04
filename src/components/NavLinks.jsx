import { NavLink } from "react-router-dom"

const linkStyle = ({ isActive }) =>
  isActive
    ? "underline decoration-2 decoration-black transition-colors duration-300"
    : "underline decoration-1.5 decoration-transparent hover:decoration-black transition-colors duration-300"

const NavLinks = ({ onClick }) => {
  return (
    <ul className="flex flex-col gap-5 text-lg md:flex-row md:justify-between md:w-7/10 md:text-base md:gap-0">
      <li><NavLink to="/" className={linkStyle} onClick={onClick}>accueil</NavLink></li>
      <li><NavLink to="/about" className={linkStyle} onClick={onClick}>à propos</NavLink></li>
      <li><NavLink to="/gallery" className={linkStyle} onClick={onClick}>œuvres</NavLink></li>
      <li><NavLink to="/actuality" className={linkStyle} onClick={onClick}>actualités</NavLink></li>
      <li><NavLink to="/contact" className={linkStyle} onClick={onClick}>contact</NavLink></li>
    </ul>
  )
}

export default NavLinks