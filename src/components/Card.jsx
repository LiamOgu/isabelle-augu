import Photos from "./Photos"
import { NavLink } from "react-router-dom"

const Card = () => {
  return (
    <div className="flex flex-col gap-3 p-3 max-w-fit max-h-fit">
      <NavLink to="/">
        <div className=" flex items-center justify-center">
            <Photos id={1} className="" />
        </div>
        <div>
            Titre - Exemple
        </div>
      </NavLink>
    </div>
  )
}

export default Card