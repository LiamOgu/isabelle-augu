import { IoLogoInstagram } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <div className="w-full">
      <footer className="bg-gray-100 text-gray-700 py-6 flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <a href="mailto:tonemail@example.com">
            <IoMailOutline size={30}/>   
          </a>
          <a href="https://www.instagram.com/isabelleauguart/" target="_blank" rel="noopener noreferrer">
            <IoLogoInstagram size={30} className="" />
          </a>
        </div>
        <div className="text-sm">
          © 2025 Isabelle Augu. Tous droits réservés.
        </div>
      </footer>
    </div>
  )
}

export default Footer