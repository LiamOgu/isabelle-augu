import Images from "./Images"
import { NavLink } from "react-router-dom"
import data from "../data.json"

const Card = ({ id }) => {
  const product = data["imagesGallery"].find(product => product.id === id)
  return (
    <div className="flex flex-col gap-3 p-3 max-w-fit max-h-fit">
      <NavLink to={`/Product?id=${product.id}`} className="">
        <div className=" flex items-center justify-center">
          <figure className="bg-blue-300">
            <Images id={product.id} imageType="gallery" className="opacity-100 z-10 transition-opacity duration-200 hover:opacity-70" />
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