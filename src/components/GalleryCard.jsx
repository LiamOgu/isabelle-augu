import Images from "./Images.jsx"
import { NavLink } from "react-router-dom"
import data from "../data.js";

const Card = ({ id }) => {
  const product = data["imagesGallery"].find(product => product.id === id)
  return (
    <div className="flex flex-col gap-3 p-3 max-w-fit max-h-fit">
      <NavLink to={`/Product?title=${product.title}`} className="">
        <div className="flex items-center justify-center aspect-[1/1] w-full max-w-[250px] overflow-hidden mb-2">
          <figure className="w-full h-full">
            <img src={product.src} alt={product.alt} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          </figure>
        </div>
        <div className="text-2xl font-family-primary font-bold">
          {product.title}
        </div>
      </NavLink>
    </div>
  )
}

export default Card