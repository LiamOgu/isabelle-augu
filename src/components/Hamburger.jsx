import { useState } from "react"
import Hamburger from "hamburger-react"
import NavLinks from "./NavLinks.jsx"

const HamburgerComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden absolute top-0 right-0 z-50">
      {/* Bouton hamburger */}
      <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />

      {/* Menu mobile */}
      {isOpen && (
        <div className="absolute top-0 right-0 bg-white w-screen h-screen flex flex-col items-center justify-center gap-8">
          <div className="md:hidden absolute top-0 right-0 z-50">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
          </div>
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  )
}

export default HamburgerComponent