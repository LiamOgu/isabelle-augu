import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="w-7/10">
      <ul className="flex justify-between">
        <li>
          <NavLink to="/" className={({ isActive }) => 
            isActive 
            ? "underline decoration-1.5 decoration-black transition-colors duration-300"
            : "underline decoration-1.5 decoration-transparent hover:decoration-black transition-colors duration-300"}>
            accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "underline decoration-2 decoration-black transition-colors duration-300"
                : "underline decoration-1.5 decoration-transparent hover:decoration-black transition-colors duration-300"
            }
          >
            à propos
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className={({ isActive }) => 
            isActive 
            ? "underline decoration-2 decoration-black transition-colors duration-300"
            : "underline decoration-1.5 decoration-transparent hover:decoration-black transition-colors duration-300"}>
            oeuvres
          </NavLink>
        </li>
        <li>
          <NavLink to="/actuality" className={({ isActive }) =>
            isActive 
            ? "underline decoration-2 decoration-black transition-colors duration-300"
            : "underline decoration-1.5 decoration-transparent hover:decoration-black transition-colors duration-300"}>
            actualités
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => 
            isActive 
            ? "underline decoration-2 decoration-black transition-colors duration-300"
            : "underline decoration-1.5 decoration-transparent hover:decoration-black transition-colors duration-300"}>
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
