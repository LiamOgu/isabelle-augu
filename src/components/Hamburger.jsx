import { useState } from "react"
import Hamburger from "hamburger-react"
import NavLinks from "./NavLinks.jsx"
import { motion, AnimatePresence } from "motion/react"

const HamburgerComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* Bouton Hamburger */}
      <div className="lg:hidden fixed top-2 right-2 z-50 backdrop-blur-md rounded-md">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed top-0 right-0 w-screen h-screen bg-white flex flex-col items-center justify-center gap-8 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <NavLinks onClick={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HamburgerComponent
