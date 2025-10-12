import { useState } from "react"
import Hamburger from "hamburger-react"
import NavLinks from "./NavLinks.jsx"

const HamburgerComponent = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div>
      <div className="lg:hidden fixed top-2 right-2 z-50 backdrop-blur-md rounded-md">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
      </div>

      {isOpen && (
        <div className="fixed top-0 right-0 w-screen h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center gap-8 z-10">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  )
}

export default HamburgerComponent