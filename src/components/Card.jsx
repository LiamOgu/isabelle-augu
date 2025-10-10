import Images from "./Images"
import { NavLink } from "react-router-dom"
import data from "../data.json"

const Card = ({ id }) => {
  const product = data["imagesGallery"].find(product => product.id === id)
  return (
    <div className="flex flex-col gap-3 p-3 max-w-fit max-h-fit">
      <NavLink to={`/Product?title=${product.title}`} className="">
        <div className="flex items-center justify-center aspect-[4/3] w-full max-w-[250px] overflow-hidden">
          <figure className="bg-gray-500">
            <Images 
            id={product.id} 
            imageType="gallery" 
            className="w-full h-full opacity-100 z-10 transition-opacity duration-200 hover:opacity-70" />
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