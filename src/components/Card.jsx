import Images from "./Images"
import { NavLink } from "react-router-dom"
import data from "../data.json"

const Card = ({ id }) => {
  const product = data["imagesGallery"].find(product => product.id === id)
  return (
    <div className="flex flex-col gap-3 p-3 max-w-fit max-h-fit">
      <NavLink to={`/Product?title=${product.title}`} className="">
        <div className="flex items-center justify-center aspect-[1/1] w-full max-w-[250px] overflow-hidden bg-gray-600">
          <figure className="w-full h-full">
            <img src={product.src} alt={product.alt} className="w-full h-full object-cover transition-opacity duration-200 hover:opacity-70" />
          </figure>
        </div>
        <div>
            {product.title}
        </div>
      </NavLink>
    </div>
  )
}

export default Card