import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="w-7/10 font-bold">
      <ul className="flex justify-between">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "underline decoration-1.5" : ""}>
            accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "underline decoration-1.5" : ""}>
            à propos
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? "underline decoration-1.5" : ""}>
            oeuvres
          </NavLink>
        </li>
        <li>
          <NavLink to="/actuality" className={({ isActive }) => isActive ? "underline decoration-1.5" : ""}>
            actualités
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "underline decoration-1.5" : ""}>
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
