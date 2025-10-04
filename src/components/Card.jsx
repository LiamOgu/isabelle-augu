import Photos from "./Images"
import { NavLink } from "react-router-dom"

const Card = ({ id }) => {
  return (
    <div className="flex flex-col gap-3 p-3 max-w-fit max-h-fit">
      <NavLink to={`/Product?id=${id}`} className="">
        <div className=" flex items-center justify-center">
          <figure className="bg-blue-300">
            <Photos id={id} photoType="gallery" className="opacity-100 z-10 transition-opacity duration-300 hover:opacity-70" />
          </figure>
        </div>
        <div>
            Titre - Exemple
        </div>
      </NavLink>
    </div>
  )
}

export default Card